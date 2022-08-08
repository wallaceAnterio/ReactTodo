import { React, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { Input } from "../Input/Input";
import styles from "../Form/form.module.css";

function Form({ onSubmit }) {
   const [taskName, setTaskName] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
   };
   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <Input
            type="text"
            defaultValue=''
            placeholder="Nome da tarefa"
            onChange={(event) => setTaskName(event.target.value)}
         />
         <button
            type="submit"
            disabled={taskName === ""}
            className={styles.form__button}
         >
            <FaPlus size={14} />
            Adicionar
         </button>
      </form>
   );
}

export default Form;
