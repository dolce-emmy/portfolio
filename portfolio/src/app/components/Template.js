import React from "react";

const Template = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block bg-desert  dark:bg-dark  ${className}`}
    >
      {children}
    </div>
  );
};

export default Template;
