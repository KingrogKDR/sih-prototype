import CourseCard from "./CourseCard";
import SearchButton from "../assets/SearchButton";

function Home() {
  return (
    <main className="w-full h-screen bg-blue-300">
      <div className="h-40 bg-pink-300 flex items-center justify-center">
        <input type="text" placeholder="Search.." className="py-2 px-4 w-full rounded-full focus:outline-none" />
        <button>
          <SearchButton />
        </button>
      </div>
      <div className="flex ">
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

export default Home;
