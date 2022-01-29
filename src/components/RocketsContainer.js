import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Rocket from './Rocket';
import { fetchRockets } from '../redux/rocketsReducer';



const RocketsContainer = () => {

  // const rocketsStore = useSelector((store) => Object.values(store.rocketsReducer.rockets));
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!rocketsStore.length) {
    fetchRockets(dispatch);
    }
  }, []);

  
  
  return (
    <div>
      {
        rocketsStore.map((rocket) => (
          <Rocket 
          key={rocket.id}
          id={rocket.id}
          flickr_images={rocket.flickr_images}
          rocket_name ={rocket.rocket_name}
          description = {rocket.description}
          reserved = {rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default RocketsContainer; 