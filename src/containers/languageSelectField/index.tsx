import React from 'react'
import { ILanguage } from '../../@types/styled'
import { Dropdown, DropdownItem } from '../../components/dropdown'

type TLanguageSelectField = {
  name: string
  onChange: (value: ILanguage) => void
  label: string
  placeholder: string
  value: string
}

const langData = [
  { id: 1, lang: 'Русский' },
  { id: 2, lang: 'Английский' },
  { id: 3, lang: 'Китайский' },
  { id: 4, lang: 'Испанский' }
]

export const LanguageSelectField: React.FC<TLanguageSelectField> = ({
  label,
  name,
  placeholder,
  onChange,
  value
}) => {
  return (
    <Dropdown label={label} name={name} value={value} placeholder={placeholder}>
      {langData.map((item) => (
        <DropdownItem
          value={item.lang}
          key={item.id}
          onClick={(e) => onChange(item)}
        >
          {item.lang}
        </DropdownItem>
      ))}
    </Dropdown>
  )
}
