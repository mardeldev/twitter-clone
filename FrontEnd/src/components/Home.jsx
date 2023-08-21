import { Sidebar, Feed } from "./index.js";
import { getPeeps, getSavedPeeps } from "../utils/dataHandler.js";
import { useState, useEffect } from "react";
const Home = () => {
    const [peeps, setPeeps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [savedPeeps, setSavedPeeps] = useState([]);



    useEffect(() => {
        fetchPeeps();
        fetchSavedPeeps();
    }, [])



    const fetchPeeps = async () => {
        try {
            const response = await getPeeps();
            setPeeps(response.reverse());
            setIsLoading(false);
        } catch (error) {
            return error;
        }
    };

    const fetchSavedPeeps = async () => {
        try {
            const response = await getSavedPeeps();
            setSavedPeeps(response.data.savedPeeps);
        } catch (error) {
            return error;
        }
    };

    if (isLoading) {
        return (
            <div>
                <Sidebar />
                <p className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">Fetching peep data...</p>;
            </div>
        )
    }


    return (
        <div>
            <Sidebar />
            <div className="container d-flex justify-content-center align-items-center me-1">
                <Feed peeps={peeps} savedPeeps={savedPeeps} />
            </div>
        </div>
    )
}

export default Home