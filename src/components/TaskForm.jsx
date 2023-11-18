import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function TaskForm() {
    const { createTask } = useContext(TaskContext)
    const [openModal, setOpenModal] = useState(false);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title === '' || description === '') {
            setOpenModal(true)
            return
        }

        

        createTask(title, description)
        setDescription('')
        setTitle('')
    }

    return (
        <div className='max-w-md mx-auto'>

            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4' >
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu Tarea</h1>
                <input placeholder="Tarea..." type="text" onChange={
                    (event) => {
                        setTitle(event.target.value)
                    }
                }
                    value={title}
                    autoFocus={true}
                    className='w-full mb-2 p-3 bg-slate-300'
                />
                <textarea onChange={
                    (event) => {
                        setDescription(event.target.value)
                    }
                }
                    placeholder="Descripción" value={description}
                    className='w-full mb-2 p-3 bg-slate-300'></textarea>
                <div className='flex flex-col items-center'>
                    <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Guardar
                    </button>
                </div>
            </form>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup >
                <Modal.Header className='bg-slate-800'/>
                <Modal.Body className='bg-slate-800'>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
                            No Se Puede Crear Una Tarea Sin Titulo o Descripcion
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Regresar"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TaskForm