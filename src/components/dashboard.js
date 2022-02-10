import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/dashboard.css";
import Content from "./content";
import UserBar from "./userBar";

export default function Dashboard() {

    const [step, setStep] = useState(1);

    return (
        <div className="dashboard">
            <div className="left">
                <div className="heading">
                    <i className="fas fa-shield-alt blueBg"></i> Shards Dashboard
                </div>
                <ul>
                    <li className={step === 1 ? "active" : ""} onClick={() => setStep(1)}> <i className="fas fa-home"></i> Blog Dashboard</li>
                    <li className={step === 2 ? "active" : ""} onClick={() => setStep(2)}> <i className="fas fa-book"></i> Tables</li>
                    <li className={step === 3 ? "active" : ""} onClick={() => setStep(3)}> <i className="fas fa-check"></i> Add New Post</li>
                    <li className={step === 4 ? "active" : ""} onClick={() => setStep(4)}> <i className="fas fa-check"></i> Forms & Components</li>
                    <li className={step === 5 ? "active" : ""} onClick={() => setStep(5)}> <i className="fas fa-check"></i> Blog Posts</li>
                    <li className={step === 6 ? "active" : ""} onClick={() => setStep(6)}> <i className="fas fa-check"></i> User Profile</li>
                    <li className={step === 7 ? "active" : ""} onClick={() => setStep(7)}> <i className="fas fa-check"></i> Errors</li>
                </ul>
            </div>
            <div className="right">
                <UserBar />
                <div className="content">
                    <Content step={step} />
                </div>
            </div>
        </div>
    );
}