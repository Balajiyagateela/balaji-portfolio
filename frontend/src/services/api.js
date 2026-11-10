import axios from 'axios';

// Get API base URL from environment; dynamically falls back to deployed Render API in production, localhost in development
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD
    ? 'https://balaji-portfolio-lazn.onrender.com/api'
    : 'http://localhost:5000/api');

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 second timeout to allow Render wakeups
});

/**
 * Check backend health & availability
 */
export const getHealthStatus = async () => {
  try {
    const response = await apiClient.get('/health');
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: 'Backend service offline.',
    };
  }
};

/**
 * Submit contact inquiry to Express backend
 * @param {{ name: string, email: string, subject: string, message: string }} formData
 */
export const sendContactMessage = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData);
    return {
      success: true,
      message: response.data.message || 'Your message was sent successfully.',
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      // Server returned response (e.g. 400 validation, 502/503 service unavailable, 429 rate limit)
      return {
        success: false,
        status: error.response.status,
        code: error.response.data?.code || 'SERVICE_ERROR',
        error: error.response.data?.error || 'Unable to process request.',
        message: error.response.data?.message || 'Unable to send your message right now. Please try again later.',
        errors: error.response.data?.errors,
        directEmail: error.response.data?.directEmail || 'yagateelabalaji@gmail.com',
      };
    } else if (error.request) {
      // Network disconnect, CORS block, or backend spun down
      return {
        success: false,
        status: 0,
        code: 'NETWORK_ERROR',
        error: 'Unable to connect to backend.',
        message: 'Unable to send your message right now. Please try again later.',
        directEmail: 'yagateelabalaji@gmail.com',
      };
    } else {
      return {
        success: false,
        status: 500,
        code: 'CLIENT_ERROR',
        error: error.message,
        message: 'Unable to send your message right now. Please try again later.',
        directEmail: 'yagateelabalaji@gmail.com',
      };
    }
  }
};

export default apiClient;
