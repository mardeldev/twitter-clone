import Sidebar from "./Sidebar";
import { getAllSavedPeeps } from "../utils/dataHandler.js";
import { useState, useEffect } from "react";
import { FeedCard } from "./index.js";

const SavedPeeps = () => {



    const [savedPeeps, setSavedPeeps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        if (window.localStorage.getItem("userID") != undefined) {

            fetchSavedPeeps();

        }
    }, [])

    const fetchSavedPeeps = async () => {
        try {
            const response = await getAllSavedPeeps();
            setSavedPeeps(response.data.savedPeeps.reverse());
            if (response) setIsLoading(false);
        } catch (error) {
            return error;
        }
    };


    if (isLoading || savedPeeps.length < 1) {
        return (
            <div>
                <Sidebar />
                <p className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">You do not have any saved Peeps...</p>;
            </div>
        )
    }

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