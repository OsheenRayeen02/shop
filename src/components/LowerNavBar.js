
import upperLine from '../images/upperLine.png';
import { useState } from 'react';
function LowerNavBar() {
    const [showProductsSubMenu, setShowProductsSubMenu] = useState(false);
    const toggleProductsSubMenu = () => {
        setShowProductsSubMenu(!showProductsSubMenu);
    };

    const [wishCount, setWishCount] = useState('0');

    const navbar = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        {
            name: 'OUR PRODUCTS', id: 'product', child: [
                { name: 'PRODUCT 1', id: 'p1' },
                { name: 'PRODUCT 2', id: 'p2' },
                { name: 'PRODUCT 3', id: 'p3' },
                { name: 'PRODUCT 4', id: 'p4' },
            ]
        },
        { name: 'CONTACT US', id: 'contect' },
    ];
    return (
        <div className='LowerNavBar'>
            <div className='LogoBox'>
                <div className='ShopKartHeading'>
                    <a href='/'>ShopKart</a>
                </div>
                <div className='BagBox dpFlex'>
                    <a href='/'>WISHLIST ({wishCount})</a>
                    <a href='/'>BAG ({wishCount})</a>
                </div>
            </div>
            <div className='UnderLine'>
                <img src={upperLine} alt='line' />
            </div>
            <div className='TNItems dpFlex'>
                {navbar.map((item) => (
                    <div className='TopNavItems'
                        key={item.id}
                        onMouseEnter={item.child ? toggleProductsSubMenu : null}
                        onMouseLeave={item.child ? toggleProductsSubMenu : null}
                    >
                        <a href='/'>{item.name}</a>
                        {item.child && showProductsSubMenu && (
                            <div className='SubMenu'>
                                {item.child.map((subItem) => (
                                    <div key={subItem.id}>
                                        <a href='/'>{subItem.name}</a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LowerNavBar;