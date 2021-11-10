import React from 'react'
import { idText, isTemplateExpression } from 'typescript'
import { StyledSelect, Container, Label } from './styles'

type ISelect = {
  name: string
  label: string
  id: string
  options: { name: string; value: string }[]
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<ISelect> = ({
  options,
  name,
  label,
  id,
  onChange
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect name={name} id={id} onChange={onChange}>
        {options.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.value}
            </option>
          )
        })}
      </StyledSelect>
    </Container>
  )
}
