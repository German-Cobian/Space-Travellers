import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rocket from './Rocket';
import { fetchRockets } from '../redux/rocketsReducer';



const RocketsContainer = () => {

  const rockets = [{
    id: 1,
    rocket_name: "first mission",
    description: "moon", 
    status: false
  },{
    id: 2,
    rocket_name: "second mission",
    description: "mars", 
    status: true,
  },];

  const dispatch = useDispatch();

  useEffect(() => {
    fetchRockets(dispatch)
  }, []);

  // const rocketsStore = useSelector((store) => Object.values(store.rocketsReducer.rockets));
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);
  
  return (
    <div>
      {
        rocketsStore.map((rocket)=>(
          <Rocket 
          key={rocket.id}
          flickr_images={rocket.flickr_images}
          rocket_name ={rocket.rocket_name}
          description = {rocket.description}
          />
        ))
      }
    </div>
  )
}

export default RocketsContainer; 