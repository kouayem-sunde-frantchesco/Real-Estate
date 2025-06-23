import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Nettoyer le localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Rediriger
    navigate("/login");
  }, [navigate]);

  return null; // Aucun affichage
}


export default Logout;