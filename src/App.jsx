import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
