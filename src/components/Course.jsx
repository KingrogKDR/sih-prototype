import TimeCard from "./TimeCard.jsx"
import Video from "./Video.jsx"

function Course() {
  return (
    <main className="w-full h-full flex flex-col gap-3 bg-slate-200">
        <div className="h-1/3 flex justify-center items-center pt-10">
            <TimeCard />
        </div>
        <div className="px-10 pb-20">
            <p className="text-blue-500 text-2xl mb-5">Videos</p>
            <Video title="Hello World in Python" description="Lorem ipsum...."/>
            <Video title="Variable and Datatypes" description="Lorem ipsum...."/>
            <Video title="Control Statements" description="Lorem ipsum...."/>
            <Video title="Loops" description="Lorem ipsum...."/>
        </div>
    </main>
  )
}

export default Course