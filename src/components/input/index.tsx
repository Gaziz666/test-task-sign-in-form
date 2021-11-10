import React, { forwardRef } from 'react'
import { StyledInput, Container, Label, ErrorMessage } from './styles'

type IInput = {
  placeholder?: string
  type?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  name: string
  label: string
  id?: string
  value?: string
  tabindex?: string
  onKeyDown?: (e: React.SyntheticEvent) => void
  ref?: React.Ref<HTMLInputElement>
}

type Ref = HTMLInputElement

export const Input = forwardRef<Ref, IInput>(
  (
    { placeholder, type = 'text', onChange, name, label, id, value, tabindex },
    innerRef
  ) => {
    console.log('ref', placeholder, onChange, name, label, id, value, tabindex)

    return (
      <Container>
        <Label htmlFor={id}>{label || placeholder}</Label>
        <StyledInput
          placeholder={placeholder}
          type={type}
          // onChange={onChange}
          id={id}
          name={name}
          value={value}
          tabindex={tabindex}
          // onKeyDown={onKeyDown}
          ref={innerRef}
        />
        <ErrorMessage></ErrorMessage>
      </Container>
    )
  }
)
