import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { FormModal } from '../../containers/formModal'
import { PageLayout } from '../../containers/pageLayout'
import { StartPage } from './StartPage'

export const MainPage: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <PageLayout>
      <Switch>
        <Route exact path={`${path}`} component={StartPage} />
        <Route exact path={`${path}/:open`} component={FormModal} />
      </Switch>
    </PageLayout>
  )
}
