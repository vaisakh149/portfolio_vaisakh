import { useEffect, useState } from "react";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

const MineFleetAI = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const user = localStorage.getItem('minefleet-user');
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);
  return (
      <>
          {isLoggedIn ? (
              < Dashboard onLogout={()=>setIsLoggedIn(false) } />
                  ):(
                  <div className="minefleet-container">
                      <Login onLogin={ ()=>setIsLoggedIn(true)} />
                  </div>
    )}
      </>
  );
};

export default MineFleetAI;