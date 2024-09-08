import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import LearnerHome from "./components/LearnerHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element ={<LearnerHome />}/>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
