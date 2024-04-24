import { Input } from "@material-tailwind/react";
import React from "react";
import Pegination from "./Pegination";

function VehicleDetails() {
    return (
        <>
            <div className="flex flex-row justify-between gap-8">
                <div className="text-lg py-3 font-bold">
                    <h3>Vehicle Details</h3>
                </div>
                <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        className="shadow-xl "
                    // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
            </div>

            <div
                className="relative overflow-x-auto shadow-md sm:rounded-lg"

            >
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
                                Driver Name
                            </th>
                            <th
                                scope="col"
                                className="px-7 py-3 font-bold bg-green-600 text-white"
                            >
                                Brand
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Modal
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Fuel Type
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Color
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Registration Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Insurance Date
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
                                Driver License
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                RC Doc
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                Emission Doc
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-bold bg-green-600 text-white"
                            >
                                City
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
                                1
                            </th>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">Wearables</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">Wearables</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">Wearables</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">$999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pegination />
        </>
    );
}

export default VehicleDetails;
