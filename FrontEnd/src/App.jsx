import { useEffect, useState } from "react";
import { getData } from "./utils/dataHandler.js";
import { Route, Routes } from "react-router-dom";
import { Login, Feed, Home, CreatePeep, SavedPeeps, Register } from "./components/index.js";

// eslint-disable-next-line no-empty-pattern
const App = ({ }) => {

  const [peepData, setPeepData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, [])



  const fetchUserData = async () => {
    try {
      const response = await getData();
      setPeepData(response);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

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
