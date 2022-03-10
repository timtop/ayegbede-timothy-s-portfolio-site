import React, { useEffect, useRef, useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import "./Tabs.scss";

import moov from "../../images/thumbnails/Moov Thumbnail.jpg";
import Performa from "../../images/thumbnails/Smart Performa Thumbnail.png";
import Delivered from "../../images/thumbnails/Its Delivered Thumbnail.png";
import Splufix from "../../images/thumbnails/Splufix Thumbnail.jpg";

import Cards from "../Cards/Cards";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  // const [stickyClass, setStickyClass] = useState("sticky")
  // Create the header ref
  const headerRef = useRef(0);
  // Get the position of my div

  const cardItems = [
    {
      image: moov,
      title: "Moov - A ride-hailing app",
      role: "Product Designer",
    },
    {
      image: Performa,
      title: "Smart Performa",
      role: "Product Designer",
    },
    {
      image: Delivered,
      title: "Its Delivered",
      role: "Product Designer",
    },
    {
      image: Splufix,
      title: "Splufix Project Managament Tool",
      role: "Product Designer",
    },
    {
      image: moov,
      title: "Moov - A ride-hailing app",
      role: "Product Designer",
    },
    {
      image: moov,
      title: "Moov - A ride-hailing app",
      role: "Product Designer",
    },
  ];

  useEffect(() => {
    const sticky = headerRef.current.offsetTop;
    console.log(sticky);

    function doSticky() {
      if (window.pageYOffset > sticky) {
        console.log("Added sticky");
        return "sticky";
      } else {
        console.log("Remove sticky");
        return "";
      }
    }
    window.onscroll = function () {
      doSticky();
    };
  });

  return (
    <div ref={headerRef} className="tabs">
      {/* Tab selector */}
      <div className={`project-tab sticky`}>
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
      </div>

      {/* Tab stuffs */}
      <div className="outlet container">
        {/* Design Tab Begins */}
        <TabContent id="tab1" activeTab={activeTab}>
          <div className="hd-text-w-smaller">Selected Design Projects</div>
          <div className="card-holder">
            {cardItems.map((item) => {
              return (
                <Cards image={item.image} title={item.title} role={item.role} />
              );
            })}
          </div>
        </TabContent>

        {/* Dev Tab Begins */}
        <TabContent id="tab2" activeTab={activeTab}>
          <div>Front-End Development!</div>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
