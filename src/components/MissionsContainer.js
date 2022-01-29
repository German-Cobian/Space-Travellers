import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mission from './Mission';
import { fetchMissions } from '../redux/missionsReducer';

const MissionsContainer = () => {

  // const missionsStore = useSelector((store) => Object.values(store.missionsReducer.missions));
  const missionsStore = useSelector((store) => store.missionsReducer.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsStore.length) {
      fetchMissions(dispatch);
    }
  }, []);

 

  return (
    <div>
      <table >
        <thead className="table table-bordered">
          <tr>
            <th className="col-1">Mission</th>
            <th className="col-6">Description</th>
            <th className="col2">Status</th>
            <th className="col-2">Join/Leave</th>
          </tr>
        </thead>
        <tbody>
          {
            missionsStore.map((mission)=>(
              <Mission 
              key={mission.mission_id}
              id={mission.mission_id}
              mission_id={mission.mission_id}
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