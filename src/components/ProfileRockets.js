import React from 'react';
import { useSelector } from 'react-redux';

const ProfileRockets = () => {
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);
  const reservedRockets = rocketsStore.filter((rocket) => rocket.reserved === true);
  

  return (
    <ul className="list-group">
      {reservedRockets.map((rocket) => (
        <li className="list-group-item" key={rocket.id}>
          {rocket.rocket_name}
        </li>
      ))}
    </ul>
  );
};

export default ProfileRockets;