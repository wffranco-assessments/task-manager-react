import React from "react";
import { useSelector } from "react-redux";
import { State } from "../store";

const Header: React.FC = () => {
  const section = useSelector((state: State) => state.section);

  return (
    <header>
      <nav className="bg-blue-700">
        <div className="flex gap-3 mx-auto p-3">
          <h1 className="text-white text-xl font-bold">Task Manager</h1>
          {section ? (
            <>
              <h1 className="text-white text-xl font-bold">&gt;</h1>
              <h1 className="text-white text-xl font-bold">{section}</h1>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
