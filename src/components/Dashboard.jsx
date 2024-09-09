import Navbar from "./Navbar.jsx";
import TimeCard from "./TimeCard.jsx";
import analyze from "../assets/analyze.png";
import clock from "../assets/clock.svg";
import watchtime from "../assets/watchtime.svg";
import Section from "./Section.jsx";
import Pie from "./Pie.jsx"

export default function Dashboard() {
  return (
    <>
      <Navbar
        title="Python"
        source={analyze}
        customStyles="bg-[#549E70]"
        isCourse={true}
        textStyles="text-right sm:w-1/6"
        imageClass="h-36"
      />
      <main className="w-full h-full flex flex-col gap-3">
        <h1 className="text-4xl justify-center items-center text-center pt-10 text-[#549E70]">
          Analytics
        </h1>
        <div className="h-1/3 flex justify-center items-center p-10 space-x-20 ">
        <Pie text="Total Students Enrolled" percentage={100} number={6969}/>
        <Pie text="Total Students Enrolled" percentage={67} number={4669}/>
        <Pie text="Frequency of Video" percentage={86} number={20}/>
        </div>
        <div className="h-1 w-[80%] bg-gray-200 mx-auto"></div>
        <div className=" px-10 pb-20 flex flex-col items-center space-y-10">
          <Section name={"Section 1"}/>
          <Section name={"Section 2"}/>
          <Section name={"Section 3"}/>
        </div>
      </main>
    </>
  );
}
