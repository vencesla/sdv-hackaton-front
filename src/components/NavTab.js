import {Link} from 'react-router-dom';

import {PersonFill, PersonHearts, BinocularsFill} from 'react-bootstrap-icons';

const NavTab = () => {

    return (
        <div className="NavTab">
            <Link to="/matchlist" className="navtab-link"><PersonHearts/></Link>
            <Link to="/dashboard" className="navtab-link"><BinocularsFill/></Link>
            <Link to="/profile" className="navtab-link"><PersonFill/></Link>
        </div>
    )
}
export default NavTab