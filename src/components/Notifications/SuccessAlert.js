import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessAlert = () => {
  useEffect(() => {
    toast.success('LOGIN SUCCESSFUL!', {
      position: toast.POSITION.TOP_CENTER,
      closeButton: true,
      timeOut: 30,
      progressBar: true,
      allowHtml: true,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default SuccessAlert;
