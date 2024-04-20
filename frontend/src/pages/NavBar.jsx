/* eslint-disable react/prop-types */

const NavBar = ({ user, signOut }) => {

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = "resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="bg-black flex justify-around p-2">
      <div className="flex w-full justify-around items-center">
        <div className="text-white flex justify-center items-center">
          <img
            src="/logo.svg"
            alt=""
            className="bg-white w-12 h-12 rounded-full"
          />
          <div className="ml-3">Hello {user.username}</div>
        </div>
      </div>
      <div className="flex w-full justify-around items-center text-white">
        <div className="cursor-pointer hover:text-red-500  p-5">
          Home
        </div>
        <div className="cursor-pointer hover:text-red-500 p-5">
          Skills
        </div>
        <div className="cursor-pointer hover:text-red-500 p-5">
          Projects
        </div>
        <div className="cursor-pointer hover:text-red-500  p-5">
          Contact Us
        </div>
      </div>
      <div className="flex w-full justify-end items-center">
        <div className="m-3 cursor-pointer hover:bg-green-300 hover:scale-105 bg-green-400 p-2 rounded-xl font-semibold text-sm"  onClick={handleDownloadResume}>
          Download Resume
        </div>
        <div
          className="m-3 cursor-pointer bg-blue-500 hover:scale-105 p-2 rounded-xl font-semibold text-sm"
          onClick={signOut}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default NavBar;
