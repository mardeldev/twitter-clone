import { dateFormatter } from "../hooks";
import { saveAPeep } from "../utils/dataHandler.js";
import { useCookies } from "react-cookie";
import PropTypes from 'prop-types';




const FeedCard = ({ peep, savedPeeps }) => {
    const formattedDate = dateFormatter(peep.peepCreated);
    // eslint-disable-next-line no-unused-vars
    const [cookies, _] = useCookies(["access_token"]);


    const savePeep = async (peepID) => {

        try {
            await saveAPeep(peepID, cookies);
            alert(`${"Peep saved to favourites!"}`);
            window.location.reload(false);
        } catch (error) {
            return error
        }
    }

    const heartColour = (savedPeeps) => {
        return savedPeeps.includes(peep._id) ? "saved-card" : "";
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
                            <img onClick={() => savePeep(peep._id)} src="../src/assets/heart-grey.svg" alt="favourite-peep" width="20" height="20" className={`me-4 peep-card-cta ${heartColour(savedPeeps)}`} />

                            <img src="../src/assets/repost.svg" alt="favourite-peep" width="20" height="20" className="me-4 peep-card-cta" />
                            <img src="../src/assets/share.svg" alt="favourite-peep" width="20" height="20" className="me-4 peep-card-cta" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

FeedCard.propTypes = {
    peep: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        peepContent: PropTypes.string.isRequired,
        imgURL: PropTypes.string.isRequired,
        peepCreated: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    savedPeeps: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default FeedCard