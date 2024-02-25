import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Curosr icon" />
                        <div>
                            <h3>Front-End Developer</h3>
                            <p>I'm a Front-End Developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Curosr icon" />
                        <div>
                            <h3>Front-End Developer</h3>
                            <p>I'm a Front-End Developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}