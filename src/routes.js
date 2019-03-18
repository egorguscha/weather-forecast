import React from 'react'
import { commonRoutes } from '@features/common'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const RouterConfig = () => (
  <Switch>
    {commonRoutes().map((routes, i) => {
      return <Route key={i} {...routes} />
    })}
  </Switch>
)
