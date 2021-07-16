import React,{useState,useEffect} from 'react'
import "../css/Nav.css"
function Nav() {
    const [show, handleshow] = useState(false)
    const navbarTransition = () => {
        if (window.screenY > 100) {
            handleshow(true)
        } else {
            handleshow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", navbarTransition,true);
        return () => {
            window.removeEventListener("scroll",navbarTransition,true)
        }
    },[])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <div>
                    
                </div>
                <img className="nav_avatar"
                    src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" alt="" />
            </div>

        </div>
    )
}

export default Nav
