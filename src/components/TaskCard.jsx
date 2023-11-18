import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'
import UpdateModal from './UpdateModal'
import { useState } from 'react';


function TaskCard({ task }) {
    const capturarId = () => {
        deleteTask(task.id)
    }

    const {deleteTask} = useContext(TaskContext)

    const [openModal, setOpenModal] = useState(false);

    const onCloseModal = () => {   
        setOpenModal(false)
    }

    
    return (
        

        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <div className="flex justify-between items-center mt-4">
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3" onClick={capturarId}>Eliminar</button>
            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3" onClick={()=>{
                setOpenModal(true)
            }}>Actualizar</button>
            <UpdateModal openModal={openModal} task={task} onCloseModal={onCloseModal} setOpenModal={setOpenModal}/>
            
            </div>
        </div>
    )
}

export default TaskCard