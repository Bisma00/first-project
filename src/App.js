import { Routes, Route } from "react-router-dom";
import Signup from "./Singup";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
export default App;
