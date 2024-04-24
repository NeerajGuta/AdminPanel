import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function Dashboard() {
    return (
        <>

            <div className='flex justify-between'>
                <Card className="mt-6 w-56">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Customers
                        </Typography>
                        <Typography>
                            10
                        </Typography>
                    </CardBody>

                </Card>

                <Card className="mt-6 w-56">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Driver
                        </Typography>
                        <Typography>
                            10
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="mt-6 w-76">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Completed Bookings
                        </Typography>
                        <Typography>
                            10
                        </Typography>
                    </CardBody>

                </Card>
            </div>
        </>
    )
}

export default Dashboard