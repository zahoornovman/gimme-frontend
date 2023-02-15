import { Footer } from './styles';
import gimme_logo from '../../images/gimme_logo.png';
import facebook from '../../images/facebook.svg';
import tiktok from '../../images/tiktok.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import { useNavigate } from 'react-router-dom';

let date = new Date();
date = date.getYear() + 1900;

function FooterElement() {
  const navigate = useNavigate()
  return (
    <Footer>
      <img 
      onClick={()=> navigate("/")}
      className='logo'
      src={gimme_logo} alt="" />
      <div className='admin'>
        <a href="">About us</a>
        <a href="">Contact</a>
        <a href="">FAQ</a>
        <a href="">Terms of Use</a>
      </div>
      <div className='socialIcons'>
        <a
          title="To access Facebook."
          href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="" /></a>
        <a
          title="To access Tweets."
          href="https://twitter.com/" target="_blank"> <img src={twitter} alt="" /></a>
        <a
          title="To access Instagram."
          href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="" /></a>
        <a
          title="To access TikTok."
          href="https://www.tiktok.com/" target="_blank"><img src={tiktok} alt="" /></a>
      </div>
    </Footer>
  );
}

export default FooterElement;
