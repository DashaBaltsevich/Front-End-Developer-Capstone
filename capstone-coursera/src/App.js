import { useState, useReducer } from 'react'
import './App.css'
import { Footer, Main, ModalWindow, ReservationForm } from './components'
import { Header } from './components/Header'
import MyContext from './context'

function App() {
  const [isFormReservationVisible, setIsFormReservationVisible] =
    useState(false)

  const initialState = {
    availableTime: ['17:00 AM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM'],
    reservationInfo: {
      date: '',
      time: '',
      numberOfGuests: 0,
      occasion: 'birthday'
    }
  }

  const getAvailableTimes = (selectedDate) => {
    if (selectedDate === '2023-07-11') {
      return ['18:00 AM', '20:00 PM']
    } else if (selectedDate === '2023-07-12') {
      return ['19:00 AM']
    } else {
      return ['17:00 AM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM']
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const { selectedDate } = action.payload
        const updatedTimes = getAvailableTimes(selectedDate)
        return {
          availableTime: updatedTimes,
          reservationInfo: {
            ...state.reservationInfo,
            date: selectedDate
          }
        }

      case 'RESERVE':
        return { ...state, reservationInfo: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">
      <Header />
      <Main setIsFormReservationVisible={setIsFormReservationVisible} />
      <Footer />
      {isFormReservationVisible && (
        <ModalWindow setIsFormVisible={setIsFormReservationVisible}>
          <MyContext.Provider value={{ state, dispatch }}>
            <ReservationForm
              setIsFormReservationVisible={setIsFormReservationVisible}
            />
          </MyContext.Provider>
        </ModalWindow>
      )}
    </div>
  )
}

export default App
