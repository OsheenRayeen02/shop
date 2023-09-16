import frontImg from '../images/frontImg.png';
import backImg from '../images/backImg.png';
import star4 from '../images/Star 4.png';
function BannerBox() {
    return (
        <div className='BannerBox' >
            <div className='BannerLeft'>
                <div className='BannerFont'>
                    <h2 id='Fresh'>Fresh</h2>
                    <h2 id='H2022'>2022</h2>
                    <h2 id='Look'>Look</h2>
                </div>
                <div className='underlineImg'>
                    <span className='StarLine'></span>
                    <img src={star4} alt='star' />
                </div>
                <button id='seeMore'><a href='/'>See more</a></button>
            </div>
            <div className='BannerImages'>
                <div className='BackImg'>
                    <img src={backImg} alt='img' />
                </div>
                <div className='FrontImg'>
                    <img src={frontImg} alt='img' />
                </div>
                <div className='OrangeBox'>
                    <div className='OrangeBoxText'>
                        <h6>Oregon jacket</h6>
                        <h6 id="OBT-Price">$124</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerBox;