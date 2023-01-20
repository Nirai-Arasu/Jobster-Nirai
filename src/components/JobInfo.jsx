import Wraper from '../assets/wrappers/JobInfo';
const JobInfo = ({ icon, text }) => {
  return (
    <Wraper>
      <span className="icon ">{icon}</span>
      <span className="text ">{text}</span>
    </Wraper>
  );
};

export default JobInfo;
