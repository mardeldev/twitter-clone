import { useState } from "react";
import { registerNewUser } from "../utils/dataHandler";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setUPassword] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await registerNewUser(username, password);
        } catch (error) {
            return ""
        }

    }


    return (
        <div className="auth-container d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">

            <form className="mt-3" onSubmit={onSubmit}>
                <div className="d-flex justify-content-center">
                    <img src="../src/assets/logo-short.png" alt="logo" width="200" height="200" />
                </div>

                <h2 className="d-flex justify-content-center">Register</h2>
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
                    <div id="usernameHelp" className="form-text">Your username will be shown whenever you make a peep.</div>
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
                        <a href="/auth/login"> <small> Already have an account? Click here to login.</small></a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary">Sign up</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Register