import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () =>{
  
    return(
       
            <div className="header">
                <p className="heading">This is my React APP</p>
                <nav>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    {"|"}
                    <Link to="about" activeClassName="active">About</Link>
                    {"|"}
                    <Link to="course" activeClassName="active">Courses</Link>
                </nav>
            </div>
        
    );
};

export default Header;