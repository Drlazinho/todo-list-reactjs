import style from './styles.module.css'
import { Check } from 'phosphor-react'
import { useId } from 'react'

interface Props {
  isCompleted: boolean
  updateTask: () => void
}

export function Checkbox({ isCompleted, updateTask }: Props) {
  const id = useId()
  return (
    <>
      <input
        className={style.input}
        onClick={() => updateTask()}
        type="checkbox"
        name="checkbox"
        checked={isCompleted}
        id={id}
        value="value"
        hidden
      />
      <label className={style.labelCheck} htmlFor={id}>
        <div className={style.checkContainer}>
          {isCompleted && <Check size={16} />}
        </div>
      </label>
    </>
  )
}
