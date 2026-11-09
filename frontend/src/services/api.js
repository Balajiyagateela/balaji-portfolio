import axios from 'axios';

// Get API base URL from environment or default to localhost:5000/api
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

/**
 * Check backend health & mailer availability
 */
export const getHealthStatus = async () => {
  try {
    const response = await apiClient.get('/health');
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Unable to connect to backend server.',
      details: error.message,
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
      message: response.data.message || 'Message sent successfully!',
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      // Server returned structured error (e.g., 400 validation, 503 missing SMTP, 429 rate limit)
      return {
        success: false,
        status: error.response.status,
        code: error.response.data?.code,
        error: error.response.data?.error || 'Server error occurred.',
        message: error.response.data?.message,
        errors: error.response.data?.errors,
        directEmail: error.response.data?.directEmail || 'rajbalajiyagateela@gmail.com',
      };
    } else if (error.request) {
      // Network error (server offline / unreachable)
      return {
        success: false,
        status: 0,
        code: 'NETWORK_ERROR',
        error: 'Unable to reach backend API. The backend server might be offline or undergoing deployment.',
        directEmail: 'rajbalajiyagateela@gmail.com',
      };
    } else {
      return {
        success: false,
        status: 500,
        code: 'CLIENT_ERROR',
        error: error.message,
        directEmail: 'rajbalajiyagateela@gmail.com',
      };
    }
  }
};

export default apiClient;
