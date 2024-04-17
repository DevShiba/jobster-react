import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper className="job-info">
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
