import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Leftbar from "./Component/Admin/Leftbar";
import UserProfile from "./Component/Admin/UserProfile";
import DriverProfile from "./Component/Admin/DriverProfile";
import VehicleCategory from "./Component/Admin/VehicleCategory";
import LocalStation from "./Component/Admin/LocalStation";
import VehicleDetails from "./Component/Admin/VehicleDetails";
import Outstation from "./Component/Admin/Outstation";
import CustomerWallet from "./Component/Admin/CustomerWallet";
import DriverWallet from "./Component/Admin/DriverWallet";
import Dashboard from "./Component/Admin/Dashboard";
import BookingHistory from "./Component/Admin/BookingHistory";
import GST from "./Component/Admin/GST";
import UserNotification from "./Component/Admin/UserNotification";
import DriverNotification from "./Component/Admin/DriverNotification";
import SingalDriver from "./Component/Admin/SingalDriver";
import Rating from "./Component/Admin/Rating";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/user-profile"
            element={<Leftbar children={<UserProfile />} />}
          />
          <Route
            path="/driver-profile"
            element={<Leftbar children={<DriverProfile />} />}
          />
          <Route
            path="/vehicle-category"
            element={<Leftbar children={<VehicleCategory />} />}
          />
          <Route
            path="/local-station"
            element={<Leftbar children={<LocalStation />} />}
          />
          <Route
            path="/vehicle-details"
            element={<Leftbar children={<VehicleDetails />} />}
          />
          <Route
            path="/outstation"
            element={<Leftbar children={<Outstation />} />}
          />
          <Route
            path="/customer-wallet"
            element={<Leftbar children={<CustomerWallet />} />}
          />
          <Route
            path="/driver-wallet"
            element={<Leftbar children={<DriverWallet />} />}
          />
          <Route
            path="/dashboard"
            element={<Leftbar children={<Dashboard />} />}
          />
          <Route
            path="/booking-history"
            element={<Leftbar children={<BookingHistory />} />}
          />
          <Route path="/tax" element={<Leftbar children={<GST />} />} />
          <Route
            path="/usernotification"
            element={<Leftbar children={<UserNotification />} />}
          />
          <Route
            path="/drivernotification"
            element={<Leftbar children={<DriverNotification />} />}
          />
          <Route
            path="/driverprofile/:id"
            element={<Leftbar children={<SingalDriver />} />}
          />
          <Route path="/reviews" element={<Leftbar children={<Rating />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
