import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux_toolkit/slice";
import "../styles/Dashboard.css";
import Loader from "./Loader";
import EmployerBanner from "./EmployerBanner";

const Dashboard = () => {
    const dispatch = useDispatch();

    const { data, loading } = useSelector((state) => state?.ringerApp);
    const searchData = useSelector((state) => state?.ringerApp?.searchedJobData)
    const ringerData = Array.isArray(searchData) && searchData.length > 0 ? searchData : data

    console.log(ringerData, ringerData)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    console.log(data, "data");

    const handleApplyButton = () => {
        alert("Applied Successfully")
    }

    return (
        <>
            <EmployerBanner />
            {loading ? (
                <Loader />
            ) : (
                <div className="dashboard">
                    {ringerData?.map((job) => (
                        <div key={job.id} className="job-card">
                            <div className="job-header">
                                <h2 className="job-title">{job.job_category}</h2>
                                <p className="job-company">{job.company}</p>
                            </div>
                            <div className="job-body">
                                <p className="job-location">
                                    {job.location} | {job.is_remote_work ? "Remote" : "On-site"}
                                </p>
                                <p className="job-description">{job.description}</p>
                                <p className="job-details">
                                    <strong>Employment Type:</strong> {job.employment_type}
                                </p>
                                <p className="job-details">
                                    <strong>Salary:</strong> $
                                    {job.salary_from.toLocaleString()} - $
                                    {job.salary_to.toLocaleString()}
                                </p>
                                <p className="job-qualifications-title">Qualifications:</p>
                                <ul className="job-qualifications">
                                    {JSON.parse(job.qualifications).map((qualification, index) => (
                                        <li key={index}>{qualification}</li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={handleApplyButton} className="apply-button">Apply Now</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Dashboard;
