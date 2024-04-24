import { Input } from '@material-tailwind/react'
import React from 'react'
import Pegination from './Pegination'
// import {
//     MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

function CustomerWallet() {
    return (
        <>
            <div className="flex flex-row justify-between gap-8">
                <div className='text-lg py-3 font-bold'>
                    <h3>Customer Wallet</h3>
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
                            <th scope="col" className="px-7 py-3 bg-green-600 text-white">
                                S.No.
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
                                User name
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
                                Payment Id
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
                                Payment Date
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-600 text-white">
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
                                5
                            </th>
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
    )
}

export default CustomerWallet