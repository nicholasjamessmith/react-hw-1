//the component funtion: "const 'ComponentName' = (props) => {
const Footer = (props) => {
//the compononent's returned JSX
  return <><div className="Footer">
    <div className="footerWrapper">
      <div className="row">
        <div className="column">
          <div className="blue-column"><b>Labs</b>
            <ul className="footerList">
              <li>Lab 1</li>
              <li>Lab 2</li>
              <li>Lab 3</li>
              <li>Lab 4</li>
          </ul>
          </div>
        </div>
        <div className="column">
          <div className="green-column"><b>Homework</b>
            <ul className="footerList">
              <li>Homework 1</li>
              <li>Homeworl 2</li>
              <li>Homework 3</li>
              <li>Homework 4</li>
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