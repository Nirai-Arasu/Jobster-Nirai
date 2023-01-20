import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment/moment';

import { deleteJob, editValue } from '../features/job/jobSlice';

const Jobs = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo text={jobLocation} icon={<FaLocationArrow />} />
          <JobInfo text={date} icon={<FaBriefcase />} />
          <JobInfo text={jobType} icon={<FaCalendarAlt />} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  editValue({
                    editJobId: _id,
                    company,
                    position,
                    status,
                    jobType,
                    jobLocation,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Jobs;
