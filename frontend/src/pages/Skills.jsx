
const Skills = () => {
  return (
    <div className="bg-gray-100 w-full h-full  p-10">
      <div className="text-bold text-center text-3xl ">SKILLS</div>
      <div className="flex w-full p-6 justify-around rounded-lg">
        {/* Web Development */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Web Development
          </h3>
          <ul className="list-disc">
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>React.js
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>Express.js
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>Node.js
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>HTML
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>CSS
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>JavaScript
            </li>
          </ul>
        </div>

        {/* Data Science & Analytics */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Data Science & Analytics
          </h3>
          <ul className="list-disc">
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>Machine Learning
            </li>
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>Data Science
            </li>
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>Data Analyst
            </li>
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>Python
            </li>
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>Pandas
            </li>
            <li>
              <i className="mr-2 fas fa-flask text-green-500"></i>NumPy
            </li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Backend Development
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <i className="mr-2 fas fa-database text-purple-500"></i>MongoDB
            </li>
            <li>
              <i className="mr-2 fas fa-database text-purple-500"></i>Flask
            </li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Programming Languages
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>Python
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>C++
            </li>
            <li>
              <i className="mr-2 fas fa-code text-blue-500"></i>JavaScript
            </li>
          </ul>
        </div>

        {/* Cloud Services */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Cloud Services
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <i className="mr-2 fas fa-cloud text-yellow-500"></i>AWS
            </li>
          </ul>
        </div>

        {/* API Development & Testing */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">
            API Development & Testing
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <i className="mr-2 fas fa-server text-indigo-500"></i>Express.js
            </li>
            <li>
              <i className="mr-2 fas fa-server text-indigo-500"></i>Postman
            </li>
          </ul>
        </div>

        {/* Data Visualization */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Data Visualization
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <i className="mr-2 fas fa-chart-bar text-red-500"></i>Streamlit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
