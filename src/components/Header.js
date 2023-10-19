const Header = (props) => {
  return <>
    <div className="Header">
    <ul className="Header">
      <li className="nav"><a href="#about">About</a></li>
      <li className="nav"><a href="#skills">Skills</a></li>
      <li className="nav"><a href="#projects">Projects</a></li>
        <li className="nav">Resume</li>
        <li className="nav"><a href="#contact">Contact</a></li>
      {/*<li className="nav">
        <a href="https://github.com/nicholasjamessmith">Github</a>
      </li>
      <li className="nav"><a href="https://www.linkedin.com/in/njsmith6/">Linkedin</a>
      </li>*/}
      </ul>
    </div>
  </>
}

export default Header