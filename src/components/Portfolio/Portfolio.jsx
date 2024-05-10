import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{marginTop: "10px"}}>Creating a positive impact</p>
          </div>
          <a href="#people">Explore More Projects</a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./expensetracker.jpeg" alt="project" />
          <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./public/bloodlink.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./public/Screenshot 2024-02-17 at 7.52.40 AM.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
