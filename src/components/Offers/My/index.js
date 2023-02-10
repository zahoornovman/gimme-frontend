import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { ContainerMyOffers } from './styles';
import { TextButton } from '../../../styles/MasterStyles';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function MyOffers() {
  const navigate = useNavigate();
  const access_key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NDIyMDI1LCJpYXQiOjE2NzU5OTAwMjUsImp0aSI6IjMxNTY4Y2NlNWU2MjQ1OTk5ZTFmYjUwOGQ4NDA0YjRkIiwidXNlcl9pZCI6MX0.4f-UVFUkXzXnaiNiLxQ6Xx6D60XNND-MaljVWQzzr-o';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/backend/api/haves/me/', {
        headers: {
          Authorization: `Bearer ${access_key}`,
        },
      });
      const apiData = await response.json();
      setData(apiData);
    };

    fetchData();
  }, []);
  return (
    <ContainerMyOffers>
      <Header></Header>
      <div className="any">
        <div>
          {data.map((offer) => (
            <div key={offer.id}>
              <h2>{offer.title}</h2>
              <p>Author: {offer.author.user.username}</p>
              <p>Location: {offer.author.location}</p>
              <p>Description: {offer.description}</p>
              <p>Condition: {offer.condition}</p>
              <p>Wants for this item: {offer.wants_for_this_item}</p>
              <p>Created at: {offer.created_time}</p>
              <p>Updated at: {offer.updated_time}</p>
              <p>Tag Title: {offer.tags[0].title}</p>
              {offer.images.map((image) => (
                <img key={image.id} src={image.images} alt={offer.title} />
              ))}
              <Link to={`/offers/${offer.id}`}>
                <button>View Offer</button>
              </Link>
              <TextButton onClick={() => navigate(`/offers/${offer.id}`)}>One Offer</TextButton>
            </div>
          ))}
        </div>
      </div>

      <FooterElement></FooterElement>
    </ContainerMyOffers>
  );
}

export default MyOffers;
