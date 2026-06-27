import { useState } from "react";
import { users } from "../mock-data/users";
interface LoginProps {
    onLogin: () => void;
}
const Login = ({ onLogin }: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const user = users.find(
            (item) => item.email === email && item.password === password
        );
        if (!user) {
            setError("Invalid email or password");
            return;
        }
        localStorage.setItem('minefleet-user', JSON.stringify(user));

        onLogin();
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>MineFleet AI</h1>

                <p className="login-subtitle">
                    Real-Time Autonomous Fleet Monitoring Platform
                </p>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                        Remember Me
                    </label>
                </div>
                {error && (
                    <p className="login-error">
                        {error}
                    </p>
                )}
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>


                <p className="login-footer">
                    Demo Credentials
                    <br />
                    admin@minefleet.com / admin123
                </p>
            </div>
        </div>
    );
};

export default Login;