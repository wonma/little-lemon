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
        <table>
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
    )
}

export default BookingDataDisplay;