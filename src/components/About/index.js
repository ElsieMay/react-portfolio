import AnimatedLetters from '../AnimatedLetters'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <div className="container about-page">
      <div className="text-area">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a junior full stack developer with a background in visual and
          fashion design. I am a passionate creative, driven by fairness and
          equity, with respect for individual expression and authentic
          perspectives. Using strategy, discovery and collaboration, I am driven
          to find efficient design solutions.
        </p>
        <p>
          I am currently seeking a developer position where I can learn, grow
          and contribute as best possible.
        </p>
        <Link
          to="../../assets/images/ELSIE LAWRIE RESUME.pdf"
          target="_blank"
          className="flat-button"
          download
        >
          DOWNLOAD MY RESUME
        </Link>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#e04451" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#c66f40" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#2a44f2" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#84d465" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#a040d4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
