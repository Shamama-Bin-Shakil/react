import React from "react";
import html from "../image/html.png";
import css from "../image/css.png";
import js from "../image/js.png";
import php from "../image/php.png";
import mysql from "../image/mysql.png";
import node from "../image/node.png";
import mongodb from "../image/mongodb.png";
import react from "../image/react.png";
import expressjs from "../image/expressjs.png";
function Skill() {
    return (
        <>
            <section className="skill">
                <main className="skill-main">
                    <h1 className="fav-color">Professional Skills</h1>
                    <div className="skill-content">
                        <div className="skill-item">
                            <div className="img-content skill-item1">
                                <img src={html} alt="images" className="img" />
                            </div>
                            <h1>HTML</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item2">
                                <img src={css} alt="images" className="img" />
                            </div>
                            <h1>CSS</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item3">
                                <img src={js} alt="images" className="img" />
                            </div>
                            <h1>JS</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item4">
                                <img src={php} alt="images" className="img" />
                            </div>
                            <h1>PHP</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item5">
                                <img src={mysql} alt="images" className="img" />
                            </div>
                            <h1>MYSQL</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item6">
                                <img src={node} alt="images" className="img" />
                            </div>
                            <h1>NODEJS</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item7">
                                <img src={mongodb} alt="images" className="img" />
                            </div>
                            <h1>MONGODB</h1>
                        </div>
                        <div className="skill-item">
                            <div className="img-content skill-item8">
                                <img src={react} alt="images" className="img" />
                            </div>
                            <h1>REACT</h1>
                        </div>
                             <div className="skill-item">
                            <div className="img-content skill-item9">
                                <img src={expressjs} alt="images" className="img" />
                            </div>
                            <h1>EXPRESSJS</h1>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Skill;
