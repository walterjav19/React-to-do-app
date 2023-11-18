import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {  Label, Modal,Button } from 'flowbite-react';
import {TaskContext} from '../context/TaskContext'
import {useContext,useState} from 'react'

function UpdateModal({openModal, task, onCloseModal}) {
  
  const {updateTask} = useContext(TaskContext)

  const [Title, setTitle] = useState(task.title)
  const [Description, setDescription] = useState(task.description)
  const [AlertModal, setAlertModal] = useState(false)
  const [AlertModal2, setAlertModal2] = useState(false)

  return (
    <>
      <Modal show={openModal} size="md"  onClose={()=>{onCloseModal(); setTitle(task.title); setDescription(task.description)}} popup>
        <Modal.Header className='bg-slate-800' />
        <Modal.Body className='bg-slate-800'>
          <div className="space-y-6">
            <h3  className="mb-5 text-lg font-normal text-white dark:text-gray-400">Actualizar Tarea</h3>
            <div>
              <div className="mb-2 block">
                <Label defaultValue="Tarea" className='text-white' />
              </div>
              <input type='text' value={Title}  className='w-full mb-2 p-3 bg-slate-300' onChange={
                (e)=>{
                  setTitle(e.target.value)
                }
              } required />
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium dark:text-white text-white">Descripcion</label>
                <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  bg-slate-300"  onChange={(e)=>{
                  setDescription(e.target.value)
                }} value={Description}></textarea>
              </div>
            </div>
            <div className="flex justify-center gap-4">
               <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={
                  ()=>{
                    if(Title === '' || Description === ''){
                      setAlertModal2(true)
                    }else{
                      setAlertModal(true)
                    }

                    
                  }
               }>Actualizar</button>
            </div>
          </div>
        </Modal.Body>
        <Modal show={AlertModal} size="md" onClose={() => setAlertModal(false)} popup >
                <Modal.Header className='bg-slate-800'/>
                <Modal.Body className='bg-slate-800'>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
                            Esta Seguro que quiere actualizar el contenido
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={() => {
                              updateTask(task.id,Title,Description)
                              setAlertModal(false)
                              onCloseModal()
                              }}>
                                {"Continuar"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={AlertModal2} size="md" onClose={() => setAlertModal2(false)} popup >
                <Modal.Header className='bg-slate-800'/>
                <Modal.Body className='bg-slate-800'>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
                            No Se Puede Actualizar Una Tarea Sin Titulo o Descripcion
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setAlertModal2(false)}>
                                {"Regresar"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
      </Modal>


    </>
  );
}

export default UpdateModal