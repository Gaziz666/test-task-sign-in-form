import React from 'react'
import { StyledInput, Container } from './styles'

type ITextArea = {
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
  name: string
  id: string
  rows: number
  cols: number
}

export const TextArea: React.FC<ITextArea> = ({
  onChange,
  name,
  id,
  rows,
  cols
}) => {
  return (
    <Container>
      <StyledInput
        onChange={onChange}
        id={id}
        rows={rows}
        cols={cols}
      ></StyledInput>
    </Container>
  )
}
