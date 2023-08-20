import { useEffect, useState } from "react";
import { getData } from "./utils/getData.js";
import { Route, Routes } from "react-router-dom";
import { Auth, Feed, Home, PostPeep, SavedPeeps, Sidebar } from "./components/index.js";

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
      <Route path="/auth" element={<Auth />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/createpeep" element={<PostPeep />} />
      <Route path="/savedpeeps" element={<SavedPeeps />} />

    </Routes>

  )
}
export default App;
