import httpClient from "./httpClient";

export const getUserPortfolio = async () => {
  try {
    const response = await httpClient.get("//52.4.229.0:5555/api/user_portfolio");
    return response.data; // Return the portfolio data
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error; // Throw error if any issue occurs like authauthService.js
