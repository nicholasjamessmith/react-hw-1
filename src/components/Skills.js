const Skills = (props) => {
  return <>
    <div className="rightComponent">
      <h3 className="color3"><a href id="skills">Skills</a></h3>
        <ul className="SkillsList">
          <li><span className="bold">Languages</span>
            <div>HTML, CSS, JavaScript, Python</div></li>
          <li><span className="bold">Libraries and Frameworks</span></li>
            <div>jQuery, JSON, ExpressJS, React, Flask, FastAPI</div>
          <li><span className="bold">Databases</span></li>
            <div>MongoDB, PostgreSQL</div>
        </ul>
    </div>
  </>
}

export default Skills