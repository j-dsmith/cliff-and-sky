import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { EASING } from "@/constants/animations";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type MotionInputProps = HTMLMotionProps<"input"> & InputProps;

interface CustomInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  validators?: RegisterOptions<FieldValues, string> | undefined;
  className?: string;
}

type Props = CustomInputProps & MotionInputProps;

const Input: FC<Props> = ({ className, name, register, validators, ...props }) => {
  return (
    <motion.input
      variants={inputTextVariant}
      initial="static"
      whileFocus="focus"
      className={clsx(
        "h-16 w-full border-b border-white bg-transparent pr-4 text-xl placeholder:font-light focus:outline-none",
        className
      )}
      {...register(name, { ...validators })}
      {...props}
    />
  );
};

// Animations
const inputTextVariant = {
  static: {
    paddingLeft: 0,
    animationFillMode: "backwards",
    backgroundColor: "hsl(0deg 0% 0%)",
    transition: {
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
  focus: {
    paddingLeft: 8,
    animationFillMode: "backwards",
    backgroundColor: "hsl(212deg 36% 9%)",
    transition: {
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};
export default Input;
