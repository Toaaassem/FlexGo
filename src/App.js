import SignIn from "./Pages/SignIn";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import Catalog, { Anime, DetailsAnime, DetailsMovies, DetailsSeries, Movies, Series } from "./Pages/Catalog";
import Profile from "./Pages/Profile/Profile";
import PricingPlans from "./Pages/PricingPlans/PricingPlans";  // Ensure this path is correct
import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstPage from "./Pages/StartPages/FirstPage/First.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Subscription from "./Pages/Subscription/index.jsx";
import Footer from "./Pages/PricingPlans/Component/Footer.jsx/Index.jsx";
import Form from "./Pages/PricingPlans/Component/Form.jsx/Index";
import Notfound from "./Pages/PricingPlans/Component/Notfound.jsx/Index.jsx";

function App() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState("");

  function saveDataUser() {
    let encoded_Jwt = localStorage.getItem("token");

    if (encoded_Jwt && typeof encoded_Jwt === "string") {
      try {
        let decoded_Jwt = jwtDecode(encoded_Jwt);
        setUserData(decoded_Jwt);
      } catch (error) {
        console.error("Invalid token", error);
        setUserData(null);
      }
    } else {
      console.error("Token not found or invalid");
      setUserData(null);
    }
  }

  function logOut() {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/first");
  }

  function ProtectedRoutes({ children }) {
    if (localStorage.getItem("token") == null) {
      return <Navigate to={"/first"} />;
    } else {
      return children;
    }
  }

  useEffect(() => {
    saveDataUser();
  }, []);

  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <div >
        <Routes>
          <Route path="signin" element={<SignIn saveDataUser={saveDataUser} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="" element={<FirstPage />} />
          <Route path="first" element={<FirstPage />} />
          <Route
            path="home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="catalog"
            element={
              <ProtectedRoutes>
                <Catalog />
              </ProtectedRoutes>
            }
          />
          <Route
            path="movies"
            element={
              <ProtectedRoutes>
                <Movies />
              </ProtectedRoutes>
            }
          />
          <Route
            path="movies/:id"
            element={
              <ProtectedRoutes>
                <DetailsMovies />
              </ProtectedRoutes>
            }
          />
          <Route
            path="anime"
            element={
              <ProtectedRoutes>
                <Anime />
              </ProtectedRoutes>
            }
          />
          <Route
            path="anime/:mal_id"
            element={
              <ProtectedRoutes>
                <DetailsAnime />
              </ProtectedRoutes>
            }
          />
          <Route
            path="series"
            element={
              <ProtectedRoutes>
                <Series />
              </ProtectedRoutes>
            }
          />
          <Route
            path="series/:id"
            element={
              <ProtectedRoutes>
                <DetailsSeries />
              </ProtectedRoutes>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="pricingplans"
            element={
              <ProtectedRoutes>
                <PricingPlans />
              </ProtectedRoutes>
            }
          />
          <Route
            path="aboutus"
            element={
              <ProtectedRoutes>
                <AboutUs />
              </ProtectedRoutes>
            }
          />
          <Route
            path="privacypolicy"
            element={
              <ProtectedRoutes>
                <PrivacyPolicy />
              </ProtectedRoutes>
            }
          />
          <Route
            path="subscription"
            element={
              <ProtectedRoutes>
                <Subscription />
              </ProtectedRoutes>
            }
          />
          <Route
            path="formm"
            element={
              <ProtectedRoutes>
                <Form />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* Uncomment the Footer component if needed */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
