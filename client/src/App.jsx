import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Detail from "./Pages/detail/Detail";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import Regis from "./Pages/Regis";
import Protected from "./components/Protected";
import { Provider } from "react-redux";
import store from "./redux/store";
import RedirectifProtected from "./components/RedirectifProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="325512774328-orifft0dl5g0obkrlafcqg6lnctfhcv5.apps.googleusercontent.com">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [showNavbarFooter, setShowNavbarFooter] = useState(true);

  useEffect(() => {
    const currentPath = location.pathname;
    setShowNavbarFooter(
      currentPath !== "/Login" && currentPath !== "/Register"
    );
  }, [location]);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/Login"
          element={
            <RedirectifProtected>
              <Login />
            </RedirectifProtected>
          }
        />
        <Route
          path="/Register"
          element={
            <RedirectifProtected>
              <Regis />
            </RedirectifProtected>
          }
        />
        <Route
          path="/:id"
          element={
            <Protected>
              <Detail />
            </Protected>
          }
        />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
};

export default App;
