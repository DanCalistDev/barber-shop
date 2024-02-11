'use client'

import { Booking } from "@prisma/client";


interface BookingListProps {
    booking: Booking
}

export const BookingList = ({booking}: BookingListProps) => {
    return (  
<h1>Booking List</h1>
    );
}
 
