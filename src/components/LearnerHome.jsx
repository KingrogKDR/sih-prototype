import CourseCard from "./CourseCard";
import SearchButton from "../assets/SearchButton";

function LearnerHome() {
  return (
    <main className="w-full h-full bg-slate-200">
      <div className="h-40 flex items-center justify-center">
        <div className="relative w-[60%]">
            <input type="text" placeholder="Search..." className="py-3 px-4 w-full rounded-full focus:outline-none text-md focus:scale-105 transition duration-300 shadow-lg" />
            <button className="absolute right-0 top-0 mt-1 mr-2 bg-orange-500 text-white p-2 rounded-full hover:bg-emerald-800  hover:scale-125 transition duration-300">
            <SearchButton />
            </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center pb-20">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </main>
  );
}

export default LearnerHome;
