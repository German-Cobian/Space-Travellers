import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Mission from './Mission';
import { fetchMissions } from '../redux/missionsReducer';

const MissionsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMissions(dispatch)
  }, []);

  const missionsStore = useSelector((store) => Object.values(store.missionsReducer.missions));
  
  return (
    <div>
      <table>
        <thead className="d-flex flex-row justify-content-center">
          <tr>
            <th className="px-5">Mission</th>
            <th className="px-5">Description</th>
            <th className="px-5">Status</th>
            <th className="px-5">Join/Leave Mission</th>
          </tr>
        </thead>
        <tbody>
          {
            missionsStore.map((mission)=>(
              <Mission 
              key={mission.mission_id}
              id={mission.mission_id}
              mission_name ={mission.mission_name}
              description = {mission.description}
              status={mission.status}

              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MissionsContainer; 