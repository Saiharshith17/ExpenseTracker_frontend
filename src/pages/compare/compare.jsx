import { useState, useEffect } from "react";
import BarChart from "./Barchart";
import "./BarChart.css";

const ExchangeRateChart = ({ fromCurrency, toCurrency }) => {
    const [rates, setRates] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchRates = async () => {
            const API_KEY = "212bf29dfe0b854557ae946f";
            const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                const currencyRates = Object.entries(data.conversion_rates)
                    .filter(([key]) => key !== fromCurrency)
                    .slice(0, 5); // Get only 5 currencies

                setLabels(currencyRates.map(([key]) => key));
                setRates(currencyRates.map(([, value]) => value));
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };
        fetchRates();
    }, [fromCurrency]);

    return (
        <div className="bar-chart-container">
            <BarChart data={rates} labels={labels} />
        </div>
    );
};

export default ExchangeRateChart;
