import { Field } from 'formik'
import React, { forwardRef } from 'react'
import { StyledInput, Container, Label, ErrorMessage } from './styles'

export type IInput = {
  placeholder?: string
  type?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  name: string
  label: string
  id?: string
  value?: string
  tabindex?: string
  error?: string
}

type Ref = HTMLInputElement

export const Input = forwardRef<Ref, IInput>(
  (
    {
      placeholder,
      type = 'text',
      onChange,
      name,
      label,
      id,
      value,
      tabindex,
      error
    },
    innerRef
  ) => {
    return (
      <Container>
        <Label htmlFor={id}>{label || placeholder}</Label>
        <StyledInput
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          id={id}
          name={name}
          value={value}
          tabindex={tabindex}
          ref={innerRef}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    )
  }
)
