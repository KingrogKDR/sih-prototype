import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

export default function TeacherCard({source, name}){
    const navigate = useNavigate();

    const handleAnalytic = ()=>{navigate("/dashboard")}
    const handleDelete = ()=>{alert("Delete test")}

    return <CourseCard source={source} name={name} nav={false}>
        <div className="flex justify-between mx-4">
            <button onClick={handleAnalytic} className="p-3 rounded-2xl bg-[#549E70] text-white">View Analytics</button>
            <button onClick={handleDelete} className="p-3 rounded-2xl bg-red-500 text-white">Delete</button>
        </div>
    </CourseCard>
}   