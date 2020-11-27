import React from 'react';

import NavbarC from './NavbarC';

function Layout(props){
    return(
        <React.Fragment>
            <NavbarC />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;