import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn}) => {
        if(isSignedIn) {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                       <p 
                       onClick={() => onRouteChange('signout')}
                       className='f2 link dim black underline pa3 pointer white b'>Sign Out</p>
            </nav> 
            );
        } else {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                       <p 
                       onClick={() => onRouteChange('signin')}
                       className='f2 link dim black underline pa3 pointer white b'>Sign In</p>

                        <p 
                       onClick={() => onRouteChange('register')}
                       className='f2 link dim black underline pa3 pointer white b'>Register</p>
            </nav>

            
            );
        }

       
}

export default Navigation;