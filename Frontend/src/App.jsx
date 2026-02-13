import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixIntro from "./Pages/NetflixIntro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/netflix" element={<NetflixIntro />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
