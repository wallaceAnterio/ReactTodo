import { useState } from 'react'
import Form from './components/Form/Form';

import styles from './styles/app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>TODOLIST</h1>
        <Form/>

      </div>
    </div>
  )
}

export default App
