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
      message: response.data.message || 'Thank you for reaching out! Your message has been sent successfully.',
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      // Server returned structured error (e.g. 400 validation, 503 unavailable, 429 rate limit)
      return {
        success: false,
        status: error.response.status,
        code: error.response.data?.code || 'SERVICE_ERROR',
        error: error.response.data?.error || 'Unable to process request.',
        message: error.response.data?.message || 'Thank you for reaching out. The contact form is temporarily unavailable. Please contact me directly using the email address below.',
        errors: error.response.data?.errors,
        directEmail: error.response.data?.directEmail || 'yagateelabalaji@gmail.com',
      };
    } else if (error.request) {
      // Server unreachable / network offline
      return {
        success: false,
        status: 0,
        code: 'SERVICE_UNAVAILABLE',
        error: 'Unable to connect to server.',
        message: 'Thank you for reaching out. The contact form is temporarily unavailable. Please contact me directly using the email address below.',
        directEmail: 'yagateelabalaji@gmail.com',
      };
    } else {
      return {
        success: false,
        status: 500,
        code: 'SERVICE_UNAVAILABLE',
        error: 'Client request failure.',
        message: 'Thank you for reaching out. The contact form is temporarily unavailable. Please contact me directly using the email address below.',
        directEmail: 'yagateelabalaji@gmail.com',
      };
    }
  }
};

export default apiClient;
