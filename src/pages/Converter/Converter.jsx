import React from 'react'
import ConverterForm from "../../components/converter/ConverterForm"
import './Converter.css';


const Converter = () => {
  return (
    <>
    <div className="currency-converter">
        <h2 className="converter-title">Currency Converter</h2>
    
    <ConverterForm/>
    </div>
    </>
  )
}

export default Converter