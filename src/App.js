import React, { useState } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import "@progress/kendo-theme-default/dist/all.css"; // Import Kendo theme
import colors from "../src/styles/styles";

const App = () => {
  const [formData, setFormData] = useState({
    amount: "",
    referenceNumber: "",
    chequeNumber: "",
    bankName: "",
    bankedBy: "",
    date: null, // Start with no date selected
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted with data: " + JSON.stringify(formData, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#efefef",
      }}
    >
      <h2 style={{ textAlign: "center", color: colors.phAMACoreColor1 }}>
        Bank Transfer Form
      </h2>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Bank Name
        <Input
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Amount
        <Input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Reference Number
        <Input
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Cheque Number
        <Input
          name="chequeNumber"
          value={formData.chequeNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Banked By
        <Input
          name="bankedBy"
          value={formData.bankedBy}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#000000",
        }}
      >
        Date
        <DatePicker
          value={formData.date}
          onChange={(e) => handleDateChange(e.value)}
          placeholder="Select a date"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <Button
        type="submit"
        primary={true}
        style={{
          width: "100%",
          backgroundColor: colors.phAMACoreColor2,
          color: "#fff",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default App;