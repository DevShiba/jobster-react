import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Wrapper>
        <Loading/> {/* CSS this later */}
      </Wrapper>
    );
  }

  if(jobs.length === 0){
    return(
        <Wrapper>
            <h2>No jobs to display...</h2>
        </Wrapper>
    )
  }

  useEffect(()=>{
    dispatch(getAllJobs());
  }, []);
  return <Wrapper>
    <h5>jobs info</h5>
    <div className="jobs">
        {jobs.map((job)=>{
            return <Job key={job._id} {...job} />
        })}
    </div>
  </Wrapper>;
};

export default JobsContainer;
