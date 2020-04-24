import React from 'react';
import Header from "./parts/header"
import InvoiceSpec from "./parts/invoicespecs"
import Remittance from "./parts/remittance"

function App() {
  return (
    <div>
        <Header></Header>
        <InvoiceSpec></InvoiceSpec>
        <Remittance/>
    </div>

  );
}

export default App;
