import { useMemo } from "react";

import { Alert } from "../Alert/Alert";
import { Task } from "../Task/Task";

import styles from "./tasks.module.css";

export function Tasks({
   tasks,
   searchTaskName,
   onRemoveTask,
   onChangeCompletedTask,
}) {
   // Buscar Task
   const isVisibleTask = (task) => {
      const taskName = task.name.toLocaleLowerCase();
      return taskName.includes(searchTaskName);
   };

   // States of Tasks
   const stateTasks = useMemo(() => {
      if (tasks.length === 0) {
         return "empty";
      } else if (!tasks.some((task) => isVisibleTask(task))) {
         return "search-empty";
      }
      return "default";
   }, [tasks, searchTaskName]);

   if (stateTasks === "empty") {
      return <Alert type={stateTasks} />;
   }

   if (stateTasks === "search-empty") {
      return <Alert type="warning" />;
   }

   return (
      <ul className={styles.tasks}>
         {tasks.map(
            (task) =>
               isVisibleTask(task) && (
                  <Task
                     {...task}
                     key={task.id}
                     onRemove={onRemoveTask}
                     onChangeCompleted={onChangeCompletedTask}
                  />
               )
         )}
      </ul>
   );
}
