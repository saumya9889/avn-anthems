
import React, { MouseEvent } from 'react'
import Form from '../Form/Form'
import blueBirds from '../../assets/birds 08.png'
import './MainPage.css'

type MainPageProps = {
  selectedCnt: string,
  selectedType: string,
  fetchResults: (event: MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => void
}

function MainPage( props: MainPageProps ) {

  return (
    <>
      <section className='info-container'>
        <img className='blueBirds-image' src={blueBirds} alt='bird'></img>
        <Form selectedCnt={props.selectedCnt}  selectedType={props.selectedType} fetchResults={props.fetchResults}/>
      </section>
      <footer className='about-us'>
        <span>
        <h4>Saumya Mishra</h4>  
        <a href="https://github.com/saumya9889">GitHub</a>
        <a href="https://www.linkedin.com/in/saumya-mishra-390652176/">Linkedin</a>
        </span>
        
      </footer>
    </>
  )
}

export default MainPage;