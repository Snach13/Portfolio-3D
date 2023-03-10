import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* I started my coding journey as a game developer with a passion to learn
        everything i could about this programming world. And all the
        while,teaching myself game development with a dream to build my own
        game. And I complete that dream soon enough and publish 2 games on play
        store. After completing that milestone I switch into Android
        Development. And started working as freelancer make many Android
        projects. Get a job at startup works for them for few months. After all
        that stuff I realise I'm not enjoying myself into that role need
        something new need new challenges and I'm looking forward to switch
        again into full stack web developement. I had Another desire of open
        source contribution and it feels like addiction to me now I cant sit
        comfortable I need new challenges new tools new languages to keep me
        excited and passionate to the journey. At the end of the day, but I
        think it's time to get uncomfotable again. */}
        A software engineer who takes pleasure in building(and breaking) things.
        Can work as a lone-wolf or with a pack, depending on the hunt. Known for
        getting into trenches and finding solutions at unexpected places. Prefer
        working in a fast-paced and challenging environment.Have an idea to
        discuss or a problem to be solved? Let's Connect!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
