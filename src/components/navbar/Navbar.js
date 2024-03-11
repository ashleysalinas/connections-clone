import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function Navbar() {

    return(
        <div>
            <Link to='home'></Link>
            <Link>About</Link>
            <Link to='create'>Create</Link>
            <Link>Play</Link>
            <Outlet />
        </div>
        
    )
}

export default Navbar;