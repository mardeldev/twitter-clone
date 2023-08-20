import { useState } from "react";
import { loginUser } from "../utils/dataHandler";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setUPassword] = useState("");
    const navigate = useNavigate();

    const [_, setCookies] = useCookies(["access_token"]);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(username, password, setCookies);
            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className="auth-container d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">

            <form className="mt-3" onSubmit={onSubmit}>
                <div className="d-flex justify-content-center">
                    <img src="../src/assets/logo-short.png" alt="logo" width="200" height="200" />
                </div>

                <h2 className="d-flex justify-content-center">Login</h2>
                <div className="mb-3 mt-5">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input
                            type="text"
                            className="form-control"
                            id="validationDefaultUsername"
                            aria-describedby="inputGroupPrepend2"
                            placeholder="username"
                            required
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div id="usernameHelp" className="form-text">Please enter your username.</div>
                </div>
                <div className="mb-3">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="password"
                        required
                        value={password}
                        onChange={(event) => setUPassword(event.target.value)}
                    />
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <a href="/auth/register"> <small> New to chitter? Click here to sign up.</small></a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Login