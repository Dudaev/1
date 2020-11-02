import React, { useState } from 'react';
import styles from './Input.module.css'
const Input = () => {
  const [input, setInput] = useState('')
  const [svgX, setSvgX] = useState(false)
  const [svgError, setSvgError] = useState(false)
  return (
    <div className={styles.container} >
    <div >
      {svgX && <span className={styles.svgX} onClick={() => setInput('')}>
        <svg   width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8334 4.16669L4.16669 15.8334" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16669 4.16669L15.8334 15.8334" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>}
      {svgError && <span className={styles.svg}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4V10" stroke="#E53009" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="15" r="1" fill="#E53009"/>
        </svg>
      </span>}

      <input className={styles.input} placeholder='Name' type="text"
             value={input} onBlur={() => setSvgX(false) } onFocus={() => setSvgX(true)}
             onChange={(e) => console.log(e)}
             />
    </div>
    </div>
  )
}



export default Input