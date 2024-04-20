const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:justify-around items-center bg-blue-400 p-32">
      <div className="lg:w-full lg:items-center lg:mr-10">
        <div className="text-3xl lg:text-6xl m-2 p-2 font-bold mb-4">Hi, I'm Swayam Kaushal</div>
        <div className="text-base m-2 p-2 lg:text-lg  mb-8">
          I'm a passionate software engineer with expertise in Python, C++, and the MERN stack. With a strong foundation in web development, data science, and machine learning, I bring innovative solutions to life. From crafting dynamic web applications to extracting insights from complex datasets, I'm dedicated to creating impactful solutions that drive progress and innovation.
        </div>
      </div>
      <div className="lg:w-full flex justify-center items-center">
        <img src="/logo.svg" alt=" " className="bg-white rounded-full w-48 lg:w-1/2 h-48 lg:h-1/2"></img>
      </div>
    </div>
  );
};

export default Home;
