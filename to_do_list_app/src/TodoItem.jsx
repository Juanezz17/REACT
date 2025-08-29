export default function TodoItem({ tarea, toggleComplete, eliminarTarea, editarTarea }) {
  return (
    <div className="flex justify-between items-center gap-5 p-3 bg-white shadow-sm rounded">

      {/* Texto + Checkbox */}
      <div className="flex items-center gap-3">
        <input 
          className="form-checkbox h-5 w-5 text-blue-600" 
          type="checkbox" 
          checked={tarea.completed} 
          onChange={() => toggleComplete(tarea.id)} 
        />
        <span className={tarea.completed ? 'line-through text-gray-400' : 'text-black'}>
          {tarea.text}
        </span>
      </div>

      <div className="flex gap-2">

        <button 
          className="bg-yellow-400 text-white px-2 py-1 rounded text-sm"
          onClick={() => editarTarea(tarea.id)}
        >
          Editar
        </button>

        <button 
          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
          onClick={() => eliminarTarea(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
