import "../styles/header.css";
import logo from "../asset/Logo EF Web.png";  

function header() {
    return (
      <div>
        <div className="header">
          <img
            className="logo"
            src={logo}
            alt="FCINQ"
          />

         <h3 className="">
             email signature builder&nbsp;
          </h3>
        </div>
      </div>
    );
  }
  
  export default header;