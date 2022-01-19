import React from 'react'
import './styles/homeBanner.css'
// import SearchIcon from '@mui/icons-material/Search';


export default function HomeBanner() {
    return (
        <>
            <div className='parentContainer'>
                <div className="tintLayer">
                    <div className="header">
                        <p className='leftLinks'>Get the App</p>
                        <div className="rightLinks">
                            <p className='linkItem'>Add a Recipe</p>
                            <p className='linkItem centerLink'>Login</p>
                            <p className='linkItem'>Sign Up</p>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require('../assets/logo_transparent_nopadding.png')} alt="" className="logo" />
                        <p className ='slogan'>Be Your Own Chef!</p>
                        {/* <SearchIcon/> */}
                        <div className="inputContainer">
                            <div>
                                P
                            </div>
                            <input className ='search' placeholder='Search any dish and get full recipe'/>  
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
