
// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="Footer bg-sky-100 text-slate-700 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl">
//       <div className="container mx-auto py-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm md:text-base lg:text-lg xl:text-xl">&copy; {currentYear} Your Website Name. All rights reserved.</p>
//           <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
//             <li>
//               <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Contact Us</a>
//             </li>
//             <li>
//               <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Terms of Service</a>
//             </li>
//             <li>
//               <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Privacy Policy</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer bg-sky-100 text-slate-700 font-medium text-lg">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-center md:text-left text-sm md:text-base lg:text-lg xl:text-xl">
            &copy; {currentYear} Your Website Name. All rights reserved.
          </p>
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl hover:text-blue-400">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
