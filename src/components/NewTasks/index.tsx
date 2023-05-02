import { PlusCircle } from 'phosphor-react'
import { Task } from '../Task'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'

export function NewTasks() {
  const [task, setTask] = useState([])

  useEffect(() => {
    api.get('tasks').then((response) => setTask(response.data))
  }, [])

  return (
    <div className={styles.containerTasks}>
      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button className={styles.createTaskButton}>
          Criar
          <PlusCircle size={16} color="#fff" />
        </button>
      </div>
      {
        task.map((item, index) =>
          <Task description={item.task} key={item.id} isCompleted={item.isComplete} />
        )
      }
    </div>
  )
}
