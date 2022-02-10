import React from "react";

import Chart1 from "./chart1";
import Chart2 from "./chart2";

import "../styles/page1.css";

export default function Page1() {
    return (
        <div>
            <h6 className="dashHead">DASHBOARD</h6>
            <h3 className="blogHead">Blog Overview</h3>
            <div className="row">
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <div className="box"><h6 className="subHead">POSTS</h6>
                        2390
                        <h6 className="subHead greenSub"><i className="fas fa-chevron-up"></i> 4.7%</h6></div>
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <div className="box"><h6 className="subHead">PAGES</h6>
                        182
                        <h6 className="subHead greenSub"><i className="fas fa-chevron-up"></i> 12.4%</h6></div>
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <div className="box"><h6 className="subHead">COMMENTS</h6>
                        8147
                        <h6 className="subHead redSub"><i className="fas fa-chevron-down"></i> 3.8%</h6></div>
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <div className="box"><h6 className="subHead">NEW CUSTOMERS</h6>
                        29
                        <h6 className="subHead redSub"><i className="fas fa-chevron-down"></i> 2.71%</h6></div>
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <div className="box"><h6 className="subHead">SUBSCRIBERS</h6>
                        17281
                        <h6 className="subHead redSub"><i className="fas fa-chevron-down"></i> 2.4%</h6></div>
                </div>
            </div>

            <div className="row">
                <div className="mb-4 col-sm-12 col-md-12 col-lg-8">
                    <div className="box box2"><Chart2 /></div>
                </div>
                <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
                    <div className="box box2"><Chart1 /></div>
                </div>
                <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
                    <div className="box box3"><h5>New Draft</h5></div>
                </div>
                <div className="mb-4 col-sm-12 col-md-12 col-lg-5">
                    <div className="box box3"><h5>Discussions</h5></div>
                </div>
                <div className="mb-4 col-sm-12 col-md-12 col-lg-3">
                    <div className="box box3"><h5>Top Referrals</h5></div>
                </div>
            </div>
        </div>
    );
}