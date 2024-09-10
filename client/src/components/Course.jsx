import Navbar from "./Navbar.jsx"
import TimeCard from "./TimeCard.jsx"
import Video from "./Video.jsx"
import analyze from "../assets/analyze.png"
import clock from "../assets/clock.svg"
import watchtime from "../assets/watchtime.svg"

function Course() {
  return (
    <>
      <Navbar 
        title="Python" 
        source={analyze} 
        customStyles="bg-[#0A3B87]"
        isCourse={true}
        textStyles="text-right sm:w-1/6"
        imageClass="h-36"
      />
      <main className="w-full h-full flex flex-col gap-3">
          <div className="h-1/3 flex justify-center items-center pt-10">
              <TimeCard source={clock} description="Progress"/>
              <TimeCard source={watchtime} description="Watchtime"/>
          </div>
          <div className="px-10 pb-20">
              <p className="text-blue-500 text-2xl mb-5">Videos</p>
              <Video title="Hello World in Python" description="Lorem ipsum...."/>
              <Video title="Variable and Datatypes" description="Lorem ipsum...."/>
              <Video title="Control Statements" description="Lorem ipsum...."/>
              <Video title="Loops" description="Lorem ipsum...."/>
          </div>
      </main>
    </>
  )
}

export default Course