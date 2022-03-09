import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`hd-text-w-smaller ${activeTab === id ? "tabactive" : ""}`}
    >
      {title}
    </button>
  );
};
export default TabNavItem;
