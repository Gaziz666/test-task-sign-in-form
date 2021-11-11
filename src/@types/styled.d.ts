import { CSSProp } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {}
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    isOpen?: boolean
    center?: boolean
    size?: string
    name?: string
    tabindex?: string
  }
}

export interface ILanguage {
  id: number
  lang: string
}
