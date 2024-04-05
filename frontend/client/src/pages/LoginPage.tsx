import {Render, Provider, Container, useStore, ContainerProps} from 'react-login-page';
import {useNavigate} from "react-router";
import {useState} from "react";
import {login} from "../actions/UserActions";
import {useAuth} from "../auth-context";

const LoginPage = () => {
    const auth = useAuth();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // This function will handle the submission.
    async function onSubmit(e: any) {
        e.preventDefault();
        let user = await login(name, password).catch((error) => {
            window.alert(error);
            return;
        });
        if (user!=null) {
            auth.loginAction();
            navigate("/");
        } else {
            window.alert("Unknown username or password");
        }
    }

    return (
        <div className="form-wrapper">
            <div className="form-inner">
                <form onSubmit={onSubmit}>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;