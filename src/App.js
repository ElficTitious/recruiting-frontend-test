import './App.css';
import { useState, useEffect } from 'react';
import InvoiceTable from './components/InvoiceTable';
import InvoiceModal from './components/InvoiceModal';

function App() {
  const [receivedInvoices, setReceivedInvoices] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);
  const [selectedReceivedInvoice, setSelectedReceivedInvoice] = useState(null);
  const [selectedCreditNotes, setSelectedCreditNotes] = useState([]);

  // NOTE: This is a mock value, the real value could be fetched from an API
  const usdToClpExchange = 800;

  useEffect(() => {
    fetch('https://recruiting.api.bemmbo.com/invoices/pending')
      .then((response) => response.json())
      .then((jsonResponse) => {
        setReceivedInvoices(
          jsonResponse.filter((invoice) => invoice.type === 'received')
        );
        setCreditNotes(
          jsonResponse.filter((invoice) => invoice.type === 'credit_note')
        );
      });
  }, []);

  return (
    <div className="grid grid-cols-1 space-y-8 mt-8 mb-8">
      <InvoiceTable
        header={'Selecciona una factura'}
        tableData={receivedInvoices}
        selectedRows={selectedReceivedInvoice}
        setSelectedRows={(id) => setSelectedReceivedInvoice(id)}
        usdToClpExchange={usdToClpExchange}
      />
      {selectedReceivedInvoice && (
        <InvoiceTable
          header={'Selecciona una nota de crédito'}
          tableData={creditNotes.filter(
            (creditNote) => creditNote.reference === selectedReceivedInvoice
          )}
          selectedRows={selectedCreditNotes}
          setSelectedRows={(ids) => setSelectedCreditNotes(ids)}
          usdToClpExchange={usdToClpExchange}
          multiple
        />
      )}
      {selectedCreditNotes.length > 0 && (
        <InvoiceModal
          onClose={() => {
            setSelectedReceivedInvoice(null);
            setSelectedCreditNotes([]);
          }}
        />
      )}
    </div>
  );
}

export default App;
