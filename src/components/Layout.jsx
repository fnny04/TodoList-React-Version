import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gradient-to-r from-cyan-300 to-gray-100 h-screen justify-center items-center flex-col gap-4">
      {children}
    </div>
  );
};

export default Layout;
