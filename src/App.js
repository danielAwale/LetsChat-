import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './styles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <BrowserRouter BrowserRouter >
      <Routes>
        <Route>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

    </BrowserRouter >
  );
}

export default App;
