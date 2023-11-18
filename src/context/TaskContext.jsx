import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // Obtener los datos almacenados en localStorage al cargar la página
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(storedTasks);

  const createTask = (taskTitle, description) => {
    const newTask = {
      title: taskTitle,
      id: tasks.length,
      description: description,
    };

    // Actualizar el estado basado en el estado anterior
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Actualizar localStorage con las tareas actualizadas
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (id) => {
    // Filtrar las tareas para excluir la tarea con el ID proporcionado
    const updatedTasks = tasks.filter((task) => task.id !== id);

    // Actualizar el estado basado en el estado anterior
    setTasks(() => updatedTasks);

    // Actualizar localStorage con las tareas actualizadas
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = (id, taskTitle, description) => {
    // Mapear las tareas y actualizar la tarea con el ID proporcionado
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { title: taskTitle, id: id, description: description } : task
    );

    // Actualizar el estado basado en el estado anterior
    setTasks(() => updatedTasks);

    // Actualizar localStorage con las tareas actualizadas
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    // Actualizar el estado con las tareas almacenadas en localStorage al cargar la página
    setTasks(storedTasks);
  }, []); // Agregar el array vacío como dependencia para ejecutar el efecto solo una vez

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
