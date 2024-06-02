import React from 'react';
import '../App.css';
import '../Styles/dataViz.css';

import DataHeader from '../Images/dataViz-header.png';
import DataHeaderTwo from '../Images/dataViz-header-2.png'
import Warning from '../Images/data-warning.svg';
import DataLine from '../Images/dataVizLine.svg';
import PieChart from '../Images/pie-chart.svg';
import Rectangle from '../Images/data-rectangle.svg';
import PinkRectangle from '../Images/pink-rectangle.svg';

import Graph1 from '../Images/graph1.png';
import Graph2 from '../Images/graph2.png';
import Graph3 from '../Images/graph3.png';
import Graph4 from '../Images/graph4.png';
import Graph5 from '../Images/graph5.png';
import Graph6 from '../Images/graph6.png';





export const DataViz = () => {
    return (

        <div id="dataViz-whole-page">
            
            <div id="data-header">
        <div>
            
        </div>
               <div> <h1 id="data-header-title">Data and Graphs</h1> </div>
               <div>  <p id="data-header-small-text">♡ Learn more about womens safety ♡</p></div>


                <div id="data-warning">

                    <div><img src={Warning}/></div>
                    <div>  <p id="data-warning-text">
                            The following information contains material on sexual violence. Please be in the correct head space prior to uncovering these facts.
                            </p>
                    </div>

                </div>

               
               
            </div>

            <div id="data-header-bottom-message-container">
                <div id="bottom-message-text"><p>Women face a myriad of challenges, like gender-based violence and inequality, in our everyday lives. Below are some statistics of what women still have to endure.</p> </div>


            </div>


            <div id="lead-stats">

                <div id="lead-stats-1" class="lead-stat-box">
                    <h1 class="lead-stat-title">1/5</h1>
                    <p class="lead-stat-text" id="lead-stat-one-text">Women are sexually assaulted in college</p>

                </div>

            <img src={DataLine} class="data-line"/>
                <div id="lead-stats-2"  class="lead-stat-box">
                    <p class="lead-stat-text">Every</p>
                    <h1 class="lead-stat-title">68 Seconds</h1>
                    <p class="lead-stat-text">an American is sexually assaulted</p>


                </div>

                <img src={DataLine}  class="data-line"/>
                <div id="lead-stats-3">
              
                    <div id="pie-chart-container">

                      <img src={PieChart} id="pie-chart"/>
                      <p class="lead-stat-text" id="pie-chart-text-14">1 in 4 US Women</p>
                    </div>

                    <p class="lead-stat-text" id="pie-chart-sub-text">experienced violence by a partner at some point in her life</p>

                   
                </div>


            </div>

            <div id="graph-section-1">

                <div class="graph-section-header">
                    <img src={Rectangle}/>
                    <div class="graph-title-container">
                        <h2 class="graph-title">Number of Crime Incidents by Crime and Type Year</h2>
                        <p class="graph-sub-title">Data from 2020 to 2022</p>
                    </div>
                </div>


                <div id="graph-section-1-graph-container">

                    <div class="graph-section-1-graph">
                        <img src={Graph1} class="graph-section-1-image" id="graph1"/>
                        <p class="graph-description section-1-graph-desc"> This bar chart visualizes the Sexual Violence victimization by any perpetrator among women, by race and ethnicity. And it reveals that other sexual violence is more prevalent than rape across all groups, with “Two or More races” experiencing the highest rates in both types. Compared to Asian/Pacific Islanders report the lowest prevalence, highlighting significant disparities in sexual violence among different ethnicities.</p>
                    </div>

                    <div class="graph-section-1-graph">
                        <img src={Graph2} class="graph-section-1-image"/>
                        <p class="graph-description section-1-graph-desc">This graph compares the prevalence of different types of crime against women—Dating Violence, Domestic Violence, and Stalking—over the years 2020, 2021, and 2022. Both Dating Violence and Stalking exhibit a similar pattern, showing a steady increase over the three years. Conversely, Domestic Violence demonstrates a decline. The notable surge in reported cases of Domestic Violence in 2020 could be attributed to the conditions imposed by quarantine, which left many women confined to their homes, unable to escape from violent and abusive environments. The increase in stalking in the past years can be attributed to the increase in social media use. Between 2020 and 2022 social media usage increased by 10.51% (D.says: et al.)</p>

                    </div>

                </div>

            </div>


            <div id="graph-section-2">

                    <div class="graph-section-header">
                            <img src={Rectangle}/>
                            <div class="graph-title-container">
                                <h2 class="graph-title">UC Davis Crime Incidents</h2>
                                <p class="graph-sub-title">Data from 2019</p>
                            </div>
                    </div>

                    <div id="graph-section-2-content">
                        <img src={Graph3} id="graph3"/>
                        <p class="graph-description" id="graph-2-desc"> This graph illustrates the number of incidents across various categories: Arrests for Major Crimes, Arrests for Possession, Disciplinary Actions, and Violence against Women in the year 2019. Arrests for Major Crimes appear to be the most prevalent category, followed by instances of violence against women. Notably, the latter category was predominantly reported on campus, a space where every student, regardless of gender, race, or sexuality, should feel safe and protected</p>



                    </div>

            </div>



            <div id="graph-section-3">

                    <div class="graph-section-header">
                                    <img src={PinkRectangle}/>
                                    <div class="graph-title-container">
                                        <h2 class="graph-title">Intimate partner violence affects women around the world </h2>
                                        <p class="graph-sub-title">In the last 12 months</p>
                                    </div>
                     </div>
                     
                  
                            <div id="graph-section-3-content">
                                <img src={Graph4} id="graph-4"/>
                                <p class="graph-description" id="graph-2-desc"> This graph shows the how Intimate partner violence affects women around the world in the last 12 months among 7 areas. As we can observed that the average ratio in Sub-Saharan Africa is the highest, around 20%. And the average ration in Europe& Central Asia and North America are almost the same, and both of them are almost the lowest around 4%.</p>


                            </div>
                            <p id="graph-section-3-footer-note">Reference: The World Bank (Gender Portal Data)</p>
                   


            </div>


            <div id="graph-section-4">
               
                <div class="graph-section-4-sub-container">

                    <div class="section-4-header">
                        <img src={PinkRectangle} class="section-4-rectangle"/>
                        <h2 class="graph-title">Incidence of Various Forms of Violence </h2>
                    </div>
                        
                                     

                     <div class="graph-section-4-content">
                            <img src={Graph5}  class="section-4-graph"/>
                            <p class="graph-description" id="graph-4-sub-desc"> This graph describes the incidence of various forms of violence and abuse among women by type of violence in United States, 2011. The Psychological Aggression being the most prevalent at just over 40%. Other sexual violence follows at around 30%, while physical violence and stalking are less common. And the Rape is the most uncommon one, with only 8.8% opportunity happened. </p>


                        </div>
                    

                </div>

                <div class="graph-section-4-sub-container" id="graph-4-2">

                        <div class="section-4-header">
                                    <img src={PinkRectangle}/>
                                    <div class="graph-title-container">
                                        <h2 class="graph-title">Prevalence of Violence by Group and Type </h2>
                                    
                                    </div>
                        </div>

                        <div class="graph-section-4-content">
                            <img src={Graph6} class="section-4-graph"/>
                            <p class="graph-description"  id="graph-4-sub-desc"> This bar chart visualizes the physical violence and psychological aggression by an intimate partner among women by race/ethnicity. Each bar is divided into two segments: psychological aggression and physical violence, with the total height representing the combined prevalence of both types. Interestingly, psychological aggressiveness is much more common than physical violence in all populations. The Asian/Pacific Islander group shows the lowest combined prevalence, while the Two or More Races group exhibits the highest. </p>


                        </div>
                    

                </div>


            </div>
    <div id="resource-link-container">
            <div id="resource-link-section">
                <h2 id="resource-link-title">Are you feeling overwhelmed or in need of help? <br/>
                    Take a look at our Resources page
                </h2>

                <a href="/resources" target="_blank">
                    <button id="resource-link-button">Resources</button>
                </a>


            </div>
    </div>

          

       
            
        </div>
    )

}