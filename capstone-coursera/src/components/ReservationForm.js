import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './ReservationForm.css'
import { useContext } from 'react'
import MyContext from '../context'

export const ReservationForm = ({ setIsFormReservationVisible }) => {
  const today = new Date()
  const { state, dispatch } = useContext(MyContext)

  return (
    <section className="s-reservation">
      <Formik
        initialValues={{
          date: state.reservationInfo.date,
          time: state.availableTime[0],
          numberOfGuests: state.reservationInfo.numberOfGuests,
          occasion: state.reservationInfo.occasion
        }}
        onSubmit={(values) => {
          dispatch({ type: 'RESERVE', payload: { values } })
          setIsFormReservationVisible(false)
        }}
        validationSchema={yup.object({
          date: yup
            .date()
            .min(today, 'Date must be after or equal to the current day')
            .required(),
          time: yup.string().required(),
          numberOfGuests: yup.number().min(1).max(10).required()
        })}
      >
        {({ values, setFieldValue }) => (
          <Form data-testid="reservation-form">
            <div className="f-reservation_item">
              <label htmlFor="date" className="f-reservation_label">
                Choose Date
              </label>
              <Field
                id="date"
                type="date"
                name="date"
                value={values.date}
                component="input"
                className="f-reservation_field"
                onChange={(e) => {
                  const selectedDate = e.target.value
                  setFieldValue('date', selectedDate)
                  dispatch({
                    type: 'UPDATE_TIMES',
                    payload: { selectedDate }
                  })
                }}
              />
              <ErrorMessage
                name="date"
                component={({ children }) => (
                  <p className="f-reservation_field-error">{children}</p>
                )}
              />
            </div>
            <div className="f-reservation_item">
              <label htmlFor="time" className="f-reservation_label">
                Choose Time
              </label>
              <Field
                id="time"
                component="select"
                name="time"
                value={values.time}
                className="f-reservation_field"
              >
                {state.availableTime.map((el) => (
                  <option value={el} key={el} className="f-reservation_field">
                    {el}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="time"
                component={({ children }) => (
                  <p className="f-reservation_field-error">{children}</p>
                )}
              />
            </div>
            <div className="f-reservation_item">
              <label htmlFor="numberOfGuests" className="f-reservation_label">
                Number Of Guests
              </label>
              <Field
                id="numberOfGuests"
                type="number"
                name="numberOfGuests"
                value={values.numberOfGuests}
                className="f-reservation_field"
              />
              <ErrorMessage
                name="numberOfGuests"
                component={({ children }) => (
                  <p className="f-reservation_field-error">{children}</p>
                )}
              />
            </div>
            <div className="f-reservation_item">
              <label htmlFor="occasion" className="f-reservation_label">
                Occasion
              </label>
              <Field
                id="occasion"
                component="select"
                name="occasion"
                value={values.occasion}
                className="f-reservation_field"
              >
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </Field>
            </div>
            <button
              type="submit"
              className="f-reservation_button styled-button"
            >
              Reserve
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
