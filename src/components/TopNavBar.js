import truck from '../images/truck.png';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
function TopNavBar() {
    return (
        <nav className="dpFlex TopNavBar">
            <div className="dpFlex TNB TNB-left">
                <a href="/"><li><img src={truck} alt='img' />Free Delivery</li></a>
                <a href="/"><li>Return Policy</li></a>
            </div>
            <div className="dpFlex TNB TNB-right">
                <a href="/"><li>Follow Us</li></a>
                <a href="/"><li>Login</li></a>
                <div className="dpFlex TNB-icons">
                    <a href="/"><li><img src={fb} alt='img' /></li></a>
                    <a href="/"><li><img src={linkedin} alt='img' /></li></a>
                    <a href="/"><li><img src={twitter} alt='img' /></li></a>
                    <a href="/"><li><img src={insta} alt='img' /></li></a>
                </div>
            </div>
        </nav>
    );
}

export default TopNavBar;