import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";

function Content({ step }) {

    switch (step) {
        case 1:
            return (
                <Page1 />
            );
        case 2:
            return (
                <Page2 />
            );
        default:
            return <div>Under Development</div>;
    }
}

export default Content;