// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/shruti-deshmukh-a74270287/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/shutideshmukh21"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                  
                </div>
                <div id="row1" className="row">
                    © Developed By Shruti Deshmukh
                </div>
            </div>
        </footer>
    );
};

export default Footer;
