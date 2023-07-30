import { Check, Trash } from 'phosphor-react'
import { Checkbox } from './components/checkbox'
import styles from './styles.module.css'

interface Props {
  isCompleted: boolean
  description: string
  removeTask: () => void
  updateTask: () => void
}


export function Task({ description, isCompleted, removeTask, updateTask }: Props) {
  return (
    <div className={styles.taskBox}>
      <div className={styles.markTask}>
        <Checkbox isCompleted={isCompleted} updateTask={updateTask}/>
        {isCompleted ? <p style={{ textDecoration: 'line-through' }}>
          {description}
        </p> : <p>
          {description}
        </p>}

      </div>
      <button className={styles.removeButton} onClick={removeTask}>
        <Trash size={32} />
      </button>
    </div>
  )
}
