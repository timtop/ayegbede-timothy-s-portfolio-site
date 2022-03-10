import React from "react";
import PropTypes from "prop-types";
import Observer from "react-intersection-observer";
import "./Img.css";

// import styles from "./Img.module.css";

export default function Img(props) {
  const { src, alt, width, height, ...rest } = props;

  return (
    <div className="root" style={{ "--maxWidth": width }}>
      <Observer triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className="wrapper"
            style={{
              "--height": height,
              "--width": width,
            }}
          >
            <img
              src={inView ? src : ""}
              alt={alt}
              width={width}
              height={height}
              className="img"
              {...rest}
            />
          </div>
        )}
      </Observer>
    </div>
  );
}

Img.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
