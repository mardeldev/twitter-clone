import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Feed, Home, CreatePeep, SavedPeeps, Register } from "./components/index.js";

// eslint-disable-next-line no-empty-pattern
const App = ({ }) => {



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/createpeep" element={<CreatePeep />} />
      <Route path="/savedpeeps" element={<SavedPeeps />} />

    </Routes>

  )
}
export default App;
