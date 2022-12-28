import { locationLogo } from "../../../../assets/GeneralLogos";
import GetDate from "../../../API/GetDate";
import "./AboutMe.scss";

const Title = () => {
    return (
        <h1 id='home'>
            &#x1F464;&nbsp;&nbsp;SEAN KIM
        </h1>   
    )
}

const Description = () => {
    return (
        <div className = 'about-me-description'>
            <h4><img src={locationLogo} alt=""/>&nbsp;Toronto, ON, Canada</h4>
            <h5><GetDate/></h5>
            <p>
                Welcome!
                I am a second year Computer Engineering Student at the University
                of Toronto with a huge interest in the field of Web Development and Software Engineering. 
                Furthermore, my interest towards Artificial Intelligence has increased over last few months.
                I am currently planning to pursue a minor in it and considering my career in AI. <br/><br/>

                I am a Frontend Developer at UofTHacks
                to develop the hackathon's website and dashboard which will be visited by hundreds of applicants. 
                Moreover, I am involved in the University of Toronto Freelencers' Organization to develop websites/softwares for the clients within UofT. 
                I am also a Webmaster Executive at Skule Commuter Directorship, 
                which is a community to support commuter students in the Faculty of Applied Science and Engineering.
                More details are available on the Experiences section.
            </p>
        </div>
    )
}

const AboutMeBox = (props) => {
    return (
        <div className = 'about-me'>
            {props.children}
        </div>
    );
}

const AboutMe = () => {
    return (
        <AboutMeBox>
            <Title/>
            <Description/>
        </AboutMeBox>
    );
}

export default AboutMe;