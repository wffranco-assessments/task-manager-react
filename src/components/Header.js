import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-blue-700">
        <div className="flex gap-3 mx-auto p-3">
          <h1 className="text-white text-xl font-bold">Task Manager</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
