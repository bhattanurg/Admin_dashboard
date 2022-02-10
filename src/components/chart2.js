import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Chart2() {
    return (
        <>
            <h5>Progress Reports</h5>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={30} />
            <ProgressBar variant="warning" now={72} />
            <ProgressBar variant="danger" now={70} />
            <ProgressBar variant="data" now={35} />
            <ProgressBar variant="warning" now={10} />
            <ProgressBar variant="success" now={85} />
            <ProgressBar variant="danger" now={30} />
            <ProgressBar variant="warning" now={55} />
            <ProgressBar variant="info" now={80} />
            <ProgressBar variant="data" now={60} />
            <ProgressBar variant="danger" now={40} />
            <ProgressBar variant="success" now={55} />
        </>
    );
}