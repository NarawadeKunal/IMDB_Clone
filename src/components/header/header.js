import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    function handleClick(){
        console.log("jdjd");
        document.getElementsByClassName("headerRight")[0].style.display="flex";
        document.getElementsByClassName("headerRight")[0].style.translate="0%"
        document.getElementsByClassName("headerRight")[0].style.transitionDuration= "2s";
    }

    function handleClick2(){
        console.log("jdjjdjjfjfjd");
        // document.getElementsByClassName("headerRight")[0].style.display="none";
        document.getElementsByClassName("headerRight")[0].style.translate="100%";
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="load"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="navbars">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="navbars">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="navbars">Upcoming</span></Link>
            </div>
            <div className="ham" onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className="headerRight">
                <div className="wrong" onClick={handleClick2}>
                    <img className="header__icon" src="https://tse1.mm.bing.net/th?id=OIP.NoNgUKIMoR4MV_B3TUOT1gHaHa&pid=Api&P=0" alt="load"/>
                </div>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="navbarsr">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="navbarsr">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="navbarsr">Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;