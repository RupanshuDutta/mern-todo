const Hero = () => {
  return (
    <>
      <div className="Hero h-screen w-full text-center flex items-center justify-center text-slate-600 mt-20">
        <div className="flex flex-col items-center gap-4 font-medium leading-none tracking-tight">
          <h1 className="text-6xl font-medium mb-4 leading-snug">
            Organize your work and life
          </h1>
          <h2 className="text-3xl font-medium italic">
            with focus, organization, and calm
          </h2>
          <h3 className="text-2xl font-normal mb-6 italic leading-tight">
            using <span className="text-sky-400 font-bold px-2 text-3xl">ToDo</span> App .
          </h3>
          <button className="hover:bg-blue-300 border rounded-lg px-5 py-2 duration-700 ease-in-out hover:transition-colors hover:border-violet-500 mt-5 text-4xl font-light">
             Make Your's.
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
