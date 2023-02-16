import { useState } from "react";

const BookingForm = ({renderTimeOptions, updateTimes, submitForm}) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: 'noneOfAbove',
    });

    const updateFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value  
        })
    }

    return (
        <form>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" onChange={(e) => {
                updateTimes(e);
                updateFormData(e);    
            }} data-testid="select-date"/>
            <label htmlFor="time">Time</label>
            <select id="time" name="time" data-testid="select-time" onChange={updateFormData}>
                {renderTimeOptions()}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests"  onChange={updateFormData}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion"  onChange={updateFormData}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="noneOfAbove">None of above</option>
            </select>
            <input type="button" value="Complete a Reservation" onClick={(e)=> submitForm(formData)} />        
        </form>
    );
}

export default BookingForm;