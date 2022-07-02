import React from "react";

function Header() {
    return (
        <>
            <header>
                <main className="header">
                    <div className="left-side">
                        <h1>I'm a <span className="fav-color">Professional</span> Freelancer And <span className="fav-color">Developer</span></h1>
                        <p>Web designers generally have nothing to do with creating content for their projects. Even so, the look of porate copyright-free content into their designs to provide clients with a look that is as finished as possible.</p>
                    </div>
                    <div className="social">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="https://www.instagram.com/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="https://twitter.com/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="https://www.youtube.com/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                        </div>
                    </div>
                </main>
            </header>
        </>
    );
}
export default Header;
