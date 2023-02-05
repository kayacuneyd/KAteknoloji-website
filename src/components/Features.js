import React from "react";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Features(props) {
  return (
    <>
      <Col lg={4} md={3}>
        <motion.div
          className="category__item text-center white-bg m-4"
          whileHover={{ scale: 0.8, rotate: -15 }}
        >
          <div className="category__icon mb-3">
            <a href="/iletisim">
              <img src={props.imgSrc} alt={props.title} width={110} />
            </a>
          </div>
          <div className="category__content mt-3">
            <h3 className="category__title">
              <a href="/iletisim" className="text-decoration-none text-black">
                {props.title}
              </a>
            </h3>
          </div>
        </motion.div>
      </Col>
    </>
  );
}
