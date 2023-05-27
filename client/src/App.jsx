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
import Update from "./components/Update";
import RedirectifProtected from "./components/RedirectifProtected";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
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
        <Route path="/Update" element={<Update />}></Route>
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
