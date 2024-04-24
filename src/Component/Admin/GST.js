import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

function GST() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    return (
        <>
            <div className='flex' style={{ justifyContent: "space-between" }}>
                <div className='text-lg py-3 font-bold'>
                    <h3>GST</h3>
                </div>
                <Button onClick={handleOpen} variant="gradient" className='my-3'>
                    Add GST
                </Button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-7 py-3 font-bold bg-green-600 text-white">
                                S.No.
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
                                TAX in Percentage
                            </th>


                            <th scope="col" className="px-6 py-3 font-bold bg-green-600 text-white">
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
                            <td className="px-6 py-4">5%</td>

                            <td className="px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>GST</DialogHeader>
                <DialogBody>
                    <Input label="GST" />
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
        </>
    )
}

export default GST