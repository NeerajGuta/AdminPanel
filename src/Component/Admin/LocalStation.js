import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Pegination from "./Pegination";

function LocalStation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => setOpen1(!open1);
  return (
    <>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <div className="text-lg py-3 font-bold">
          <h3>LocalStation Rate</h3>
        </div>
        <div className="w-full md:w-72">
          <Input
            label="Search"
            className="shadow-xl "
            // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
        <Button onClick={handleOpen} variant="gradient" className="my-3">
          Add LocalStation Rate
        </Button>
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
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Vehicle Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Vehicle Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Per Km Fare
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Per Hours Fare
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Oneway Driver Allowance
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Oneway Night Allowance
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Total Seat
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Booking Fee
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Cancellation Charge
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Service Charge
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Total Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold bg-green-600 text-white"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="green"
                  className="w-6 h-6"
                  onClick={handleOpen1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="red"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pegination />
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>LocalStation Rate</DialogHeader>
        <DialogBody
          className="h-[43rem] overflow-scroll"
          style={{ height: "450px" }}
        >
          <div className="w-100 py-2">
            <Select label="Select Vehicle Type" className="shadow-xl">
              <Option>Tata</Option>
              <Option>Toyota</Option>
            </Select>
          </div>
          <div className="w-100 py-2">
            <Select label="Select City" className="shadow-xl">
              <Option>Bangalore</Option>
              <Option>Chennai</Option>
              <Option>Goa</Option>
            </Select>
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Image" type="file" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Km" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Hours" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Driver Allowance" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Price" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Toll Charge" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Total Price" className="shadow-xl" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Dialog open={open1} handler={handleOpen1}>
        <DialogHeader>Update LocalStation Rate</DialogHeader>
        <DialogBody
          className="h-[43rem] overflow-scroll"
          style={{ height: "450px" }}
        >
          <div className="w-100 py-2">
            <Select label="Select Vehicle Type" className="shadow-xl">
              <Option>Tata</Option>
              <Option>Toyota</Option>
            </Select>
          </div>
          <div className="w-100 py-2">
            <Select label="Select City" className="shadow-xl">
              <Option>Bangalore</Option>
              <Option>Chennai</Option>
              <Option>Goa</Option>
            </Select>
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Image" type="file" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Km" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Hours" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Driver Allowance" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Package Price" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Toll Charge" className="shadow-xl" />
          </div>
          <div className="py-2 ">
            {" "}
            <Input label="Total Price" className="shadow-xl" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen1}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen1}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default LocalStation;
