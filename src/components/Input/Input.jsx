import styles from '../Input/input.module.css';

export function Input(props) {
   return <input className={styles.input} {...props}/>
}