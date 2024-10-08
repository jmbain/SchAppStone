import { NavLink } from "react-router-dom";


import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

function NavBar() {
    return (
        <nav className="navbar">
            <Dropdown>
                <MenuButton>...</MenuButton>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>My Schools</MenuItem>
                    <MenuItem>My Applications</MenuItem>
                    <MenuItem>My Students</MenuItem>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Dropdown>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/students">My Students</NavLink>
            <NavLink to="/applications">My Applications</NavLink>
            <NavLink to="/">Logout</NavLink>
        </nav>
    )
}

export default NavBar;