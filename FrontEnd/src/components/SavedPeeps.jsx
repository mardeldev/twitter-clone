import Sidebar from "./Sidebar";
import { getSavedPeeps, getAllSavedPeeps } from "../utils/dataHandler.js";
import { useState, useEffect } from "react";
import { FeedCard } from "./index.js";

const SavedPeeps = () => {

    const [savedPeeps, setSavedPeeps] = useState([]);


    useEffect(() => {
        fetchSavedPeeps();
    }, [])

    const fetchSavedPeeps = async () => {
        try {
            const response = await getAllSavedPeeps();
            setSavedPeeps(response.data.savedPeeps);
        } catch (error) {
            return error;
        }
    };
    return (
        <div>
            <Sidebar />

            <div className="container d-flex justify-content-center align-items-center me-0 ">
                <ul className="nav   flex-column ">
                    {savedPeeps.map((peep) => (
                        <FeedCard key={peep.id} peep={peep} savedPeeps={savedPeeps} className="" />
                    ))}
                </ul>
            </div>



        </div>
    )
}

export default SavedPeeps