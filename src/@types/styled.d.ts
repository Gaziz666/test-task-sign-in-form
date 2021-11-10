import { CSSProp } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
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
