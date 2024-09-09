import { NavLink } from "react-router-dom";
import star from "../assets/star.svg";

function Navbar({
  title,
  source,
  customStyles,
  isCourse,
  textStyles,
  imageClass,
  type,
}) {
  return (
    <div
      className={`w-full pt-10 h-[280px] ${customStyles} rounded-b-full flex flex-col`}
    >
      <div className="h-[20%] flex flex-row items-center justify-between gap-3">
        <div className="w-[68px] h-[58px] top-[14px] left-[28px] rounded-full bg-[#D9D9D9] ml-10"></div>
        {type === "learner" ? (
          <div className="w-full flex justify-end gap-8 pr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-courses"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              All Courses
            </NavLink>
            <NavLink
              to="/my-learnings"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              My Learnings
            </NavLink>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-8 pr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-courses"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              Add A Course
            </NavLink>
            <NavLink
              to="/my-learnings"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              My Courses
            </NavLink>
          </div>
        )}
        <div className="w-[68px] h-[58px] top-[14px] left-[28px] rounded-full bg-[#D9D9D9] mr-10"></div>
      </div>
      <div className="w-full h-[80%] flex items-center justify-center pb-20 mt-5">
        <div>
          <img src={source} className={`${imageClass}`} />
        </div>
        <p className={` lg:text-[3.5rem] text-white ${textStyles}`}>{title}</p>
        {isCourse ? (
          <div className="w-56 h-20 flex justify-center items-center text-xl">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            {type==="learner"?<span className="text-white ml-4 text-end text-sm">Rate Us</span>:<div className="text-white text-sm m-2">5.2k reviews</div>}
            
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
