import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { TextButton } from '../../../styles/MasterStyles';
import { ContainerOneOffer } from './styles';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { lastPath } from '../../../slices/messages/messageSlice';

function OfferDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMessagedClicked = () => {
    const currentPath = window.location.pathname;
    const indexLastSlash = currentPath.lastIndexOf('/');
    const addId = currentPath.substring(indexLastSlash + 1);

    dispatch(
      lastPath({
        type: 'have',
        id: addId,
      })
    );
    navigate('/message');
  };
  const access_key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NDIyMDI1LCJpYXQiOjE2NzU5OTAwMjUsImp0aSI6IjMxNTY4Y2NlNWU2MjQ1OTk5ZTFmYjUwOGQ4NDA0YjRkIiwidXNlcl9pZCI6MX0.4f-UVFUkXzXnaiNiLxQ6Xx6D60XNND-MaljVWQzzr-o';
  const [offer, setOffer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await fetch(`http://127.0.0.1:8000/backend/api/haves/${id}/`, {
        headers: {
          Authorization: `Bearer ${access_key}`,
        },
      });
      const apiData = await response.json();
      setOffer(apiData);
    };

    fetchOffer();
  }, [id]);

  if (!offer) {
    return <p>Loading...</p>;
  }

  return (
    <ContainerOneOffer>
      <Header></Header>
      <div className="any">
        <div>
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
          <Link to={`/offers/update/${offer.id}`}>
            <button>Update Offer</button>
          </Link>
        </div>
      </div>
      <TextButton onClick={handleMessagedClicked}>Message</TextButton>
      <FooterElement></FooterElement>
    </ContainerOneOffer>
  );
}

export default OfferDetails;
