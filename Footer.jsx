import './Footer.css';
import './Tagbody.jsx';
import image_Pic from './image-removebg-preview (2).png';

function Footer() {
    const username = 'Ibrahim';
    const d = new Date();
    const company = 'SoloTechMate';

    return (
        <footer id='/footer'>
            <div className="footer-display">
                <div>
                <span>
                    <h1>{company}</h1>
                    <h4>{company} is an online platform dedicated to providing high-quality student accommodation at affordable prices. Easily compare options, consult with experts, and choose the perfect place to call home—all with convenience and confidence.</h4>
                </span>

                <span>
                    <h1>Discover</h1>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Our Services</a></li>
                </span>

                <span>
                    <h1>Company</h1>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </span>

                <span>
                    <h1>Contact</h1>
                    <nav className='contact-span-border-spach'>
                        <i className="fa-solid fa-phone"></i><li>+12 345 6789</li>
                    </nav>
                    <li>contact@username.com</li>
                </span>
                </div>

                <div>
                <span className='display-taging_ret'>
                    <nav>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-regular fa-envelope"></i></a>
                    <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </nav>
                    <nav>
                    <img src={image_Pic} />
                    </nav>
                </span>
                </div>

                <hr />

                <p>&copy; {d.getFullYear()} {company}. All Rights Reserved | Made with  <span style={{color: "red", opacity: "80%"}}>♥</span></p>
            </div>
        </footer>
    )
}

export default Footer