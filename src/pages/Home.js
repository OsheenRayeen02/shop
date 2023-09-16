import NewProducts from '../components/NewProducts.js';
import Footer from '../components/Footer';
import NavBG from '../images/Rectangle.png';
import TopNavBar from '../components/TopNavBar.js'
import LowerNavBar from '../components/LowerNavBar';
import BannerBox from '../components/BannerBox';
function Home() {
    const divStyle = {
        backgroundImage: `url(${NavBG})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
    };
    return (
        <>
            <div className='TOP' style={divStyle}>
                <TopNavBar />
                <LowerNavBar />
                <BannerBox />
            </div>
            <NewProducts />
            <Footer />
        </>
    );
}

export default Home;