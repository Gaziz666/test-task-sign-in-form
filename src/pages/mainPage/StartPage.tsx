import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { Button } from '../../components/button'
import { ButtonWrapper } from './styles'

export const StartPage: React.FC = () => {
  const { path } = useRouteMatch()
  const history = useHistory()
  return (
    <ButtonWrapper>
      <Button onClick={() => history.push(`${path}/open`)}>Open Form</Button>
    </ButtonWrapper>
  )
}
