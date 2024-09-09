import { useState } from "react"

function TimeCard({description, source}) {
    const [progress, setProgress] = useState(0)
    
  return (
    <div className="w-80 h-44 bg-slate-200 my-4 mx-6 py-6 px-8 rounded-xl shadow-lg border-2 border-gray-300">
        <div className="h-[55%] flex flex-col gap-2 items-center justify-center">
            <img src={source} className="w-[100%] h-[100%]"/>
            <p className="text-center text-blue-600">{description}</p>
        </div>
        <div className="w-[100%] h-[35px] rounded-full bg-white mt-5">
            <div className="h-[100%] rounded-full bg-blue-600 transition duration-300 ease-out relative">
                <div className="absolute ml-3 mt-1 text-white left-0 top-0 font-bold text-lg">{progress}%</div>
            </div>
        </div>
    </div>
  )
}

export default TimeCard