import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ToDo from "./Components/ToDo/ToDo";
import Calender from "./Components/Calender/Calender";
import CompletedTask from "./Components/CompletedTask/CompletedTask";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="lg:mx-11">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="todo" element={<ToDo></ToDo>}></Route>
        <Route path="calender" element={<Calender></Calender>}></Route>
        <Route
          path="completetasks"
          element={<CompletedTask></CompletedTask>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
