import React from 'react';

export const ErrorMessage = ({ message }) => {
  return (
    <h4 className="text-center my-3" data-testid="error-message">
      {message}
    </h4>
  );
};

export default ErrorMessage;
