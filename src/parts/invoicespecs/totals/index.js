import React from 'react';

import "./invoiceTotals.css"

export default class index extends React.Component {

    render() {
        return (
            <div className={"invoiceTotalsRow"}>
                <div className={"invoiceTotalCell"}>
                    <p align={"left"}>
                        <b>Total amount this period:</b><br />
                    </p>

                    <p align={"left"}>
                        <h2><b>Total amount due:</b></h2>
                    </p>

                </div>
                <div className={"invoiceTotalCell"}>
                    <p align={"right"}>
                        <b>$135.88</b><br />
                    </p>

                    <p align={"right"}>
                        <h2><b>$135.88</b><br /></h2>
                    </p>
                </div>
            </div>
        )
    }
}