import { Footer } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import FooterLinks from '../FooterLinks';

let date = new Date();
date = date.getYear() + 1900;

function FooterElement() {
  const navigate = useNavigate();
  let path = window.location.pathname;
  return (
    <Footer>
      <a href="">About us</a>
      <a href="">Contact</a>
      <a href="">FAQ</a>
      <a href="">Terms of Use</a>
    </Footer>
  );
}

export default FooterElement;
