import { useState } from "react";
import { postPeep } from "../utils/dataHandler.js";
import { useGetUserID, useGetUserName } from "../hooks/index.js";
import { useNavigate } from "react-router-dom";


const CreatePeep = () => {
    const userID = useGetUserID();
    const username = useGetUserName();


    const [peepContent, setPeepContent] = useState({
        peepContent: "",
        imgURL: "https://cdn.discordapp.com/attachments/1110172643895808040/1142877481209167943/default-user-profile-picture_hvoncb.png",
        userOwner: userID,
        username: username,
        peepCreated: Date.now,
    });

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await postPeep(peepContent);
            alert("Peep Posted!");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPeepContent({ ...peepContent, [name]: value });
    }



    return (
        <div className="auth-container d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">

            <form className="mt-3" onSubmit={onSubmit}>
                <div className="d-flex justify-content-center">
                    <img src="../src/assets/logo-short.png" alt="logo" width="200" height="200" />
                </div>

                <h2 className="d-flex justify-content-center">New Peep</h2>
                <div className="mb-3 mt-4">

                    <div className="input-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                            rows="3"
                            type="text"
                            aria-describedby="inputGroupPrepend2"
                            placeholder="type your peep here...."
                            required
                            name="peepContent"
                            onChange={handleChange}
                        ></textarea>

                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <a href="/" className="form-text"> <small> Made a mistake? Click here to go back to your feed.</small></a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary">Post</button>
                    </div>
                </div>
            </form>
        </div>
    )


}



export default CreatePeep