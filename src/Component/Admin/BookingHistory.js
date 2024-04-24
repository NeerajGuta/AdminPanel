import { Input } from '@material-tailwind/react'
import React from 'react'
import Pegination from './Pegination'


function BookingHistory() {

    return (
        <>
            <div className="flex flex-row justify-between gap-8">
                <div className='text-lg py-3 font-bold'>
                    <h3>Booking History</h3>
                </div>
                <div className="w-full md:w-72">
                    <Input
                        label="Search" className='shadow-xl '
                    // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-7 py-3 font-bold bg-green-600 text-white">
                                S.No.
                            </th>
                            <th scope="col" className="px-7 py-3 font-bold bg-green-600 text-white">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Customer Mobile Number
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white ">
                                Driver Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Driver Email
                            </th>

                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Driver Mobile No
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Vehicle category
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Pick Up Location
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Drop Up Location
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Booking Date & Time
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Trip type
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Total Fare
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Total Km
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Payment Type
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Tax
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Commission
                            </th>

                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                Status
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
                            <td className="px-6 py-4">Wearables</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">Wearables</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">$999</td>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">Wearables</td>

                            <td className="px-6 py-4">Approved</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <Pegination />
        </>
    )
}

export default BookingHistory