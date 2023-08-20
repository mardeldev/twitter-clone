import PropTypes from 'prop-types';

const SidebarCard = ({ card: { imgURL, route, label } }) => {
    return (
        <div className="container text-center">
            <div className="row align-items-center sidebar-card">
                <a href={route} rel="nofollow" className="row align-items-center sidebar-card">
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


