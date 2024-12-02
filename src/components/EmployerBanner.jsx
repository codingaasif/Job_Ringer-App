import React, { useEffect, useState } from "react";
import "../styles/EmployerBanner.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchJob } from "../redux_toolkit/slice";

const EmployerBanner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [searched, setSearched] = useState("")

    const { data } = useSelector((state) => state.ringerApp)

    const normalizeString = (str) => str.toLowerCase().replace(/[-\s]+/g, ' ');

    const searchedData = data.filter((f) =>
        normalizeString(f.job_category).includes(normalizeString(searched))
    );

    useEffect(() => {
        if (searchedData.length > 0) {
            dispatch(searchJob(searchedData))
        }
    }, [dispatch, searched])
    console.log(searchedData, "searchedData")

    console.log(data, "data")

    const handleRegistration = () => {
        navigate("/registration");
    };

    const handleSearchJob = () => {
        navigate("/search-jobs"); // Navigate to the search jobs page
    };

    return (
        <div className="employer-banner">
            <div className="banner-content">
                <h2 className="employer-title">EMPLOYERS</h2>
                <p className="employer-offer">
                    WELCOME OFFER - FREE JOB Postings and <span>Much More</span>.
                </p>
            </div>
            <div className="banner-actions">
                <button onClick={handleRegistration} className="btn register-btn">
                    Register for FREE
                </button>
                <button className="btn post-job-btn">Post A Job</button>
                <a href="/sales-enquiry" className="sales-enquiry-link">
                    Sales Enquiry
                </a>
            </div>
            <div className="search-job-container">
                <input
                    onChange={(e) => setSearched(e.target.value)}
                    type="text"
                    className="search-job-input"
                    placeholder="Search for jobs..."
                />
                {/* <button onClick={handleSearchJob} className="btn search-job-btn">
                    Search Job
                </button> */}
            </div>
        </div>
    );
};

export default EmployerBanner;
