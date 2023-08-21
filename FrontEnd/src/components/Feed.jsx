import { FeedCard } from "./index.js";

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

export default Feed