import { createContext, useContext, useState } from "react";

const BookingDataContext = createContext(undefined);

export const BookingDataProvider = ({children}) => {
    const [bookingData, setBookingData] = useState({
        hasBookingData: false,
        currentBookingData: []
    });

    return <BookingDataContext.Provider value={{bookingData, setBookingData}}>{children}</BookingDataContext.Provider>
}

export const useBookingData = () => useContext(BookingDataContext);