// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === '' || body.trim() === '') {
//       toast.error('Title and body cannot be empty');
//       return;
//     }

//     if (editingIndex !== null) {
//       const updatedTodos = [...todos];
//       updatedTodos[editingIndex] = { title, body };
//       setTodos(updatedTodos);
//       toast.success('Todo updated successfully');
//       setEditingIndex(null);
//     } else {
//       setTodos([...todos, { title, body }]);
//       toast.success('Todo added successfully');
//       toast.info('Task added but not saved. To save it, sign up.');
//     }
//     setTitle('');
//     setBody('');
//   };

//   const handleEdit = (index) => {
//     const todoToEdit = todos[index];
//     setTitle(todoToEdit.title);
//     setBody(todoToEdit.body);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//     toast.success('Todo deleted successfully');
//     setEditingIndex(null);
//   };

//   return (
//     <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-6">TODO App</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mb-6">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//           className="w-full p-3 mb-3 border rounded-md"
//         />
//         <textarea
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           placeholder="Body"
//           className="w-full p-3 mb-3 border rounded-md"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">{editingIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
//       </form>
//       <div className="max-w-3xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {todos.map((todo, index) => (
//           <div key={index} className="bg-gray-200 p-4 rounded-lg">
//             <h3 className="text-xl font-bold">{todo.title}</h3>
//             <p className="text-base">{todo.body}</p>
//             <div className="flex justify-end mt-2">
//               <button onClick={() => handleEdit(index)} className="text-blue-500 mr-2">Edit</button>
//               <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch todos when the component mounts
  useEffect(() => {
    axios.get(`${window.location.origin}/api/gettask`)
      .then((response) => {
        if (response.data.list) {
          setTodos(response.data.list);
        }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        toast.error('Error fetching tasks');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      toast.error('Title and body cannot be empty');
      return;
    }

    if (editingId !== null) {
      axios.put(`${window.location.origin}/api/updatetask/${editingId}`, { title, body })
        .then((res) => {
          const updatedTodos = todos.map(todo =>
            todo._id === editingId ? { ...todo, title, body } : todo
          );
          setTodos(updatedTodos);
          toast.success('Todo updated successfully');
          setEditingId(null);
        })
        .catch(error => {
          console.error('Error updating task:', error);
          toast.error('Error updating task');
        });
    } else {
      axios.post(`${window.location.origin}/api/addtask`, { title, body })
        .then(response => {
          setTodos([...todos, response.data.list]);
          toast.success('Todo added successfully');
        })
        .catch(error => {
          console.error('Error adding task:', error);
          toast.error('Error adding task');
        });
    }
    setTitle('');
    setBody('');
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(todo => todo._id === id);
    setTitle(todoToEdit.title);
    setBody(todoToEdit.body);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/deletetask/${id}`)
      .then(response => {
        const updatedTodos = todos.filter(todo => todo._id !== id);
        setTodos(updatedTodos);
        toast.success('Todo deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting task:', error);
        toast.error('Error deleting task');
      });
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">TODO App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 mb-3 border rounded-md"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-3 mb-3 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">
          {editingId !== null ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
      <div className="w-full max-w-3xl grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <div key={todo._id} className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">{todo.title}</h3>
            <p className="text-base">{todo.body}</p>
            <div className="flex justify-end mt-2">
              <button onClick={() => handleEdit(todo._id)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => handleDelete(todo._id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
