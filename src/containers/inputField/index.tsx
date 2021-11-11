import React from 'react'
import { getIn } from 'formik'

import { IInput, Input } from '../../components/input'

type TInputField = {
  field: {
    name: string
    value: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur: (e: React.BlockquoteHTMLAttributes<HTMLInputElement>) => void
  }
  form: {
    errors?: { [key: string]: string }
  }
}

const InputField: React.FC<IInput & TInputField> = ({
  field,
  form: { errors },
  placeholder,
  label,
  id,
  tabindex,
  type
}) => {
  const error = getIn(errors, field!.name)
  return (
    <Input
      placeholder={placeholder}
      label={label}
      type={type}
      id={id}
      tabindex={tabindex}
      error={error}
      {...field}
    />
  )
}

export default InputField
