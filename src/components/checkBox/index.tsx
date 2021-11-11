import React from 'react'
import { Checked } from '../icons'
import { Container, Input, Label, LabelText, Rect } from './styles'

type CheckboxT = {
  label: React.ReactNode
  value: string
  id: string
}

export const CheckBox: React.FC<CheckboxT> = ({ label, value, id }) => {
  return (
    <Container>
      <Input type="checkbox" value={value} id={id} />
      <Label htmlFor={id}>
        <Rect>
          <Checked />
        </Rect>
        <LabelText>{label}</LabelText>
      </Label>
    </Container>
  )
}
