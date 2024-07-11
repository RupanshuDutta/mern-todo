import image from "../../assets/frontpage.png"

const About = () => {
  
  return (
    <>
    <div className="About-section h-screen py-20 text-slate-600 w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="container mx-auto px-4 h-full flex flex-col justify-evenly">
              <h2 className="text-6xl font-semibold text-center mb-8">About Us</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/2">
                  <img className="w-full h-auto rounded-lg shadow-2xl" src={image} alt="About Us"/>
                </div>
                <div className="md:w-1/2">
                  <p className="text-3xl leading-normal mt-16 mb-4">
                    At ToDo App, we believe in empowering individuals to achieve their goals with clarity and focus. Our platform is designed to help you organize your work and life efficiently, ensuring you stay on top of your tasks and deadlines.
                  </p>
                  <p className="text-xl text-slate-500 leading-loose italic">
                    Join our community of organized and productive individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default About;