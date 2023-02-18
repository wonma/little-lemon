import FullScreenSection from "./FullScreenSection";
import styles from "./BookingForm.module.scss";
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

    if (values.guests < 2) {
        errors.guests = 'Please choose 2 or more guests'
    }

    return errors;
}

const BookingForm = ({availableTimes, updateTimes, submitForm}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            date: new Date().toISOString().slice(0, 10),
            time: availableTimes ? availableTimes[0] : '',
            guests: 0,
            occasion: 'birthday'
        },
        onSubmit: values => {
            submitForm(values)
        },
        validate
    });

    return (
        <FullScreenSection
            bgColor='#f7f7f7' 
            fontColor='#333' 
            bgImage='none'
        >
            <form onSubmit={formik.handleSubmit} className={styles.Form}>
                <h2 className={styles.HeadingGuide}>Book your table now</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    data-testid="name-input" 
                    value={formik.values.name} 
                    onBlur={formik.handleBlur} 
                    onChange={formik.handleChange} 
                    placeholder="Type your first name" 
                    required
                />
                {formik.errors.name && formik.touched.name ? <div className={styles.Error}>{formik.errors.name}</div> : null}

                <label htmlFor="phone">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    data-testid="phone-input" 
                    value={formik.values.phone} 
                    onBlur={formik.handleBlur} 
                    onChange={formik.handleChange} 
                    placeholder="000-000-0000" 
                    required
                />
                {formik.errors.phone && formik.touched.phone ? <div className={styles.Error}>{formik.errors.phone}</div> : null}

                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={formik.values.date} 
                    onBlur={formik.handleBlur} 
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => {
                        updateTimes(e);
                        formik.handleChange(e);    
                    }} 
                    data-testid="select-date" 
                    required
                />
                {formik.errors.date && formik.touched.date ? <div className={styles.Error}>{formik.errors.date}</div> : null}

                <label htmlFor="time">Time</label>
                <select 
                    id="time" 
                    name="time"
                    value={formik.values.time} 
                    data-testid="select-time" 
                    onBlur={formik.handleBlur} 
                    onChange={formik.handleChange} 
                    required
                >
                    {   availableTimes ?
                        availableTimes.map( (time) => {
                            return <option key={time} value={time} data-testid="select-time-option">{time}</option>
                        }) : null
                    }               
                </select>
                {formik.errors.time && formik.touched.time ? <div className={styles.Error}>{formik.errors.time}</div> : null}

                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    id="guests" 
                    name="guests" 
                    data-testid="guests-input" 
                    value={formik.values.guests} 
                    onBlur={formik.handleBlur} 
                    onChange={formik.handleChange} 
                    required
                />
                {formik.errors.guests && formik.touched.guests ? <div className={styles.Error}>{formik.errors.guests}</div> : null}

                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    name="occasion"
                    data-testid="select-occasion" 
                    value={formik.values.occasion} 
                    onBlur={formik.handleBlur} 
                    onChange={formik.handleChange} 
                    required
                >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                    <option value="none">None</option>
                </select>
                {formik.errors.occasion && formik.touched.occasion ? <div className={styles.Error}>{formik.errors.occasion}</div> : null}

                <button type="submit" disabled={!(formik.isValid && formik.dirty)} data-testid="reserve-button">Complete a Reservation</button>    
            </form>
        </FullScreenSection>
       
    );
}

export default BookingForm;