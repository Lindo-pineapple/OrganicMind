import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.SERVER_URI || 'http://localhost:5001'

export const healthCheck = async () => {
    try {
      const response = await fetch(`${baseUrl}/health`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        console.error(`Server Returned status code: ${response.status}`);
        return false;
      }
      
      return response.status;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
  export const RegisterUser = async (username: string, password: string, email: string) => {
    const user = { email, username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
  
    try {
      console.log("Requesting URL:", `${baseUrl}/users/register`);
      const response = await fetch(`${baseUrl}/users/register`, options);
      
      if (!response.ok) {
        console.error("Network response was not ok");
        return false;
      }
      
      const result = await response.json();
      if (result.token !== undefined && result !== false) {
        localStorage.setItem("token", result.token);
        return result.token;
      }
      return false;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
  export const LoginUser = async (email: string, password: string) => {
    const user = { email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
  
    try {
      console.log("Requesting URL:", `${baseUrl}/users/login`);
      const response = await fetch(`${baseUrl}/users/login`, options);
  
      if (!response.ok) {
        console.error("Network response was not ok");
        return false;
      }
      
      const result = await response.json();
      if (result.token !== undefined && result !== false) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify({
          name: result.response.username,
          email: result.response.email,
        }));
        return result.token;
      }
      return false;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
