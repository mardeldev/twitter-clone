import { FeedCard } from "./index.js";
import PropTypes from 'prop-types';
const Feed = ({ peeps, savedPeeps }) => {

    return (
        <div className="">

            <ul className="nav container-fluid  flex-column grid gap-5">
                {peeps.map((peep) => (
                    <FeedCard key={peep.id} peep={peep} savedPeeps={savedPeeps} className="" />
                ))}
            </ul>

        </div>
    )
}

// Feed.propTypes = {
//     peeps: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     savedPeeps: PropTypes.arrayOf(PropTypes.string).isRequired
// };


export default Feed