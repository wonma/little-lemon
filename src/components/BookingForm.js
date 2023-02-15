
const BookingForm = ({renderTimeOptions, updateTimes}) => {
    return (
        <form>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={(e) => {
                updateTimes(e)}} data-testid="select-date"/>
            <label htmlFor="time">Time</label>
            <select id="time" data-testid="select-time">
                {renderTimeOptions()}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="noneOfAbove">None of above</option>
            </select>
            <input type="submit" value="Complete a Reservation" />        
        </form>
    );
}

export default BookingForm;