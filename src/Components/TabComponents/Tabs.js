import React, { useEffect, useRef, useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import "./Tabs.scss";

import moov from "../../images/thumbnails/Moov Thumbnail.jpg";
// import Performa from "../../images/thumbnails/Smart Performa Thumbnail.png";
import Delivered from "../../images/thumbnails/Its Delivered Thumbnail.png";
// import Splufix from "../../images/thumbnails/Splufix Thumbnail.jpg";
import dreampulze from "../../images/thumbnails/DreamPulze Thumbnail.jpg";

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
      route: "./Design/Moov",
      pillDisplay: true,
      descDisplay: true,
    },
    {
      image: dreampulze,
      title: "Dream Pulze",
      role: "UI Designer",
      route: "./Design/DreamPulze",
      pillDisplay: true,
      descDisplay: true,
    },
    {
      image: Delivered,
      title: "Its Delivered",
      role: "UI Designer",
      route: "./Design/Its-Delivered",
      pillDisplay: true,
      descDisplay: true,
    },
    // {
    //   image: Performa,
    //   title: "Smart Performa",
    //   role: "UI Designer",
    //   route: "./Design/Smart-Performa",
    // },
    // {
    //   image: Splufix,
    //   title: "Splufix Project Managament Tool",
    //   role: "UI Designer",
    //   route: "./Design/Splufix",
    // },
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
                <Cards
                  image={item.image}
                  title={item.title}
                  role={item.role}
                  route={item.route}
                  pillDisplay={item.pillDisplay}
                />
              );
            })}
          </div>
        </TabContent>

        {/* Dev Tab Begins */}
        <TabContent id="tab2" activeTab={activeTab}>
          <div className="hd-text-w-smaller">Frontend Projects</div>
          {/* <div className="card-holder">
            {cardItems.map((item) => {
              return (
                <Cards
                  image={item.image}
                  title={item.title}
                  role={item.role}
                  route={item.route}
                  descDisplay={item.descDisplay}
                />
              );
            })}
          </div> */}
          Still under construction...
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
