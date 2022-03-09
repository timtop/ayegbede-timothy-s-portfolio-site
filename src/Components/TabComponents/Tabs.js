import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import "./Tabs.scss";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      {/* Tab selector */}
      <ul className="project-tab">
        <TabNavItem
          title="Design"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Front-End"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      {/* Tab stuffs */}
      <div className="outlet container">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Design</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Front-End Development!</p>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
