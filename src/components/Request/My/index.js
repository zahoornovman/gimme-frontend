import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyRequests } from "./styles";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../../baseurl";
import { RequestCard } from "../../../elements/RequestCard/requestCard";

function MyRequests() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [myRequests, setMyRequests] = useState("")

  useEffect(() => {
    setMyRequests("")

    var myHeaders = new Headers();
    //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NTQ0MzY0LCJpYXQiOjE2NzYxMTIzNjQsImp0aSI6IjA4ZDgzZDZiYzJmMTQyNzQ5YjZiOTA1MWJkZjgyYWNhIiwidXNlcl9pZCI6Mn0.0WNLR973Gggaiwl4h0KAgmEuq0RRLUHHI9YwlCHvCsk");
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    //var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      //body: formdata,
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/wants/me/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.length === 0) {
          setMyRequests("noRequestsPlaced")
        }
        else {
          setMyRequests(result)
        }

      })
      .catch(error => {
        console.log('error', error)
        setMyRequests("error")
      });
  }, [])

  return (
    <ContainerMyRequests>
      <Header></Header>
      <div
        className="requestContent"
      >
        {
          user.first_name === "NoNa"
            ?
            <div>Please sign in to access your requests. 😋</div>
            :
            myRequests === ""
              ?
              <div>Loading. Please be patient. 😊</div>
              :
              myRequests === "noRequestsPlaced"
                ?
                <>
                  <div>You haven't placed a request yet!</div>
                  <TextButton
                    onClick={() => navigate("/requests/new")}
                  >Place a request</TextButton>
                </>
                :
                myRequests === "error"
                  ?
                  <div>
                    Your requests can't be displayed at the moment. We apologise for the inconvenience. 😒 Please try later again.
                  </div>
                  :
                  <>
                  <Header2>My requests</Header2>
                  <div className="objects">
                      {myRequests.map((obj) => (
                        <RequestCard key={obj.id} obj={obj} />                        
                      ))}
                    </div>
                  </>

        }
      </div>

      <FooterElement></FooterElement>
    </ContainerMyRequests>
  );
}

export default MyRequests;
