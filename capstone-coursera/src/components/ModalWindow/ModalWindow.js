import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ModalWindow.css'

export const ModalWindow = ({ setIsFormVisible, children }) => {
  const div = document.createElement('div')

  const closeOnClickAction = (e) => {
    e.target.classList.contains(`b__modal_window`) && setIsFormVisible(false)
  }
  const closeOnEscapeAction = (e) => {
    e.key === 'Escape' && setIsFormVisible(false)
  }

  useEffect(() => {
    div.setAttribute('class', `b__modal_window`)
    document.body.appendChild(div)
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    div.addEventListener('click', (e) => closeOnClickAction(e))
    document.addEventListener('keydown', (e) => closeOnEscapeAction(e))

    return () => {
      body.style.overflow = 'auto'
      div.removeEventListener('click', (e) => closeOnClickAction(e))
      document.removeEventListener('keydown', (e) => closeOnEscapeAction(e))
      div.remove()
    }
  }, [div])
  return (
    <>
      {createPortal(
        <>
          <div className="b__modal_window__btn_wrap">
            <button
              onClick={() => setIsFormVisible(false)}
              className="b__modal_window__btn"
            />
          </div>
          {children}
        </>,
        div
      )}
    </>
  )
}
