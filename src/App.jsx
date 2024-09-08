import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import LearnerHome from "./components/LearnerHome"
import TeacherHome from "./components/TeacherHome";
import Dashboard from "./components/Dashboard";
import Course from "./components/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element ={<LearnerHome />}/>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="instructor" element={<TeacherHome />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
