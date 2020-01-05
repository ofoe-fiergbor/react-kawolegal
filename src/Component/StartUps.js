import React from 'react'
import StartUp from './StartUp'
import SearchBar from './SearchBar'

import image1 from '../images/tutahub.jpg'
import image2 from '../images/auditer.jpeg'
import image3 from '../images/think_&_zoom.png'
import image4 from '../images/slate_&_cube.png'
import image5 from '../images/sleekjob.png'


const StartUps =()=>{
    return(
        <div>
            <SearchBar/>
            <StartUp 
                StartUpImg ={image1} 
                startUpName = 'Tutahub' 
                detail='Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.'/>
            <StartUp 
                StartUpImg ={image2} 
                startUpName = 'Auditer'
                detail='Slatecube helps job seekers develop job-relevant skills, gain work experience, and land
                well paying jobs through world-class up-skilling courses and virtual internships.'/>
            <StartUp 
                StartUpImg ={image3} 
                startUpName = 'Think and Zoom'
                detail ='Trains world class software developers in Ghana and matches them to employment opportunities'/>
            <StartUp 
                StartUpImg ={image4} 
                startUpName = 'Slastecube'
                detail='Slatecube helps job seekers develop job-relevant skills, gain work experience, and land
                well paying jobs through world-class up-skilling courses and virtual internships.'/>
            <StartUp 
                StartUpImg ={image5} 
                startUpName = 'Sleekjob'
                detail = 'Trains world class software developers in Ghana and matches them to employment opportunities'/>
        </div>
    )
}
export default StartUps