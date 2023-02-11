import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { ContainerMyOffers } from './styles';
import { Header2, TextButton } from '../../../styles/MasterStyles';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../baseurl';
import { OfferCard } from '../../../elements/OfferCard/offerCard';

function MyOffers() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [myOffers, setMyOffers] = useState("")

  useEffect(() => {
    setMyOffers("")
    var myHeaders = new Headers();
    //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NDg1NjQ2LCJpYXQiOjE2NzYwNTM2NDYsImp0aSI6ImJiOWMwYjczYTAwMjQ0MTc5ZDNiZjVlZDRkYTAwMTY1IiwidXNlcl9pZCI6Mn0.EtgweMDaWsCbiF524p4pVoZ_3VnfsnRoOkUvBujkYEU");
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    //var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      //body: formdata,
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
      .catch(error => {
        console.log('error', error)
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
              <div>Loading. Please be patient. 😊</div>
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
                        // <div
                        //     key={obj.id}
                        //     className="object fontSize"
                        // >
                        //     <h3>{obj.title}</h3>
                        //     {
                        //         obj.images[0]
                        //             ?
                        //             <img src={obj.images[0]} />
                        //             :
                        //             <img src={img_noPicture} />
                        //     }

                        // </div>
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
