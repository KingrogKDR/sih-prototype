import { useNavigate } from "react-router-dom"

function CourseCard() {
  const navigate = useNavigate()

  const goToCourse = () => {
    navigate("/course")
  }
  return (
    <div className="w-80 h-60 bg-slate-500 rounded-lg my-10 mx-6" onClick={goToCourse}>
      <div className="h-[70%] border-b-2">
        <img src="" alt="Course Image" />      
      </div>
      <div className="px-4 py-2 font-semibold text-xl text-gray-100">
        <p>Course Name</p>
      </div>
    </div>
  )
}

export default CourseCard