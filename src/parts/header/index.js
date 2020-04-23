import React from 'react';
import "./header.css"
export default class index extends React.Component{
    render() {
        return (
            <div className={"headerRow"}>
                <div className={"header"}>
                    <p align={"center"}>
                        <h1>Invoice</h1>
                    </p>
                </div>
                <div className={"header"}>
                    <div className={"left block"}>
                        <p align={"left"}>
                            Delta Dental of California<br />
                            560 Mission Street, Suite 1300<br/>
                            San Francisco, CA 94105
                        </p>
                    </div>
                    <div className={"right block"}>
                        <p align={"left"}>
                        <b>Plan underwritten and administered by:</b><br/>
                        Delta Dental of California<br />
                        560 Mission Street, Suite 1300<br/>
                        San Francisco, CA 94105
                        </p>
                    </div>
                </div>

                <div className={"header"}>
                    <div className={"left block"}>
                        <p align={"left"}>
                            <b>SILVER DOLLAR FAIR</b><br />
                            2357 FAIR STREET<br/>
                            CHICO, CA 95928
                        </p>
                    </div>
                    <div className={"right block"}>
                        <p align={"left"}>
                            <b>CAN WE HELP?</b><br/>
                            Visit our website<br />
                            <b>deltadentalins.com</b><br/>
                            For eligibility inquiries call<br/>
                            1-800-632-8555<br/>
                            For billing, inquiries call<br/>
                            1-800-632-8555<br/>
                        </p>
                    </div>
                </div>
                .
            </div>
        )
    }
}