import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved, setCancelation } from '../redux/rocketsReducer';

const Rocket = (props) => {
  const { id, flickr_images, rocket_name, description, reserved, } = props

  const dispatch = useDispatch();

  const newReservation = () => {
    dispatch(setReserved(id));
  };

  const cancelReservation = () => {
    dispatch(setCancelation(id));
  };


  return (
    <div key={id} className="d-flex flex-row justify-content-center">
      <div>
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div>
        <h5 className="pr-5">{rocket_name}</h5>
        <span>{reserved}</span>
        <span className={reserved === true ? 'btn btn-primary btn-sm' : 'button-reserved'}>
          { reserved === true ? 'Reserved' : ''}
        </span>
        <p className="px-5">{description}</p>
        <button type="button" className={reserved === true ? 'btn btn-dark' : 'btn btn-primary'} onClick={reserved === true ? cancelReservation : newReservation}>{reserved === true ? 'Cancel Booking' : 'Reserve Rocket'}</button>
      </div>

    </div>
  )
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;