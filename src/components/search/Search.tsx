import React, { useState } from 'react';
import styles from './Search.module.css'
const Input = () => {
  const [input, setInput] = useState('')
  return (
    <div className={styles.container} >
        <div className={styles.searchWrapper}>
          <span className={styles.svg}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 17.5L13.1667 13.1666" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>


          <input className={styles.input} type="text" placeholder='Search'/>
        </div>
    </div>
  )
}



export default Input