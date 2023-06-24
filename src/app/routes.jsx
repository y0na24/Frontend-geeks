import { Navigate } from 'react-router-dom'

import Main from './layouts/main'
import Favorites from './layouts/favorites'
import TeamMember from './layouts/teamMember'

const routes = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: 'favorites',
		element: <Favorites />,
	},
	{
		path: 'teamMember',
		children: [
			{
				path: ':memberId',
				element: <TeamMember />,
			},
			{
				path: '*',
				element: <Navigate to='/' />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
]

export default routes
