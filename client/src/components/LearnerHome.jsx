import CourseCard from "./CourseCard";
import SearchButton from "../assets/SearchButton";
import Navbar from "./Navbar";
import lhome from "../assets/lhome.png"
import dsa from "../assets/dsa.png"
import python from "../assets/python.png"
import matlab from "../assets/matlab.png"
import newest from "../assets/newest.png"
import filter from "../assets/filter.png"

function LearnerHome() {
  return (
    <>
      <Navbar 
        title="My Course"  
        source={lhome}
        customStyles="bg-[#0A3B87]"
        isCourse={false}
        textStyles="text-right sm:w-1/4"
        imageClass="h-36"
        type="learner"
      />
      <main className="w-full h-full px-4">
        <div className="h-40 flex items-center justify-center">
          <div className="relative w-[60%] mr-10">
              <input type="text" placeholder="Search..." className="py-3 px-4 w-full rounded-full focus:outline-none text-md focus:scale-105 transition duration-300 shadow-lg shadow-gray-400 ring-1 ring-grey-100" />
              <button className="absolute right-0 top-0 mt-1 mr-2 text-[#0A3B87] p-2 rounded-full  hover:scale-125 transition duration-300 active:scale-75">
              <SearchButton />
              </button>
          </div>
          <button className="text-[#0A3B87] p-2 rounded-full  hover:scale-125 transition duration-300 active:scale-75 flex items-center gap-2 bg-[#EDEDED] mr-8 shadow-lg shadow-gray-400">
              <img src={newest} className="w-[100%] h-[100%]"/>
              <p>Newest</p>
          </button>
          <button className="text-[#0A3B87] p-2 rounded-full  hover:scale-125 transition duration-300 active:scale-75 flex items-center gap-2 bg-[#EDEDED] shadow-lg shadow-gray-400">
            <img src={filter} className="w-[100%] h-[100%]" />
            <p>Filter</p>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center pb-20">
          <CourseCard source={python} name="python"/>
          <CourseCard source={matlab} name="matlab"/>
          <CourseCard source={dsa} name="dsa"/>
          <CourseCard source={python} name="python"/>
          <CourseCard source={matlab} name="matlab"/>
          <CourseCard source={dsa} name="dsa"/>
          <CourseCard source={python} name="python"/>
          <CourseCard source={matlab} name="matlab"/>
          <CourseCard source={dsa} name="dsa"/>
        </div>
      </main>
    </>
  );
}

export default LearnerHome;
