import { useNavigate } from "react-router-dom"

function CourseCard({source, name}) {
  const navigate = useNavigate()

  const goToCourse = () => {
    navigate("/course")
  }
  return (
    <div className="w-80 h-60 border-1 bg-[#EDEDED] border-gray-300 rounded-xl my-10 mx-6 shadow-lg shadow-gray-400 overflow-hidden hover:scale-105 active:scale-90 transition duration-300" onClick={goToCourse}>
      <div className="h-[70%] border-b-2">
        <img src={source} alt="Course Image" className="w-[100%] h-[100%]"/>      
      </div>
      <div className="px-4 py-2 font-semibold text-xl">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default CourseCard