/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '../../contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error` as keyof typeof state]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return error ? '*' : 'T'
  }

  const getTitle = (): string => {
    return error as string || 'All Good'
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
  <div className={Styles.inputWrap}>
<input {...props} readOnly data-testid={props.name} onFocus={enableInput} onChange={handleChange} />
<span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
</div>
  )
}

export default Input
