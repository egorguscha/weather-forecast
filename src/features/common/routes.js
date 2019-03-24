import { MainPage } from './pages/main-page'
import { TownPage } from './pages/town-page'
import { AboutUsPage } from './pages/about-us-page'
import { TownsPage } from './pages/towns-page'
export const commonRoutes = () => [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    path: '/town-page/:id',
    exact: true,
    component: TownPage,
    redirect: true
  },
  {
    path: '/towns',
    extact: true,
    component: TownsPage
  },

  {
    path: '/about-us',
    extact: true,
    component: AboutUsPage
  }
]
