"use client";

import { motion } from "framer-motion";

const easing = "easeInOut"; // easing
const repeat = Infinity; // repeat amount, "Infinity" or a number value
const Star1Height = -203; // here we are setting different heights of the stars
const Star2Height = -182;
const Star3Height = -223;
const Star4Height = -102;
const Star5Height = -162;

export const Star1 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    className={className}
    {...rest}
    as={motion.div} // here the star is wrapped in a motion.div so we can animate it using framer-motion
    animate={{
      rotate: [14, -6, 9],
      scale: [0, 1, 1, 0],
      y: [0, Star1Height],
    }} // here we are setting the animation properties
    transition={{
      duration: 2,
      repeat: repeat,
      ease: easing,
    }}
  >
    <title />
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F6AB27"
        d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
      />
      <path
        fill="#F4CD1E"
        d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
      />
    </g>
  </svg>
);

export const Star2 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    className={className}
    {...rest}
    as={motion.div}
    animate={{
      rotate: [-12, 12, -12],
      scale: [0, 1, 1, 0],
      y: [0, Star2Height],
    }}
    transition={{
      duration: 1.9,
      repeat: repeat,
      ease: easing,
    }}
  >
    <title />
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F6AB27"
        d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
      />
      <path
        fill="#F4CD1E"
        d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
      />
    </g>
  </svg>
);

export const Star3 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    className={className}
    {...rest}
    as={motion.div}
    animate={{
      rotate: [-16, 5, -3, 9],
      scale: [0, 1, 1, 0],
      y: [0, Star3Height],
    }}
    transition={{
      duration: 2.4,
      repeat: repeat,
      ease: easing,
    }}
  >
    <title />
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F6AB27"
        d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
      />
      <path
        fill="#F4CD1E"
        d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
      />
    </g>
  </svg>
);

export const Star4 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    className={className}
    {...rest}
    as={motion.div}
    animate={{
      rotate: [-9, 13, -7, 16],
      scale: [0, 1, 1, 0],
      y: [0, Star4Height],
    }}
    transition={{
      duration: 1.4,
      repeat: repeat,
      ease: easing,
    }}
  >
    <title />
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F6AB27"
        d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
      />
      <path
        fill="#F4CD1E"
        d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
      />
    </g>
  </svg>
);

export const Star5 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    className={className}
    {...rest}
    as={motion.div}
    animate={{
      rotate: [-13, 6, -11, 7],
      scale: [0, 1, 1, 0],
      y: [0, Star5Height],
    }}
    transition={{
      duration: 1.9,
      repeat: repeat,
      ease: easing,
    }}
  >
    <title />
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F6AB27"
        d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
      />
      <path
        fill="#F4CD1E"
        d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
      />
    </g>
  </svg>
);

// 👇 These are your controls 👇

// const easing = "easeInOut"; // easing
// const repeat = Infinity; // repeat amount, "Infinity" or a number value
// const Bubble1Height = -203;
// const Bubble2Height = -182;
// const Bubble3Height = -223;
// const Bubble4Height = -102;
// const Bubble5Height = -162;

// export function Bubble1 {
//   return (props) => {
//     return (
//       <Component
//         {...props}
//         as={motion.div}
//         animate={{
//           rotate: [14, -6, 9],
//           scale: [0, 1, 1, 0],
//           y: [0, Bubble1Height],
//         }}
//         transition={{
//           duration: 2,
//           repeat: repeat,
//           ease: easing,
//         }}
//       />
//     );
//   };
// }
// export function Bubble2{
//   return (props) => {
//     return (
//       <Component
//         {...props}
//         as={motion.div}
//         animate={{
//           rotate: [-12, 12, -12],
//           scale: [0, 1, 1, 0],
//           y: [0, Bubble2Height],
//         }}
//         transition={{
//           duration: 1.9,
//           repeat: repeat,
//           ease: easing,
//         }}
//       />
//     );
//   };
// }

// export function Bubble3{
//   return (props) => {
//     return (
//       <Component
//         {...props}
//         as={motion.div}
//         animate={{
//           rotate: [-16, 5, -3, 9],
//           scale: [0, 1, 1, 0],
//           y: [0, Bubble3Height],
//         }}
//         transition={{
//           duration: 2.4,
//           repeat: repeat,
//           ease: easing,
//         }}
//       />
//     );
//   };
// }
// export function Bubble4(Component) {
//   return (props) => {
//     return (
//       <Component
//         {...props}
//         as={motion.div}
//         animate={{
//           rotate: [-9, 13, -7, 16],
//           scale: [0, 1, 1, 0],
//           y: [0, Bubble4Height],
//         }}
//         transition={{
//           duration: 1.4,
//           repeat: repeat,
//           ease: easing,
//         }}
//       />
//     );
//   };
// }
// export function Bubble5(Component){
//   return (props) => {
//     return (
//       <Component
//         {...props}
//         as={motion.div}
//         animate={{
//           rotate: [-13, 6, -11, 7],
//           scale: [0, 1, 1, 0],
//           y: [0, Bubble5Height],
//         }}
//         transition={{
//           duration: 1.9,
//           repeat: repeat,
//           ease: easing,
//         }}
//       />
//     );
//   };
// }
