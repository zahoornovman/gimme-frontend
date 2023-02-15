import { Footer } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import FooterLinks from '../FooterLinks';
import gimme_logo from '../../images/gimme_logo.png';
import facebook from '../../images/facebook.svg';
import tiktok from '../../images/tiktok.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';

let date = new Date();
date = date.getYear() + 1900;

function FooterElement() {
  const navigate = useNavigate();
  let path = window.location.pathname;
  return (
    <Footer>
      <img className='logo' src={gimme_logo} alt="" />
      <div className='admin'>
      <a href="">About us</a>
      <a href="">Contact</a>
      <a href="">FAQ</a>
      <a href="">Terms of Use</a>
      </div>
      <div className='socialIcons'>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={tiktok} alt="" />
      </div>
    </Footer>
  );
}

export default FooterElement;
