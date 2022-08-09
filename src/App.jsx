import { useState, useEffect, useMemo } from "react";

import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Tasks } from "./components/Tasks/Tasks";

import styles from "./styles/app.module.css";

const LOCALSTORAGE_TASKS = "todolist-tasks";

export function App() {
   const [tasks, setTasks] = useState([]);
   const [isLoading, setIsloading] = useState(true);
   const [searchTaskName, setSearchTaskName] = useState("");

   const onAddTask = (newTask) => {
      setTasks((currentState) => [...currentState, newTask]);
      setSearchTaskName("");
      console.log(newTask.name);
   };

   const onRemoveTask = (taskId) => {
      setTasks((currentState) =>
         currentState.filter((task) => task.id !== taskId)
      );
   };

   const onChangeCompleted = (taskId) => {
      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      const updatedTask = [...tasks];
      updatedTask[taskIndex].completed = !updatedTask[taskIndex].completed;

      setTasks(updatedTask);
   };

   useEffect(() => {
      if (!isLoading) {
         localStorage.setItem(LOCALSTORAGE_TASKS, JSON.stringify(tasks));
      }
   }, [tasks]);

   useEffect(() => {
      const taskLocal = localStorage.getItem(LOCALSTORAGE_TASKS);
      taskLocal && setTasks(JSON.parse(taskLocal));
      setIsloading(false);
   }, []);

   const handleTermSearch = (e) => {
      const valueTerm = e.target.value.toLocaleLowerCase();
      setSearchTaskName(valueTerm);
   };

   const totalTasks = useMemo(() => {
      return tasks.length;
   }, [tasks]);

   const totalTasksCompleted = useMemo(() => {
      return tasks.filter((task) => task.completed).length;
   });

   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <h1>TODOLIST</h1>
            <Form onSubmit={onAddTask} />
            <hr />

            <Input
               type="text"
               value={searchTaskName}
               onChange={handleTermSearch}
               placeholder="pesquisar tarefa"
            />

            <Tasks
               tasks={tasks}
               searchTaskName={searchTaskName}
               onRemoveTask={onRemoveTask}
               onChangeCompletedTask={onChangeCompleted}
            />

            <footer className={styles.footer}>
               <h6>
                  Total de tarefas:
                  <span>{totalTasks}</span>
               </h6>

               <h6>
                  Total de tarefas concluidas:
                  <span>{totalTasksCompleted}</span>
               </h6>
            </footer>
         </div>
      </div>
   );
}
