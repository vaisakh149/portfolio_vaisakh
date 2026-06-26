const Login = () => {
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
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">
            Remember Me
          </label>
        </div>

        <button className="login-btn">
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