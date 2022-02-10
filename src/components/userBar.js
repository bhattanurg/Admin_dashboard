import React from "react";

import "../styles/userBar.css";

export default function UserBar() {
    return (
        <div className="Bar">
            <div className="searchButton">
                <i className="fas fa-search"></i> <input placeholder="Search for something..." />
            </div>
            <div className="userName"><i className="fas fa-chevron-down"></i> Sierra Brooks</div>
        </div>
    );
}