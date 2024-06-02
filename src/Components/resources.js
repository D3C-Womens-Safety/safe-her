import React from 'react';
import '../App.css';
import '../Styles/resources.css';
import HeaderImage from '../Images/resources-header.png';
import Heart from '../Images/heart.svg';
import Phone from '../Images/pink-phone.svg';
import Globe from '../Images/resource-globe.svg';
import Location from '../Images/Location.svg';
import Cow from '../Images/resource-cow.svg'
import Article from '../Images/article.svg'
import DataLink from '../Images/data-link.svg';


import Card1 from '../Images/card1.png';
import Card2 from '../Images/card2.png';
import Card3 from '../Images/card3.png';
import Card4 from '../Images/card4.png';
import Card5 from '../Images/card5.png';
import Card6 from '../Images/card6.png';
import Card7 from '../Images/card7.png';
import Card8 from '../Images/card8.png';
import Card9 from '../Images/card9.png';
import Card10 from '../Images/card10.png';
import Card11 from '../Images/card11.png';
import DataCard from '../Images/dataCard.png';






export const Resources = () => {
    return (
<div id="resource-whole-page">


        <div id="resources-header">
            <div id="header-text">
                <h1 id="header-main-text">Resources</h1>
                <p id="header-small-text"> <img src={Heart} class="heart"/>We want you to be safe, happy and heard <img src={Heart} class="heart"/></p>

            </div>
            
           
            <div id="header-box-container">

                
                <div class="header-box" id="SA-hotline">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Globe}/> Confidental 24/7 Support</h2>
                        <h2 class="header-box-title-2">National Sexual Assault Hotline</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>
                    
                    <div class="header-box-button-container">
                        <p class="box-phone">(800) 656-4673</p>
                      
                        <div class="header-box-button-level-2">

                        <a href="https://www.rainn.org/resources" target="_blank"><button class="header-box-button">Offical Website</button></a>
                        <a href="https://hotlines.rainn.org/?messaging_service_key=d6cfe807-61dd-48b5-aa15-7a9e1cb94bc6&task_sid=WTe1f5eb1b0424cdd33ba1a6f525b86efa" target="_blank"><button class="header-box-button">Chat Now</button></a>
                            

                        </div>

                    </div>
                    

                </div>

                <div class="header-box" id="911-box">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Phone}/> If this is an emergency, call 911.</h2>
                        <h2 class="header-box-title-2">National Domestic Violence Hotline</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button-container" >
                        <p class="box-phone">(800) 799-7233</p>

                        <div class="header-box-button-level-2">
                    
                            <a href="https://www.thehotline.org/?utm_source=youtube&utm_medium=organic&utm_campaign=domestic_violence" target="_blank"><button class="header-box-button">Offical Website</button></a>
                            <a href="https://www.thehotline.org/get-help/" target="_blank"><button class="header-box-button">Get Help</button></a>


                        </div>

                    </div>
                </div>

                  <div class="header-box" id="legal-box">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Globe}/> Legal Advice</h2>
                        <h2 class="header-box-title-2">Womens Law</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button-container" >
                        <a href="https://www.womenslaw.org/" target="_blank" class="no-underline">  <p class="law-button">Check Out Their Website</p> 
                        
                        </a>
                        <a href=" https://hotline.womenslaw.org/public" target="_blank"  class="no-underline">  <p class=" law-button">Email Hotline</p> 
                        
                        </a>


                    </div>
                </div>

            </div>
        
         <p id="footer-note">We are based in UC Davis, so most of our resources will be located here</p>

        </div>

        <div id="resouce-section">


            <div id="resource-1" class="resouce-section">
                <div >
                    <h2 class="resource-title"> <img src={Location}/> Your Local Support Network</h2>
                    <p class="resource-section-sub-text">Access counseling, legal aid, health services, and more, all within your community. Empower yourself with these local resources designed to uplift and protect.</p>

                </div>
          
                    <div class="resource-images">
                        <a href="https://www.yolocounty.org/government/general-government-departments/health-human-services/children-youth/women-infants-children-wic" target="_blank"><img src={Card7} class="image-card"/> </a>
                        <a href="https://empoweryolo.org/" target="_blank"><img src={Card8} class="image-card"/> </a>
                        <a href="https://www.weaveinc.org/" target="_blank"><img src={Card9} class="image-card"/> </a>
                        <a href="https://www.csus.edu/student-affairs/centers-programs/women-resource-center/" target="_blank"><img src={Card10} class="image-card"/> </a>
                        <a href="http://www.my-sisters-house.org/getting-help/resources/" target="_blank"><img src={Card11} class="image-card"/> </a>
   
                    </div>

              

            </div>

            <div id="resource-2" class="resouce-section">
                <div>
                    <h2 class="resource-title"> <img src={Cow}/>Your Campus Support Network</h2>
                    <p class="resource-section-sub-text">Access counseling, legal aid, health services, and more, all within your community. Empower yourself with these local resources designed to uplift and protect.</p>


                </div>

                <div class="resource-images">
                       

                        <a href="https://wrrc.ucdavis.edu/" target="_blank"><img src={Card1} class="image-card"/> </a>
                        <a href="https://www.daviswomeninbusiness.com/" target="_blank"><img src={Card2} class="image-card"/> </a>
                        <a href="https://www.instagram.com/girlgainsatucd/?hl=en" target="_blank"><img src={Card3} class="image-card"/> </a>
                        <a href="https://www.hercampus.com/school/ucd/" target="_blank"><img src={Card4} class="image-card"/> </a>
                        <a href="https://aggielife.ucdavis.edu/girlupatucd/leadership-team/" target="_blank"><img src={Card5} class="image-card"/> </a>
                        <a href="https://wrrc.ucdavis.edu/programs/academic/stem-4-girls" target="_blank"><img src={Card6} class="image-card"/> </a>
               </div>

                
     
                

            </div>

            <div id="article-section">
                <h2 class="resource-title"> <img src={Article}/> Articles on Women's Safety</h2>
                <p class="resource-section-sub-text">Explore insightful articles focused on women's safety, written by experts and advocates.
Stay informed and proactive with tips, stories, and advice tailored to your well-being.</p>

                
                
                <div id="article-card-container">



                    <div class="article-card">

                        <h2 class="article-section-title">Traveling Safely Tips</h2>


                        <a href="https://www.teenvogue.com/story/10-safe-travel-tips-spring-break" target="_blank" class="article-link">
                        <div class="article-info">

                            <h4 class="article-name">10 Easy Ways to Stay Safe During Spring Break</h4>
                            <p class="author">by Dara Adeeyo (Tenn Vouge)</p>

                        </div>
                        </a>

                        <a href="https://www.nytimes.com/2019/03/26/travel/safety-tips-female-solo-travel.html#:~:text=Don't%20be%20scared%20to%20be%20alone%20%E2%80%94%20embrace%20it&text=This%20construct%20desperately%20needs%20to,so%20your%20mobile%20works%20internationally." target="_blank" class="article-link">
                        <div class="article-info">

                            <h4 class="article-name">'Don't Succumb to the Fear': Women Share Travel Safety Tips</h4>
                            <p class="author">by The New York Times</p>

                        </div>
                        </a>

                        <a href="https://www.buzzfeed.com/michelelbird/safety-travel-tips-for-women" target="_blank" class="article-link">
                        <div class="article-info article-bottom">

                            <h4 class="article-name">Women Who Travel Alone Are Sharing Safety Hacks For Other Women, And These Are Honestly So Smart</h4>
                            <p class="author">by Kelsie Hammond (Buzzfeed)</p>

                        </div>
                        </a>

                    </div>





                <div class="article-card">

                    <h2 class="article-section-title">Safety Tips</h2>


                    <a href="https://www.cosmopolitan.com/lifestyle/advice/a4364/safety-tips-every-woman-should-know/" target="_blank" class="article-link">
                    <div class="article-info">

                        <h4 class="article-name">21 Potentially Life-Saving Safety Tips That Every Woman Should Know</h4>
                        <p class="author">by Emma Sarran Webster (Cosmopolitan)</p>

                    </div>
                    </a>

                    <a href="https://www.buzzfeed.com/angelicaamartinez/women-first-date-safety-tips" target="_blank" class="article-link">
                    <div class="article-info">

                        <h4 class="article-name">"That's A Red Flag And Instant Block From Me": Women Are Sharing The First-Date Safety Tips That Just Might Save Your Life</h4>
                        <p class="author">by Angelica Martinez (Buzzfeed)</p>

                    </div>
                    </a>

                    <a href="https://www.buzzfeed.com/michelelbird/safety-travel-tips-for-women" target="_blank" class="article-link">
                    <div class="article-info article-bottom">

                        <h4 class="article-name">Women Who Travel Alone Are Sharing Safety Hacks For Other Women, And These Are Honestly So Smart</h4>
                        <p class="author">by Michele Bird (Buzzfeed)</p>

                    </div>
                    </a>

                </div>



                <div class="article-card">

                        <h2 class="article-section-title">Research & Opinion Pieces</h2>


                        <a href="https://www.tandfonline.com/doi/full/10.1080/21650020.2022.2027268" target="_blank" class="article-link">
                        <div class="article-info">

                            <h4 class="article-name">Safety and security of women and girls in public transport</h4>
                            <p class="author">by Deribe Kaske Kacharo</p>

                        </div>
                        </a>

                        <a href="https://news.un.org/en/story/2022/03/1114472" target="_blank" class="article-link">
                        <div class="article-info">

                            <h4 class="article-name">Women and girls deserve to live without violence in 'safety, dignity and freedom'</h4>
                            <p class="author">by United Nations</p>

                        </div>
                        </a>

                        <a href="https://www.cosmopolitan.com/uk/reports/a45625986/womens-curfew-winter-dark/" target="_blank" class="article-link">
                        <div class="article-info article-bottom">

                            <h4 class="article-name">'Cosy season is here - and with it the return of women's self-imposed curfews'</h4>
                            <p class="author">by Amber O'Connor (Cosmopolitan)</p>

                        </div>
                        </a>

                        </div>

        </div>


    </div>

    <div id="data-link">
            <h2 class="resource-title"> <img src={DataLink}/> Data Visualization Hub</h2>
            <p class="resource-section-sub-text">Explore data on safety statistics, resource utilization, and more, all designed to inform and empower you.</p>

            <a href='/dataViz' target="_blank" id="data-card"><img src={DataCard} class="image-card"/> </a>



    </div>

                

            


        </div>

       
       
       
       
 </div>

       
      
      
    )
}

// export default Home;