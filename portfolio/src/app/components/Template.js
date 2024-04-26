import React from "react";

const Template = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-desert p-28 dark:bg-dark  ${className}`}
    >
      {children}
    </div>
  );
};

export default Template;
