import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import CheckAuth from "./Authentication/CheckAuth";
import { AuthContext } from "./context/AuthProvider";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import Careers from "./pages/Careers";

function App() {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/careers" element={<Careers />} />



        {/* <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserDashboardLayout />
            </CheckAuth>
          }
        >
          
        {/* </Route> */}

        {/* User Routes */}
        {/* <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserDashboardLayout />
            </CheckAuth>
          }
        >
        </Route> */}

        
        {/* ✅ NEW: Public Route (NO AUTHENTICATION) */}
        {/* <Route path="/public-report" element={<PublicReport />} /> */}


        {/* Other Routes */}
        {/* <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />*/}
      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </>
  );
}

export default App;
