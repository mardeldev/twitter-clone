import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const SidebarCard = ({ card: { imgURL, route, label } }) => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    function onClick() {
        try {
            if (label == "Logout") setCookies("access_token", "");
            window.localStorage.removeItem("userID");
            alert("Successfully logged out");
        } catch (error) {
            return error
        }
    }

    return (
        <div className="container text-center">
            <div className="row align-items-center sidebar-card">
                <a href={route} rel="nofollow" className="row align-items-center sidebar-card" onClick={onClick}>
                    <div className="col-2 me-3">
                        < img src={`../src${imgURL}`} alt="random" />
                    </div>
                    <div className="col text-start">
                        {label}
                    </div>
                </a>
            </div>
        </div>
    )
}
SidebarCard.propTypes = {
    card: PropTypes.shape({
        imgURL: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
};


export default SidebarCard


