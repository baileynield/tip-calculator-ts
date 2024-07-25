import React, { useState } from "react";
import styles from "./Calculator.module.css";


const Calculator: React.FC = () => {
    /**
    * Returns the total bill
    * 
    * @param billAmount - the bill amount that you want the tip percentage to be calculated with
    * @param tipPercentage - the percentage of your bill amount that you want to pay to your server
    * @returns The sum of the bill amount and the calculated tip
    */
    const [billAmount, setBillAmount] = useState<number | string>("");
    const [tipPercentage, setTipPercentage] = useState<number | string>("");

    const [totalAmount, setTotalAmount] = useState<number | null>(null);

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the page from refreshing when the user clicks submit
        event.preventDefault();

        // Only show the result if the user has put in a valid number amount
        if (typeof billAmount === "number" && billAmount > 0) {
            // Convert the tip percentage to a decimal
            const tipAsDecimal = typeof tipPercentage === "number" ? tipPercentage / 100 : 0;

            // Calculate the total amount and update the state
            setTotalAmount(billAmount + billAmount * tipAsDecimal);
        } else {
            alert("Please enter a valid bill amount");
        }
    };

    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newBillAmount = event.target.value;

        // If input is an empty string, allow the empty string. Otherwise, cast the value as a number.
        setBillAmount(newBillAmount === "" ? "" : Number(newBillAmount));
    };

    const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newTipPercentage = event.target.value;

        // If input is an empty string, allow the empty string. Otherwise, cast the value as a number.
        setTipPercentage(newTipPercentage === "" ? "" : Number(newTipPercentage));
    };

    return (
        <div className={styles.calculator}>
            <form onSubmit={handleSubmit} className={styles.calculatorForm}>
                {/* Input field for bill amount */}
                <div className={styles.formGroup}>
                    <label htmlFor="bill">Bill Amount</label>
                    <input
                        type="number"
                        id="bill"
                        value={billAmount}
                        placeholder="Enter bill amount"
                        onChange={handleBillChange}
                    />
                </div>
                {/* Input field for tip percentage */}
                <div className={styles.formGroup}>
                    <label htmlFor="tipPercentage">Tip Percentage</label>
                    <input
                        type="number"
                        id="tipPercentage"
                        value={tipPercentage}
                        placeholder="Enter tip percentage"
                        onChange={handleTipPercentageChange}
                    />
                </div>
                <button type="submit">Tip me</button>
            </form>
            {/* Only show the result if the total amount has been calculated */}
            {totalAmount !== null && <h2>Your total bill is ${totalAmount.toFixed(2)}!</h2>}
        </div>
    );
};

export default Calculator;
