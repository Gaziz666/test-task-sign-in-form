import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/mainPage'

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/form" />} />
      <Route path="/form" component={MainPage} />
    </Switch>
  )
}
