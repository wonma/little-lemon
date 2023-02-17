import FullScreenSection from "./FullScreenSection";
import styles from "./BookingDataDisplay.module.scss";

const BookingDataDisplay = ({bookingData}) => {
    const renderBookingData = () => {
        if(bookingData !== null) {
            return bookingData.map((data) => {
                return (
                    <tbody key={data.name + data.phone}>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.date}</td>
                            <td>{data.time}</td>
                            <td>{data.guests}</td>
                            <td>{data.occasion}</td>
                        </tr>
                    </tbody>
                )
            })
        }
    } 
    return (
        <FullScreenSection
            bgColor='#ffffff' 
            fontColor='#333' 
            bgImage='none'
        >
            <h2 className={styles.HeadingGuide}>Check out your booking information below.</h2>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Number of People</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                { renderBookingData() }
            </table>
        </FullScreenSection>


    )
}

export default BookingDataDisplay;