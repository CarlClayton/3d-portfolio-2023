import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { intro, services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { SectionHeader } from "./";

type Props = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{ max: 45, scale: 1, speed: 450 }}
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="title"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <SectionHeader
        headText={intro.header}
        subText={intro.subText}
      />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {intro.content}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
