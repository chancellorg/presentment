import React from 'react';
import "./invoicespecs.css"

export default class index extends React.Component {

    render() {
        return (
            <div className={"invoiceRow"}>
                <div className={"invoiceCell invoiceLeft"}>
                    <p>
                        ► <b>Invoice number:</b> BE003791321<br />
                        ► <b>Invoice date:</b> March 1, 2020<br />
                    </p>
                    <p>
                        <b>SILVER DOLLAR FAIR</b>
                    </p>
                    <p>
                        ► <b>Account number:</b> 05-R10112000000<br />
                        ► <b>Purchase Order #:</b><br />
                    </p>

                </div>
                <div className={"invoiceCell invoiceRight"}>
                    <p>
                        <b>Enrollment changes</b><br />
                        Enrollment changes not reflected on this invoice will be adjusted on your next invoice. <br/>
                    </p>
                    <p>

                    </p>

                </div>
            </div>
        )

    }
}