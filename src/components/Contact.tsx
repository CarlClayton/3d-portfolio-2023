import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contact } from "../constants";

const Contact = () => {
  const { name, email, message } = contact.form;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
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
        <p className={styles.heroSubText}>{contact.subText}</p>
        <p className={styles.heroHeadText}>{contact.header}</p>
        <form
          target="_blank"
          onSubmit={handleSubmit}
          method="POST"
          action="https://formsubmit.co/aeaa13e626ed68ef443db5c520499be1"
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              {name.label}
            </span>
            <input
              type="text"
              placeholder={name.placholder}
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("name", {
                required: name.required,
                maxLength: name.maxLength,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" &&
                  name.errors.required}
                {errors.name.type === "maxLength" && name.maxLength}
              </p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              {email.label}
            </span>
            <input
              type="email"
              placeholder={email.placholder}
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("email", {
                required: email.required,
                pattern: email.pattern,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" &&
                  email.errors.required}
                {errors.email.type === "pattern" &&
                  email.errors.pattern}
              </p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">
              {message.label}
            </span>
            <textarea
              rows={7}
              placeholder={message.placholder}
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white 
              rounded-lg outlined-none border-none font-medium"
              {...register("message", {
                required: message.required,
                maxLength: message.maxLength,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  message.errors.required}
                {errors.message.type === "maxLength" &&
                  message.errors.maxLength}
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
