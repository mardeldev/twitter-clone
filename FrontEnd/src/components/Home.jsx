import { Sidebar, Feed } from "./index.js";
import { getPeeps } from "../utils/dataHandler.js";
import { useState, useEffect } from "react";
const Home = () => {
    const [peeps, setPeeps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetchPeeps();
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

    if (isLoading) {
        return (
            <div>
                <Sidebar />
                <p className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">Unable to fetch peep data...</p>;
            </div>
        )
    }



    return (
        <div>
            <Sidebar />
            <div className="container d-flex justify-content-center align-items-center me-1">
                <Feed peeps={peeps} />
            </div>
        </div>
    )
}

export default Home