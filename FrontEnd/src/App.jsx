import { Route, Routes } from "react-router-dom";
import { Login, Home, CreatePeep, SavedPeeps, Register } from "./components/index.js";


const App = () => {

  const isLoggedIn = () => {
    const result = window.localStorage.userID == undefined ? false : true;

    return result;
  }

  return (
    <Routes>
      <Route path="/" element={
        isLoggedIn() ? <Home /> : <Login />

      } />
      {/* <Route path="/auth/login" element={<Login />} /> */}
      <Route path="/auth/register" element={<Register />} />
      <Route path="/createpeep" element={<CreatePeep />} />
      <Route path="/savedpeeps" element={<SavedPeeps />} />

    </Routes>

  )
}
export default App;
