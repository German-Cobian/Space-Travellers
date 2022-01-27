import Mission from './Mission';

const MissionsContainer = () => {
  const missions = [
    {
      mission_id: 0,
      mission_name: "To the Moon",
      description: "Just around the corner", 
      status: false
    },{
      mission_id: 1,
      mission_name: "To Mars",
      description: "A longer journey", 
      status: true,
    },
  ];

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
            missions.map((mission)=>(
              <Mission 
              key={mission.mission_id}
              id={mission.mission_id}
              mission_name ={ mission.mission_name}
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