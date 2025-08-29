import {useState} from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [tareas, setTareas] = useState([]);   // Estado que guarda todas las tareas
  const [input, setInput] = useState("");     // Estado para manejar el texto del input

  // Agregar tarea
  const agregarTarea = () => {
    if(input.trim() !== ""){
      setTareas([...tareas, {id: Date.now(), text: input.trim(), completed : false}]);
      setInput(""); 
    }
  }

  // Cambiar estado de completado (checkbox)
  const toggleComplete = (id) => {
    setTareas(
      tareas.map(tarea => 
        tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea
      )
    );
  }

  // liminar tarea
  // Filtra todas las tareas y deja solo las que NO tienen el id seleccionado
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Editar tarea
  // Busca la tarea por id, pone su texto en el input de arriba,
  // y elimina temporalmente esa tarea de la lista para luego re-agregarla editada
  const editarTarea = (id) => {
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      setInput(tarea.text); // carga el texto en el input
      setTareas(tareas.filter((t) => t.id !== id)); // elimina la vieja versión
    }
  };

  return(
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2x1 font-bold text-center">To do List App</h1>

      {/* Input y botón para agregar */}
      <div className="flex items-baseline gap-2 mb-4">
        <input 
          value={input} 
          type="text" 
          placeholder= 'Agregar Tarea' 
          className="flex-1 p-1 border border-gray -300 p-2 rounded" 
          onChange={(e) => setInput(e.target.value) } 
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 mt-5 rounded" 
          onClick={agregarTarea}
        >
          Agregar
        </button>
      </div>

      <div className="space-y-3">
        {tareas.map((tarea) => (
          <TodoItem 
            key={tarea.id} 
            tarea={tarea} 
            toggleComplete={toggleComplete}
            eliminarTarea={eliminarTarea}  
            editarTarea={editarTarea}      
          />
        ))}
      </div>
    </div>
  )
} 
