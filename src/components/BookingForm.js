import { useState } from "react";

const BookingForm = ({availableTimes, updateTimes, submitForm}) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: new Date().toISOString().slice(0, 10),
        time: availableTimes[0],
        guests: 2,
        occasion: 'birthday',
    });

    const updateFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value  
        })
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={updateFormData} placeholder="Type your first name"/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={updateFormData} placeholder="000-000-0000" />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={(e) => {
                updateTimes(e);
                updateFormData(e);    
            }} data-testid="select-date"/>
            <label htmlFor="time">Time</label>
            <select id="time" name="time" value={formData.time} data-testid="select-time" onChange={updateFormData}>
                {
                    availableTimes.map( (time) => {
                        return <option key={time} value={time} data-testid="select-option">{time}</option>
                    })
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" value={formData.guests}  onChange={updateFormData}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={updateFormData}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="none">None</option>
            </select>
            <input type="button" value="Complete a Reservation" onClick={(e)=> submitForm(formData)} />        
        </form>
    );
}

export default BookingForm;