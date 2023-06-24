import './layout.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/navBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;