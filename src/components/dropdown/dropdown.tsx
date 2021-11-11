import React, { useState } from 'react'
import { DropDownIcon } from '../icons'
import {
  Container,
  Label,
  StyledButton,
  ListContainer,
  Overlay
} from './styles'

type TDropDown = {
  label: string
  placeholder?: string | number
  value?: string
  children?: React.ReactNode
  name: string
}

export const Dropdown: React.FC<TDropDown> = ({
  label,
  placeholder,
  value,
  children,
  name
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const showList = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      <Container>
        <Label>{label}</Label>
        <StyledButton isVisible={isVisible} onClick={showList} type="button">
          <span>{value || placeholder || name}</span>
          <DropDownIcon />
        </StyledButton>
        {isVisible && (
          <ListContainer onClick={() => setIsVisible((prev) => !prev)}>
            {children}
          </ListContainer>
        )}
      </Container>
      <Overlay isVisible={isVisible} onClick={() => setIsVisible(false)} />
    </>
  )
}
