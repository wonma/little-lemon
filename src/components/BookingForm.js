// import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 10) {
        errors.name = 'Must be 10 characters or less';
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!phoneRegExp.test(values.phone)) {
        errors.phone = 'Please type a valid phone number'
    }

    if (!values.date) {
        errors.date = 'Required'
    } 

    if (!values.time) {
        errors.date = 'Required'
    }

    if (!values.guests) {
        errors.guests = 'Required'
    } else if (values.guests < 2) {
        errors.guests = 'Please choose 2 or more guests'
    }

    if (!values.occasion) {
        errors.guests = 'Required'
    }

    return errors;
}

const BookingForm = ({availableTimes, updateTimes, submitForm}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            date: new Date().toISOString().slice(0, 10),
            time: availableTimes[0],
            guests: 2,
            occasion: 'birthday'
        },
        onSubmit: values => {
            submitForm(values)
        },
        validate
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Type your first name"/>
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="000-000-0000" />

            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formik.values.date} onBlur={formik.handleBlur} min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                updateTimes(e);
                formik.handleChange(e);    
            }} data-testid="select-date"/>

            <label htmlFor="time">Time</label>
            <select id="time" name="time" value={formik.values.time} data-testid="select-time" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                {
                    availableTimes.map( (time) => {
                        return <option key={time} value={time} data-testid="select-option">{time}</option>
                    })
                }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" value={formik.values.guests} onBlur={formik.handleBlur} onChange={formik.handleChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formik.values.occasion} onBlur={formik.handleBlur} onChange={formik.handleChange}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="none">None</option>
            </select>

            <button type="submit">Complete a Reservation</button>    
        </form>
    );
}

export default BookingForm;