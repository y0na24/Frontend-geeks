import { Navigate } from 'react-router-dom'

import Main from './layouts/main'
import Favorites from './layouts/favorites'
import TeamMemberPage from './components/pages/teamMemberPage'
import TeamMember from './layouts/teamMember'
import Layout from './components/Layout'

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Main />,
			},
			{
				path: 'teamMember',
				element: <TeamMember />,

				children: [
					{
						path: ':memberId',
						element: <TeamMemberPage />,
					},
				],
			},
			{
				path: 'favorites',
				element: <Favorites />,
			},
		],
	},

	{
		path: '*',
		element: <Navigate to='/' />,
	},
]

export default routes
