import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved } from '../redux/rocketsReducer';

const Rocket = (props) => {
  const { id, flickr_images, rocket_name, description, reserved = false, } = props

  const dispatch = useDispatch();

  const newReservation = () => {
    dispatch(setReserved(id));
  };


  return (
    <div key={id} className="d-flex flex-row justify-content-center">
      <div>
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div>
        <h5 className="pr-5">{rocket_name}</h5>
        <span>{reserved}</span>
        <p className="px-5">{description}</p>
        <button type="button" onClick={newReservation} className="btn btn-primary">Reserve Rocket</button>
      </div>
    </div>
  )
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
};

export default Rocket;