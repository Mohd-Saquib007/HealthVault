import { createContext } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
    withCredentials: true,
  });

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}