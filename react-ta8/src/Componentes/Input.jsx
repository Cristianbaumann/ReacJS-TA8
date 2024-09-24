import React, { useState } from 'react';

function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      if (editingIndex !== null) {
        // Editar tarea existente
        const updatedTasks = tasks.map((t, index) => 
          index === editingIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditingIndex(null); // Reiniciar el índice de edición
      } else {
        // Agregar nueva tarea
        setTasks([...tasks, task]);
      }
      setTask(''); // Limpiar input
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]); // Poner el texto de la tarea en el input
    setEditingIndex(index); // Guardar el índice de la tarea que se va a editar
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingresa una tarea"
      />
      <button onClick={addTask}>
        {editingIndex !== null ? 'Guardar Cambios' : 'Agregar Tarea'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => editTask(index)}>Editar</button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
