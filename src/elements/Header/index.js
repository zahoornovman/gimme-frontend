import img_menu from "../../images/menu.svg"
import { TextButton, Header1 } from "../../styles/MasterStyles";
import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

let date = new Date
let hour = date.getHours()

function Header() {
  const navigate = useNavigate()
    return ( <HeaderContainer>
      <img src={img_menu}/>
      <TextButton
        onClick={()=>navigate("/signin")}
      >Sign in</TextButton>
      <TextButton>Sign up</TextButton>
      <TextButton>New like</TextButton>
      <TextButton>New Offer</TextButton>
      <TextButton>My Likes</TextButton>
      <TextButton>My Offers</TextButton>
      <TextButton>Sign out</TextButton>
      <div
        className="errorHeader"
      >
        {
          hour < 12
            ?
            <Header1
              className="fontSize"
            >Good morning!</Header1>
            :
            hour < 17
              ?
              <Header1
                className="fontSize"
              >Good afternoon!</Header1>
              :
              hour < 22
                ?
                <Header1
                  className="fontSize"
                >Good evening!</Header1>
                :
                <Header1
                  className="fontSize"
                >Good night!</Header1>
        }
      </div>
    </HeaderContainer> );
}

export default Header;