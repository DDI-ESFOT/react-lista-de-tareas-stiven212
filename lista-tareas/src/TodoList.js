import React, {useState} from 'react';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [completed, setCompleted] = useState([]);

    const addTask = () => {
        const newTask = document.querySelector("#task").value;
        setTodoList((prevState) => {
            return [...prevState, newTask];
        })
        document.querySelector("#task").value = "";
    }
    const deleteTask = (index) => {
        setTodoList((prevState) => {
            return prevState.filter((task, i) => i !== index);

        });
    };
    const completedTask  = (index) => {
        setCompleted((prevState) =>{
            return[...prevState, todoList[index]];
        }
        );
        deleteTask(index);
    }
    return(
        <div>
            <label>Tarea </label>
            <input id="task" placeholder="Ingrese la tarea"/>
            <button onClick={addTask} >Agregar tarea</button>
            <h1>Lista de tareas pendientes ({todoList.length} en total)</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Eliminar</th>
                        <th>Completar</th>
                    </tr>
                </thead>

                <tbody>
                {todoList.map((task, index) => (
                    <tr key={index}>
                        <td id="taskComplete">{task}</td>
                        <td>
                            <button onClick={ () => deleteTask(index)}>Eliminar</button>
                        </td>
                        <td>
                            <button onClick={() => completedTask(index)}>Completada</button>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
            <h1>Lista de tareas completadas ({completed.length} en total)</h1>
            <table>
                <thead>
                <tr>
                    <h3>Nombre</h3>
                </tr>
                </thead>
                <tbody>
                {
                    completed.map((taskComplete,indexComplete)=>(
                        <tr key={indexComplete}>
                            <th>
                                <ul>
                                    <li>{taskComplete}</li>
                                </ul>
                            </th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};
export default TodoList;