import { useState } from "react";
import { Link} from "react-router-dom";
import { IoIosBookmarks } from "react-icons/io";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center md:min-h-screen bg-pink-200 md:w-[40%]">
        <div className="md:hidden">
<IoIosBookmarks className="w-20 h-20 m-3"/>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col p-10 space-y-10 text-bold text-3xl text-rose-950">
<IoIosBookmarks className="w-20 h-20"/>
            <div>You learn through iterations, not perfection.</div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] bg-white rounded-lg shadow-lg p-16 md:p-20 lg:p-40 relative">
        <div className="absolute top-0 right-0 mr-8 mt-8 hidden md:block">
          Not a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold pb-10 text-gray-800">
            Sign In
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={formData.username}
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
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mb-6">
            We are glad to have you back. Keep Learning!
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-3 md:hidden">
          Not a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
