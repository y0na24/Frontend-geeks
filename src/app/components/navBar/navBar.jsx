import { Link } from 'react-router-dom'
import './navBar.css'
const NavBar = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav_links'>
					<li>
						<Link className='link' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='link' to='/Favorites'>
							Favorites
						</Link>
					</li>
					<li>
						<Link className='link' to='/TeamMember'>
							Team Member
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default NavBar
