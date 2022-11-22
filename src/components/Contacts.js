import React from 'react';
import './Contacts.css'
import telImg from '../images/telegram_logo_icon_134592.png';
import instImg from '../images/instagram_ig_logo_icon_181651.png';
import vkImg from '../images/vk_logo_icon_134603.png';
import viberImg from '../images/viber_logo_icon_154495.png';
function Contacts (){
    return(
        <div className='contacts'>
            <div className="figur"></div>
            <div className="contacts-wrapp">
                <div className="contacts-title">Contacts</div>
                <div className="contacts-container">
                    <div className="leftSide-contact">
                        <p className="shopName">We are waiting for you in Godictus</p>
                        <p className="phone-number">+375(25)335-45-87</p>
                        <p className="phone-number">+375(29)584-23-44</p>
                        <p className="timeWork">Mon - Sat: from 9 to 21, Sun: from 10 to 20</p>
                    </div>
                    <div className="rightSide-contact">
                        <p className="social-link"><a href="#"><img src={telImg} alt="" /></a></p>
                        <p className="social-link"><a href="#"><img src={instImg} alt="" /></a></p>
                        <p className="social-link"><a href="#"><img src={vkImg} alt="" /></a></p>
                        <p className="social-link"><a href="#"><img src={viberImg} alt="" /></a></p>
    
                    </div>
                </div>
            </div>
            <div className='location'>
                <div className='mapWrrap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.8037270997315!2d27.504787815733724!3d53.932359380105964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc5131458c58f%3A0xcbbdf4b1d64ae89b!2z0L_RgC3Rgi4g0J_QvtCx0LXQtNC40YLQtdC70LXQuSwg0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1667374894675!5m2!1sru!2sby" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts;