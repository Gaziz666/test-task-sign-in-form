import React from 'react'
import { ListItem } from './styles'

type TListItem = {
  onClick?: (e: React.SyntheticEvent) => void
  value: string | number
  children: string | number
}
export const DropdownItem: React.FC<TListItem> = ({
  onClick,
  value,
  children
}) => {
  return (
    <ListItem value={value} onClick={onClick}>
      {children}
    </ListItem>
  )
}
