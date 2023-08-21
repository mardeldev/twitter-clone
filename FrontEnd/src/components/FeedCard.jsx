import { dateFormatter } from "../hooks";
import { saveAPeep } from "../utils/dataHandler.js";
import { useState } from "react";



const FeedCard = ({ peep }) => {
    const formattedDate = dateFormatter(peep.peepCreated);

    const [savedPeeps, setSavedPeeps] = useState([]);





    const savePeep = async (peepID) => {
        try {
            const response = await saveAPeep(peepID);
            console.log(response);
            alert("Peep saved to favourites!")
        } catch (error) {
            return error
        }
    }

    return (
        <div className="py-4">
            <div className=" card bg-dark feed-card mb-3 rounded-5">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={peep.imgURL} className="img-fluid rounded-start rounded-circle" alt="userAvatar" width="80px" height="80px" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">{peep.peepContent}</p>
                            <p className="card-text"><small className="text-body-light">{formattedDate}</small> | {peep.username}</p>
                            <a onClick={() => savePeep(peep._id)}><img src="../src/assets/heart-grey.svg" alt="favourite-peep" width="20" height="20" className="me-4 peep-card-cta" /></a>

                            <img src="../src/assets/repost.svg" alt="favourite-peep" width="20" height="20" className="me-4 peep-card-cta" />
                            <img src="../src/assets/share.svg" alt="favourite-peep" width="20" height="20" className="me-4 peep-card-cta" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard