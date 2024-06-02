import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";
import {Archita} from "./individual components/member";
import {Giang} from "./individual components/member";
import {Grisha} from "./individual components/member";
export const Team = () => {
    return (
        <div> 
            <div className="about-us-team">
                <h1> About Us </h1>
                <p>
                At SafeHER, our mission is to create a digital safe community and platform for women on the UC Davis campus. We believe that every woman deserves to feel safe, supported, and empowered, and we are committed to providing resources, support, and a sense of community for all women at UC Davis.
                </p>
            </div>
            <div className="intro">
                <h1> Meet Us </h1>
                <p>UC Davis students wanting to make a change.</p>
                
                <div>
                    <Card/>
                    <Archita/>
                    <Giang/>
                    <Grisha/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className="team_impact">
                <h1> Our Values </h1>
                <div className="pillars-parent">
                    <div className="pillars-child">Compassion</div>
                    <div className="pillars-child">Inclusivity</div>
                    <div className="pillars-child">Empowerment</div>
                </div>
            </div>
        </div>
    )
}