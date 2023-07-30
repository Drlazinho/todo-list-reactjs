import { PlusCircle } from 'phosphor-react'
import { Task } from '../Task'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'

type itemApi = {
  isComplete: boolean
  task: string
  id: number
} 

export function NewTasks() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState({
    task: '',
    isComplete: false,
    id: 0
  })

  const handleFetch = async () => {
    await api.get('tasks').then((response) => setTask(response.data))
  }
  useEffect(() => {
    handleFetch()
  }, [])

  const handleNewTask = async (value : itemApi) => {
    await api.post('tasks', value);
    handleFetch();
  }

  const handleRemoveTask = async (value : itemApi) => {
    await api.delete(`tasks/${value.id}`);
    handleFetch();
  }

  const handleUpdateTask = async (value : itemApi) => {
    const updateTask = !value.isComplete
    await api.put(`tasks/${value.id}`, {id: value.id, task: value.task, isComplete: updateTask})
    handleFetch()
  }

  return (
    <div className={styles.containerTasks}>
      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" onChange={(e) => setNewTask({ ...newTask, task: e.target.value })} />
        <button className={styles.createTaskButton} onClick={() => handleNewTask(newTask)}>
          Criar
          <PlusCircle size={16} color="#fff" />
        </button>
      </div>
      {
        task.map((item : itemApi, index) =>
          <Task description={item.task} key={item.id} isCompleted={item.isComplete} removeTask={() => handleRemoveTask(item)} updateTask={() => handleUpdateTask(item)}/>
        )
      }
    </div>
  )
}
