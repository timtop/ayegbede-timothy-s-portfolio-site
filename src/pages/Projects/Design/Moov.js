import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../../Layout/Layout";
import "./universalblog.scss";

const Moov = () => {
  return (
    <Layout>
      <div style={{ marginTop: "90px" }} className="container">
        <div className="designblog-header-container">
          <p className="hd-text-w margin-top-20">Moov - A ride-hailing app</p>

          <p className="bd-text-w margin-top-20">
            The raid-hailing app you always wanted
          </p>

          <div className="bd-text-w margin-top-20">
            Role: <span className="design-badge">Product Designer</span>
          </div>
        </div>

        <StaticImage
          src="../../../images/thumbnails/Moov Thumbnail2.jpg"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1800"
          height="1200"
        />

        <article className=" designblog-article-container">
          <p className="article-bd-header-text">Overview</p>
          <div className="article-bd-web-text">
            Set your destination and request a ride See the driver arrive in
            real-time Pay in cash and in-app See the ride price upfront and know
            how much you would be paying to your destination Users can rate
            drivers to give feedback and improve the application.
          </div>

          <p className="article-bd-header-text margin-top-20">
            Design Requirements
          </p>
          <div className="article-bd-web-text">
            Set your destination and request a ride See the driver arrive in
            real-time Pay in cash and in-app See the ride price upfront and know
            how much you would be paying to your destination Users can rate
            drivers to give feedback and improve the application
          </div>

          <p className="article-bd-header-text margin-top-20">User Persona</p>
          <div className="article-bd-web-text">
            I had a chat with a few friends on a call and we spoke about
            challenges they had with Ride-Hailing services and I ask them if
            they would like the feature from the product requirements, they were
            used to some of them already but they really liked the idea of
            seeing the price upfront and one said they would like to share rides
            with their friend where they split the fee equally hence the user
            persona below: Rachel is a student that uses ride-hailing services
            because it is more convenient than jumping buses she goes around
            with her friends a lot and one problem that usually reoccurs is
            splitting the fee, initially, she agrees with her friends that they
            are going to split the fee but because the ride was ordered on her
            account, only her would be charged when they all agreed to split the
            fee, they have to start going through the hassle of transferring the
            money to her bank account after their journey or sometimes forget to
            pay, she wants a way that the fee can be split so her friends can be
            charged right from the app to give them a better experience.
          </div>

          <p className="article-bd-header-text margin-top-20">
            Competitive Analysis
          </p>
          <div className="article-bd-web-text">
            One of the greatest challenges was getting how to calculate the
            price to be paid upfront that is before you enter the ride, other
            ride-hailing application use distance and time with a base price to
            charge the customer but it is heavily dependent on the arrival time
            even after their estimation so if a ride was meant to take you
            15mins based on their estimation and ends up taking 20mins then you
            would be charged for 20mins.
          </div>

          <p className="article-bd-header-text margin-top-20">
            BOLT PRICING(Lite){" "}
          </p>
          <div className="article-bd-web-text">
            Minimum Price —— N500 <br /> Start —— N200 <br /> per KM —— N65/km{" "}
            <br /> per min —— 10/min <br /> seat 4
          </div>

          <p className="article-bd-header-text margin-top-20">
            How I came up with a calculation system
          </p>
          <div className="article-bd-web-text">
            The distance with which we are going to travel can be known and the
            time can be estimated but there are so many other constraints that
            may cost you to spend more time than usual like taking a longer
            route or having to drop something on the way. With Moov I found out
            there could be a proper estimation of time and distance using
            Google’s services, the estimated time and the distance you would
            travel is stated and the distance may vary using alternate routes.
            With Moov, we choose the shortest distance with the lowest traffic
            and make a price calculation off the estimation if the passenger
            chooses to take another route apart from the specified route the
            fixed price would change and the calculation would now be based on
            the new distance travelled and the arrival time
          </div>
        </article>

        <StaticImage
          src="../../../images/thumbnails/Moov Thumbnail2.jpg"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1800"
          height="1200"
        />

        <article className=" designblog-article-container">
          <p className="article-bd-header-text margin-top-20">Journey</p>
          <div className="article-bd-web-text">
            Unilag to Murtala Mohammed Airport via Airport Road 15.7km
          </div>

          <p className="article-bd-header-text margin-top-20">
            Moov Pricing(Comfort)
          </p>
          <div className="article-bd-web-text">
            Minimum Price Payable — — — N500 <br />
            Start — — — N300 <br />
            per KM — — N50/km * 15.7 = N785 <br />
            per min — — N20/min * 26min = N520 <br />
            seats up to 4people{" "}
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Moov;
