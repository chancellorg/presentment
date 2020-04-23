import React from 'react';

import "./invoiceTotals.css"

export default class index extends React.Component {

    render() {
        return (
            <div className={"invoiceTotalsRow"}>
                <div className={"invoiceTotalCell"}>
                    <p align={"left"}>
                        <b>Total amount due:</b>
                    </p>

                </div>
                <div className={"invoiceTotalCell"}>
                    <p align={"right"}>
                        <b>$135.88</b>
                    </p>

                </div>
            </div>
        )
    }
}