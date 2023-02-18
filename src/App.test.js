import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import { act } from "react-dom/test-utils";


describe('BookingPage', () => {

  test("should render the heading called 'Book a Table'", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(/Book a Table/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  test('should render initial available times in the time select field', async () => {
    const { getAllByTestId } = await render(<BookingPage />);
    let options = getAllByTestId('select-time-option')
    expect(options[0]).toBeInTheDocument();
  });
  
  
  test('should render updated available times when a date is selected', async () => {
  
    const { getByTestId, getAllByTestId } = await render(<BookingPage />);
  
    const selectDate = await getByTestId('select-date')
    
    fireEvent.change(selectDate, {
      target: { value: "2023-02-04" }
    })
    
    const options = await getAllByTestId('select-time-option')
    expect(options[0]).toBeInTheDocument();
  });
  
})

describe('Booking Form', () => {

  it('should require name input', () => {
    act(() => {
      render(<BookingForm />);
    })
    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toBeRequired();
  })

  it('should require phone input', () => {
    act(() => {
      render(<BookingForm />);
    })
    const phoneInput = screen.getByTestId('phone-input');
    expect(phoneInput).toBeRequired();
  })

  it('should require date input', () => {
    act(() => {
      render(<BookingForm />);
    })    
    const dateInput = screen.getByTestId('select-date');
    expect(dateInput).toBeRequired();
  })

  it('should require time input', () => {
    act(() => {
      render(<BookingForm />);
    })    
    const timeInput = screen.getByTestId('select-time');
    expect(timeInput).toBeRequired();
  })

  it('should require guests input', () => {
    act(() => {
      render(<BookingForm />);
    })    
    const guestsInput = screen.getByTestId('guests-input');
    expect(guestsInput).toBeRequired();
  })

  it('should require occasion input', () => {
    act(() => {
      render(<BookingForm />);
    })    
    const occasionInput = screen.getByTestId('select-occasion');
    expect(occasionInput).toBeRequired();
  })

  it('should disable the submit button if guests value is 0', async () => {
    act(() => {
      render(<BookingForm />);
    })
    const guestsInput = screen.getByTestId('guests-input');
    fireEvent.change(guestsInput, {
      target: { value: 0 }
    })
    const reserveButton = await screen.getByTestId('reserve-button');

    expect(reserveButton).toBeDisabled();
  })


})