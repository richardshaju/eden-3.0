import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (redirect) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by inspecting localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if user is not logged in
      navigate('/signup');
    }else{
      navigate(redirect)
    }
  }, []); // Only run this effect once, on component mount

  
};

export default useAuth;
