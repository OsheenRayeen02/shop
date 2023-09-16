import footerImg from '../images/footerImg.png'
function Footer() {
    const divStyle = {
        backgroundImage: `url(${footerImg})`,
        backgroundSize: 'cover',
    };
    return (
        <>
            <div className="Footer" style={divStyle}>
                <div className="footerText">
                    <div className='footerHeading'>
                        <h2>Newslleter</h2>
                        <p>Get news about articles and updates in your inbox.</p>
                    </div>
                    <div className='getInTouch'>
                        <h3>GET</h3>
                        <h4>INTOUCH</h4>
                    </div>
                </div>
                <div className="FeedbackForm" >
                    <form className="FeedForm">
                        <input type="text" placeholder="NAME" />
                        <input type="email" placeholder="EMAIL" />
                        <input type="text" placeholder="MESSAGE" />
                        <button id="sendBtn" type="Send">SEND</button>
                    </form>
                </div>
            </div>
            <div className='Copyright'>
                <p>Copyright 2022 All Right Reserved By SG</p>
            </div>
        </>
    );
}

export default Footer;
