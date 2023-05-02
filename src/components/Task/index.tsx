import { Check, Trash } from 'phosphor-react'
import { Checkbox } from './components/checkbox'
import styles from './styles.module.css'

interface Props {
  isCompleted: boolean
  description: string
}


export function Task({ description, isCompleted }: Props) {
  return (
    <div className={styles.taskBox}>
      <div className={styles.markTask}>
        <Checkbox isCompleted={isCompleted} />
        <p>
         {description}
        </p>
      </div>
      <button className={styles.removeButton}>
        <Trash size={32} />
      </button>
    </div>
  )
}
