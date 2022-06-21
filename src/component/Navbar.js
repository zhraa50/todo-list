const Navbar = ({projectName})=>
{
    return(
                <nav className='navbar bg-dartk fixed-top'>
                <div className = ' Conteniner-fluid'>
                <a className = 'navbar-brand' style={{color:'white'}} href ='/'>
                    
                 {projectName}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
 