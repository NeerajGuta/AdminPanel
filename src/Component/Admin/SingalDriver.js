import React from "react";
import { GoDotFill } from "react-icons/go";

function SingalDriver() {
  return (
    <>
      <div className="singaldrive">
        <div className="text-center" style={{ position: "relative" }}>
          <img
            src="../logo192.png"
            alt="driver-profile"
            style={{
              width: "151px",
              height: "151px",
              borderRadius: "50%",
              border: "2px solid",
            }}
          />
          <GoDotFill
            style={{
              position: "absolute",
              bottom: "5px",
              color: "green",
              left: "109px",
              fontSize: "30px",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="font-semibold text-black py-1 px-1">Driver Id</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Driver Name</p>
            <p className="text-lg text-black py-1 px-1">Raghavendra chaubey</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Mobile No</p>
            <p className="text-lg text-black py-1 px-1">9473946576</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Gender</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Date of Birth</p>
            <p className="text-lg text-black py-1 px-1">29-20-2032</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Address</p>
            <p className="text-lg text-black py-1 px-1">Singapura layout</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Country</p>
            <p className="text-lg text-black py-1 px-1">India</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">State</p>
            <p className="text-lg text-black py-1 px-1">Karnatka</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">City</p>
            <p className="text-lg text-black py-1 px-1">Bangalore</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Aadhar Card No</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Pan Card No</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Aadhar Image</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1"> Pan Image</p>
            <p className="text-lg text-black py-1 px-1">asajjln</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1">Register Date</p>
            <p className="text-lg text-black py-1 px-1">4094348t3942</p>
          </div>
          <div class="text-center">
            <p className="font-semibold text-black py-1 px-1"> Action</p>
            <p className="text-lg text-black py-1 px-1">Approved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingalDriver;
