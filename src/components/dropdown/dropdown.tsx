import React, { useState } from 'react'
import { DropDownIcon } from '../icons'
import { Container, Label, StyledButton, ListContainer } from './styles'

type TDropDown = {
  label: string
  placeholder?: string | number
  value?: string | number
  children?: React.ReactNode
}

export const Dropdown: React.FC<TDropDown> = ({
  label,
  placeholder,
  value,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  console.log('selectedValue', selectedValue)
  const showList = () => {
    setIsVisible((prev) => !prev)
  }

  const handleSelectItem = (e: React.SyntheticEvent) => {
    setIsVisible((prev) => !prev)
    setSelectedValue(e.currentTarget.nodeValue)
  }

  return (
    <Container>
      <Label>{label}</Label>
      <StyledButton onClick={showList} type="button">
        <span>{value || placeholder}</span>
        <DropDownIcon />
      </StyledButton>
      {isVisible && (
        <ListContainer onClick={handleSelectItem}>{children}</ListContainer>
      )}
    </Container>
  )
}
