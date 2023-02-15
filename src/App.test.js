import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';

test('Renders the BookingPage heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(/Book a Table/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders the initial value', async () => {
  // render(<BookingPage />);
  const { getByTestId, getAllByTestId } = render(<BookingPage />);
  // const selectField = await getByTestId('select-time');
  let options = getAllByTestId('select-option')
  expect(options[0]).toHaveTextContent('19:00');
  expect(options[1]).toHaveTextContent('19:30');
});


test('Select Date testing', async () => {
  render(<BookingPage />);
  const selectDate = await screen.getByTestId('select-date')
  
  fireEvent.change(selectDate, {
    target: { value: "2023-02-04" }
  })
  
  const options = await screen.getAllByTestId('select-option')
  expect(options[0]).toHaveTextContent('20:00');
  expect(options[1]).toHaveTextContent('20:30');
  expect(options[2]).toHaveTextContent('21:00');
});


test('Select Time testing', async () => {
  // [질문보류] 아래의 로직은 19:30가 API로부터 불러들인 데이터 옵션 중 있을 때 가능한것 아닌가?
  render(<BookingPage />);
  const selectField = await screen.getByTestId('select-time');
  fireEvent.change(selectField, {
    target: { value: "19:30"}
  })
  expect(selectField).toHaveValue('19:30');
});
