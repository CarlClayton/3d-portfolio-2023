import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

type Props = {
  headText: string;
  subText: string;
};

const SectionHeader = ({ headText, subText }: Props) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{headText}</h2>
    </motion.div>
  );
};

export default SectionHeader;
