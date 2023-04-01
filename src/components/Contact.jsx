import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <p className={styles.heroHeadText}>Contact.</p>
        <form
          target="_blank"
          onSubmit={handleSubmit}
          method="POST"
          action="https://formsubmit.co/aeaa13e626ed68ef443db5c520499be1"
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" &&
                  "This field is required"}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters"}
              </p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" &&
                  "This field is required"}
                {errors.email.type === "pattern" &&
                  "Invalid email address"}
              </p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              placeholder="What's your message?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters"}
              </p>
            )}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none 
          w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Send
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
