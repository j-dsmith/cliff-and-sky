"use client";

import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { HTMLMotionProps, LazyMotion, m, motion } from "framer-motion";
import { EASING, TRANSITION } from "@/constants/animations";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { loadFeatures } from "@/lib/framer";

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
    <LazyMotion features={loadFeatures}>
      <m.input
        variants={inputTextVariant}
        initial="static"
        whileFocus="focus"
        className={clsx(
          "h-16 w-full border-b border-white bg-transparent pr-4 text-xl placeholder:text-white focus:border-b-emerald-500 focus:outline-none",
          className
        )}
        {...register(name, { ...validators })}
        {...props}
      />
    </LazyMotion>
  );
};

// Animations
const inputTextVariant = {
  static: {
    paddingLeft: 0,
    // animationFillMode: "backwards",
    backgroundColor: "rgb(0 0 0)",
    transition: {
      ...TRANSITION.genericTextSpring,
      duration: 0.6,
    },
  },
  focus: {
    paddingLeft: 8,
    // animationFillMode: "backwards",
    backgroundColor: "rgb(17 24 39)",
    transition: {
      ...TRANSITION.genericTextSpring,
      duration: 0.6,
    },
  },
};
export default Input;
