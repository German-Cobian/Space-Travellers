import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const  { mission_id, mission_name, description, status = false, } = props; 

  return (
    <div>
      <tr key={mission_id} className="d-flex flex-row justify-content-center">
        <th className="pr-5">{mission_name}</th>
        <th className="px-5">{description}</th>
        <th className="px-5">{status}</th>
      </tr>
    </div>
  )
};

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
