import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginPage/Login";
import Register from "./components/registerPage/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
