import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    // Appel à l'API pour récupérer les annonces de cet utilisateur
    fetch(`${process.env.REACT_APP_API_URL}/user/listings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setMyListings(data))
      .catch(err => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Bienvenue, {user?.username}</h2>
      <p>Email : {user?.email}</p>

      <button onClick={handleLogout}>Se déconnecter</button>

      <h3>Mes annonces</h3>
      <ul>
        {myListings.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
