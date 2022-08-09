import React from "react";
import { FaInfoCircle } from "react-icons/fa";

import styles from "./alert.module.css";

export function Alert({ type }) {
   return (
      <div className={`${styles.boxAlert} ${styles[type]}`}>
         {type === "empty" && (
            <>
               <FaInfoCircle size={36} />
               <p>Lista de tarefa Vazia</p>
            </>
         )}
         {type === "warning" && (
            <>
               <FaInfoCircle size={36} />
               <p>
                  Não foi possível localizar nenhuma tarefa, com esse termo,
                  tente novamente.
               </p>
            </>
         )}
      </div>
   );
}
