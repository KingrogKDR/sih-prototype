import SearchButton from "../assets/SearchButton";
import Navbar from "./Navbar";
import thome from "../assets/thome.svg"
import dsa from "../assets/dsa.png"
import python from "../assets/python.png"
import matlab from "../assets/matlab.png"
import newest from "../assets/newest.png"
import filter from "../assets/filter.png"
import TeacherCard from "./TeacherCard";
import { TfiAlignJustify } from "react-icons/tfi";

export default function TeacherHome() {
  return (
    <>
      <Navbar 
        title="Find your Courses"  
        source={thome}
        customStyles="bg-[#549E70]"
        isCourse={false}
        textStyles="text-sm"
        imageClass="h-36"
      />
      <main className="w-full h-full px-4">
        <div className="h-40 flex items-center justify-center">
          <div className="relative w-[40%] mr-10">
              <input type="text" placeholder="Search..." className="py-3 px-4 w-full rounded-full focus:outline-none text-md focus:scale-105 transition duration-300 shadow-lg shadow-gray-400 ring-1 ring-grey-100" />
              <button className="absolute right-0 top-0 mt-1 mr-2 p-2 rounded-full  hover:scale-125 transition duration-300 active:scale-75 text-[#549E70]">
              <SearchButton />
              </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center pb-20">
          <TeacherCard source={python} name="python"/>
          <TeacherCard source={matlab} name="matlab"/>
          <TeacherCard source={dsa} name="dsa"/>
          <TeacherCard source={python} name="python"/>
          <TeacherCard source={matlab} name="matlab"/>
          <TeacherCard source={dsa} name="dsa"/>
          <TeacherCard source={python} name="python"/>
          <TeacherCard source={matlab} name="matlab"/>
          <TeacherCard source={dsa} name="dsa"/>
        </div>
      </main>
    </>
  );
}
