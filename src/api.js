import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";
let authToken = null;

// Authenticate and get token
export const authenticate = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth`, {
      companyName: "SRM IST",
      clientID: "f891c8fc-2b2e-4019-b312-97e74793f048",
      clientSecret: "XjHrxmQoCgUjYpyq",
      ownerName: "Aditya Khurana",
      ownerEmail: "ak9342@srmist.edu.in",
      rollNo: "RA2211028030022",
    },  { withCredentials: true });

    authToken = response.data.access_token; // Adjust this if the token key is different
    console.log("Token received:", authToken);
    return authToken;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};

// Fetch Users (after authentication)
export const fetchUsers = async () => {
  if (!authToken) {
    await authenticate(); // Ensure authentication before making a request
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
