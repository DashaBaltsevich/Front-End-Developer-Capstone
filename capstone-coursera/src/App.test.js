import {
  fireEvent,
  render,
  screen,
  renderHook,
  act
} from '@testing-library/react'
import { ReservationForm, HeroSection } from './components'
import { useReducer } from 'react'
import { reducer, initialState, getAvailableTimes } from './App'
import MyContext from './context'

test('exist button Reserve a Table', () => {
  const setIsFormReservationVisible = jest.fn()
  render(
    <HeroSection setIsFormReservationVisible={setIsFormReservationVisible} />
  )
  const ReserveButton = screen.getByText('Reserve a Table')
  expect(ReserveButton).toBeInTheDocument()
  fireEvent.click(ReserveButton)
  expect(setIsFormReservationVisible).toHaveBeenCalledWith(true)
})

test('getAvailableTime Function should return an array of available times', () => {
  const expectedTimes = [
    '17:00 AM',
    '18:00 PM',
    '19:00 PM',
    '20:00 PM',
    '21:00 PM'
  ]

  const result = getAvailableTimes()
  expect(result).toEqual(expectedTimes)
})

test('form test', () => {
  const { result } = renderHook(() => useReducer(reducer, initialState))
  const [state, dispatch] = result.current
  const setIsFormReservationVisible = jest.fn()
  render(
    <MyContext.Provider value={{ state, dispatch }}>
      <ReservationForm
        setIsFormReservationVisible={setIsFormReservationVisible}
      />
    </MyContext.Provider>
  )
  const dateInput = screen.getByLabelText('Choose Date')
  const timeInput = screen.getByLabelText('Choose Time')
  const numberOfGuestsInput = screen.getByLabelText(/Number Of Guests/)
  const occasionInput = screen.getByLabelText(/Occasion/)

  expect(state).toEqual(initialState)

  fireEvent.change(dateInput, { target: { value: '2023-07-23' } })
  expect(dateInput.value).toBe('2023-07-23')

  act(() => {
    dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate: '2023-07-23' } })
  })

  expect(result.current[0]).toEqual({
    availableTime: ['19:00 PM'],
    reservationInfo: {
      date: '2023-07-23',
      time: '',
      numberOfGuests: 0,
      occasion: 'birthday'
    }
  })

  fireEvent.change(timeInput, { target: { value: '19:00 PM' } })
  expect(timeInput.value).toBe('19:00 PM')

  fireEvent.change(numberOfGuestsInput, { target: { value: 4 } })
  expect(numberOfGuestsInput.value).toBe('4')

  fireEvent.change(occasionInput, { target: { value: 'engagement' } })
  expect(occasionInput.value).toBe('engagement')

  // const SubmitButton = screen.getByText('Reserve')
  // fireEvent.click(SubmitButton)

  const form = screen.getByTestId('reservation-form')
  fireEvent.submit(form)

  act(() => {
    dispatch({
      type: 'RESERVE',
      payload: {
        date: dateInput.value,
        time: timeInput.value,
        numberOfGuests: numberOfGuestsInput.value,
        occasion: occasionInput.value
      }
    })
  })

  console.log(setIsFormReservationVisible.mock.calls)

  expect(result.current[0]).toEqual({
    availableTime: ['19:00 PM'],
    reservationInfo: {
      date: '2023-07-23',
      time: '19:00 PM',
      numberOfGuests: '4',
      occasion: 'engagement'
    }
  })

  // expect(dispatch).toHaveBeenCalled()
  // expect(setIsFormReservationVisible).toHaveBeenCalled()
})

// describe('ReservationForm', () => {
//   const dispatch = jest.fn()
//   const setIsFormReservationVisible = jest.fn()

//   const state = {
//     availableTime: ['17:00 AM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM'],
//     reservationInfo: {
//       date: '',
//       time: '',
//       numberOfGuests: 0,
//       occasion: 'birthday'
//     }
//   }
//   test('should submit form and call dispatch and setIsFormReservationVisible', () => {
//     render(
//       <MyContext.Provider value={{ state, dispatch }}>
//         <ReservationForm
//           setIsFormReservationVisible={setIsFormReservationVisible}
//         />
//       </MyContext.Provider>
//     )

//     const dateInput = screen.getByLabelText('Choose Date')
//     const timeInput = screen.getByLabelText('Choose Time')
//     const numberOfGuestsInput = screen.getByLabelText(/Number Of Guests/)
//     const occasionInput = screen.getByLabelText(/Occasion/)

//     fireEvent.change(dateInput, { target: { value: '2023-07-23' } })
//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'UPDATE_TIMES',
//       payload: { selectedDate: '2023-07-23' }
//     })
//     // expect(state.availableTime).toEqual(['19:00 PM'])
//     fireEvent.change(timeInput, { target: { value: '19:00 PM' } })
//     fireEvent.change(numberOfGuestsInput, { target: { value: 4 } })
//     fireEvent.change(occasionInput, { target: { value: 'engagement' } })

//     const form = screen.getByTestId('reservation-form')

//     fireEvent.submit(form)

//     expect(dispatch).toHaveBeenCalled()
//     expect(setIsFormReservationVisible).toHaveBeenCalled()
//   })
// })
