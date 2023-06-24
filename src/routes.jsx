import Main from './app/layouts/main'
import { Navigate } from 'react-router-dom';
import Favorites from './app/layouts/favorites';
import TeamMember from './app/layouts/teamMember';

const routes = [
  {
    path: '/', element: <Main />
  },
  {
    path: '*', element: <Navigate to="/" />
  },
  {
    path: 'favorites', element: <Favorites />
  },
  {
    path: 'teamMember', element: <TeamMember />
  }
]

export default routes;
