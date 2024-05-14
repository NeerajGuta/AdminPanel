import { Input } from "@material-tailwind/react";
import React from "react";
import Pegination from "./Pegination";

function DriverProfile() {
  return (
    <>
      <div className="flex flex-row justify-between gap-8">
        <div className="text-lg py-3 font-bold">
          <h3>Driver Profile</h3>
        </div>
        <div className="w-full md:w-72">
          <Input
            label="Search"
            className="shadow-xl "
            // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-7 py-3 font-bold bg-green-600 text-white"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="px-7 py-3 font-bold bg-green-600 text-white"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white "
              >
                Driver Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Driver Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Mobile Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Email
              </th>
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Gender
              </th> */}
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Date of Birth
              </th> */}
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Address
              </th> */}
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                State
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                City
              </th> */}
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Aadhar Card No
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Pan Card No
              </th> */}
              {/* <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Aadhar Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Pan Image
              </th> */}
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Register Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Action
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                More Views
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4 font-bold text-green-900">online</td>

              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4 cursor-pointer">
                <a href="/driverprofile/:id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pegination />
    </>
  );
}

export default DriverProfile;
