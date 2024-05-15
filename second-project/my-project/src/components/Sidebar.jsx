import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Sidebar = () => (
  <div className="wrapp">
   
      <Outlet />
   
  </div>
);

export default Sidebar;
