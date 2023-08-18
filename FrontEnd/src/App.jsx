import { useEffect, useState } from "react";
import { getData } from "../utils/getData.js";
import Feed from "./components/index.js";
import { Route, Routes } from "react-router-dom";

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

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Routes>
      <Route path="/feed" element={<Feed peepData={peepData} />} />
    </Routes>
  )

}
export default App
