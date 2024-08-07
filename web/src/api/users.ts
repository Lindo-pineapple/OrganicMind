"use client";
import dotenv from "dotenv";
import { CheckExpiry } from "@/helpers/checkTokenExpiry";
dotenv.config();

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URI!;
const authSecret = process.env.NEXT_PUBLIC_AUTH_SECRET!;

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

export const RegisterUser = async (
  username: string,
  password: string,
  email: string
) => {
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
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: result.response.username,
          email: result.response.email,
        })
      );
      return result.token;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const IsAuthenticated = (): boolean => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const isExpired = CheckExpiry(token, authSecret);
      if (isExpired) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      return isExpired;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return true;
    }
  } catch (error) {
    console.error("Error:", error);
    return true;
  }
};
