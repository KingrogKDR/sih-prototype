import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

function SignUp() {


  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {};

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="flex flex-col justify-center md:min-h-screen bg-orange-300 md:w-[40%]">
        <div className="md:hidden h-32 flex items-center text-center justify-center p-4">
          <FaBook className="w-20 h-20"/>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col px-10 space-y-10 text-bold text-4xl text-rose-950">
                    <FaBook className="w-20 h-20"/>
            <div>
              Education is not the filling of a pail, but the lighting of a
              fire.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] bg-white rounded-lg shadow-lg p-16 md:p-20 lg:p-40 lg:pt-16 relative">
        <div className="top-0 right-0 mr-8 mt-8 hidden md:block absolute">
          Already a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to="/signin">Sign In</Link>
          </span>
        </div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold pb-10 text-gray-800">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex justify-between">
            <div className="mb-4 md:mr-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 md:ml-2">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="6+ Characters"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-3 md:hidden">
          Already a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to="/signin">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
