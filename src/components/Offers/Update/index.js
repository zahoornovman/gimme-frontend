import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2 } from '../../../styles/MasterStyles';
import { ContainerUpdateOffer } from './styles';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateOffer() {
  const access_key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NDIyMDI1LCJpYXQiOjE2NzU5OTAwMjUsImp0aSI6IjMxNTY4Y2NlNWU2MjQ1OTk5ZTFmYjUwOGQ4NDA0YjRkIiwidXNlcl9pZCI6MX0.4f-UVFUkXzXnaiNiLxQ6Xx6D60XNND-MaljVWQzzr-o';
  const [offer, setOffer] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    condition: '',
    wants_for_this_item: '',
    author: '',
    location: '',
    created_time: '',
    updated_time: '',
    tag_title: '',
    images: [],
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await fetch(`http://127.0.0.1:8000/backend/api/haves/${id}/`, {
        headers: {
          Authorization: `Bearer ${access_key}`,
        },
      });
      const apiData = await response.json();
      setOffer(apiData);
      setFormData({
        title: apiData.title,
        description: apiData.description,
        condition: apiData.condition,
        wants_for_this_item: apiData.wants_for_this_item,
        author: apiData.author.user.username,
        location: apiData.author.location,
        created_time: apiData.created_time,
        updated_time: apiData.updated_time,
        tag_title: apiData.tags[0].title,
        images: apiData.images,
      });
    };
    fetchOffer();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/backend/api/haves/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_key}`,
      },
      body: JSON.stringify(formData),
    });
    const apiData = await response.json();
    console.log(apiData);
    navigate(`/offers/${id}`);
  };

  if (!offer) {
    return <p>Loading...</p>;
  }
  return (
    <ContainerUpdateOffer>
      <Header></Header>
      <div className="any">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
          <label htmlFor="condition">Condition:</label>
          <input type="text" id="condition" name="condition" value={formData.condition} onChange={handleChange} />
          <label htmlFor="wants_for_this_item">Wants for this item:</label>
          <input
            type="text"
            id="wants_for_this_item"
            name="wants_for_this_item"
            value={formData.wants_for_this_item}
            onChange={handleChange}
          />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} disabled />
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} disabled />
          <label htmlFor="created_time">Created Time:</label>
          <input
            type="text"
            id="created_time"
            name="created_time"
            value={formData.created_time}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="updated_time">Updated Time:</label>
          <input
            type="text"
            id="updated_time"
            name="updated_time"
            value={formData.updated_time}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="tag_title">Tag Title:</label>
          <input type="text" id="tag_title" name="tag_title" value={formData.tag_title} onChange={handleChange} />
          <label htmlFor="images">Images:</label>
          {formData.images.map((image) => (
            <img src={image.image} alt={image.id} key={image.id} />
          ))}
          <button type="submit">Update Offer</button>
        </form>
      </div>
      <FooterElement></FooterElement>
    </ContainerUpdateOffer>
  );
}

export default UpdateOffer;
