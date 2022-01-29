import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missionsReducer';


const Mission = (props) => {
  const  { mission_id, mission_name, description, status, } = props; 

  const dispatch = useDispatch();

  const join = () => {
    dispatch(joinMission(mission_id));
  };

  const leave = () => {
    dispatch(leaveMission(mission_id));
  };

  return (
    <div>
      <tr key={mission_id} className="d-flex flex-row justify-content-center">
        <td className="pr-5">{mission_name}</td>
        <td className="px-5">{description}</td>
        <td>
          <span className={status === true ? 'btn-info span-mission' : 'btn-secondary span-mission'}>
            { status === true ? 'Active member' : 'NOT A MEMBER'}
          </span>
        </td>
        <td className="align-middle text-center">
          <button type="button" className={status === true ? 'btn btn-outline-danger mission-button' : 'btn btn-outline-dark mission-button'} onClick={status === true ? leave : join}>
            {status === true ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
      </tr>
    </div>
  )
};

Mission.propTypes = {
  mission_id: PropTypes.number.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
