import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { ContainerMyOffers } from './styles';
import { Header2, TextButton } from '../../../styles/MasterStyles';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../baseurl';
import { OfferCard } from '../../../elements/OfferCard/offerCard';
import { loading } from '../../../elements/Statements/statements';

function MyOffers() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [myOffers, setMyOffers] = useState("")

  useEffect(() => {
    setMyOffers("")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.acces}`);



    var requestOptions = {
      method: 'GET',
      headers: myHeaders,      
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/haves/me/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.length === 0) {
          setMyOffers("noOffersPlaced")
        }
        else {
          setMyOffers(result)
        }

      })
      .catch(() => {
        setMyOffers("error")
      });
  }, [])


  return (
    <ContainerMyOffers>
      <Header></Header>
      <div className="any">
        {
          user.first_name === "NoNa"
            ?
            <div>Please sign in to access your offers. 😋</div>
            :
            myOffers === ""
              ?
              <div>{loading}</div>
              :
              myOffers === "noOffersPlaced"
                ?
                <>
                  <div>You haven't placed an offer yet!</div>
                  <TextButton
                    onClick={() => navigate("/offers/new")}
                  >Place an offer</TextButton>
                </>
                :
                myOffers === "error"
                  ?
                  <div>
                    Your offers can't be displayed at the moment. We apologise for the inconvenience. 😒 Please try later again.
                  </div>
                  :
                  <>
                    <Header2>My offers</Header2>
                    <div className="objects">
                      {myOffers.map((obj) => (
                        <OfferCard key={obj.id} obj={obj} />                        
                      ))}
                    </div>
                  </>
        }


      </div>

      <FooterElement></FooterElement>
    </ContainerMyOffers>
  );
}

export default MyOffers;
