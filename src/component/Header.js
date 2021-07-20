import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1 className='header-title'> 
                    <Link to={'/'} className="text-light">
                        Miguel Atencia
                    </Link> 
                </h1>
            </div>

            <Link to={"/task/new"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >New Task &#43;</Link>
        </nav>
     );
}
 
export default Header;