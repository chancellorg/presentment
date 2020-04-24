import React from 'react';
import "./remittance.css"

export default class index extends React.Component {
    render() {
        return (
            <div className={"remittanceComp"}>
                <div><h1>Remittance</h1></div>
                <div className={"remittanceRow"}>
                    <div className={"remittanceCell"}>
                        <p align={"center"}>
                            CUSTOMER NAME
                        </p>

                        <p align={"left"}>
                            SILVER DOLLAR FAIR
                        </p>

                    </div>
                    <div className={"remittanceCell"}>
                        <p align={"center"}>
                            ACCOUNT NUMBER
                        </p>
                        <p align={"left"}>
                            SILVER DOLLAR FAIR
                        </p>
                    </div>
                    <div className={"remittanceCell"}>
                        <p align={"center"}>
                            AMOUNT DUE
                        </p>
                        <p>
                        <div>
                            <div className={"halfCell"}>
                                $
                            </div>
                            <div className={"halfCell"}>
                                135.88
                            </div>

                        </div>
                        </p>
                    </div>
                    <div className={"remittanceCell"}>
                        <p align={"center"}>
                            AMOUNT ENCLOSED
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}