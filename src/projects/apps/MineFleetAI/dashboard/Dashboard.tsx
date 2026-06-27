interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({
  onLogout,
}: DashboardProps) => {
  return (
    <div className="dashboard-container">
      <h1>MineFleet Dashboard</h1>

      <p>Welcome to MineFleet AI.</p>

      <button
        className="logout-btn"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;