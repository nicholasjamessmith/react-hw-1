//the component funtion: "const 'ComponentName' = (props) => {
const Footer = (props) => {
  //the compononent's returned JSX
  return <>
    <div className="Footer">
      <h3 className="color3"><a id="contact">Contact</a></h3>
      <div className="footerWrapper">
        <div className="row">
          <div className="column">
            <div className="blue-column">
              <ul className="footerList">
                <li><a href="https://www.linkedin.com/in/njsmith6/" target="_blank" rel="noreferrer"><img className="logo"src="LI-Logo.png" alt="Linkedin logo" /></a></li>
                <li><a href="https://github.com/nicholasjamessmith" target="_blank" rel="noreferrer"><img className= "logo" src="GitHub_Logo_White.png" alt="Github text logo" /></a></li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="green-column">
              <ul className="footerList">
                <li><a href="mailto:njsmith6@gmail.com">njsmith6@gmail.com</a></li>
                <li><a href="tel:+16315667808">(631) 566-7808</a></li>

                {/*<li>Homework 3</li>
              <li>Homework 4</li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

//export the component: "export default 'ComponentName'
export default Footer