import React from "react";
import "./TabHome.scss";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`hd-text-w-smaller home-button ${
        activeTab === id ? "home-tabactive" : "home-tabunactive"
      }`}
    >
      {title}
    </button>
  );
};
export default TabNavItem;
