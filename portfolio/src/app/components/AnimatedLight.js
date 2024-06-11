// import React from 'react'
// import { Light } from "../components/Icons";

// const AnimatedLight = () => {
//     const AnimatedStars = ({ animateStars, lightBulbRef }) => {
//       return (
//         animateStars && (
//           <motion.div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//             {[...Array(6)].map((_, index) => {
//               const xOffset = Math.random() * 200 - 30; // Adjust the range as needed
//               const yOffset = Math.random() * 100 - 50;
//               return (
//                 <Light
//                   key={index}
//                   // className={`w-10 h-10 rounded-full bg-yellow-400 animate-star delay-${
//                   //   index * 100
//                   // }`}
//                   className={`animate-star delay-${index * 200}`}
//                   style={{
//                     position: "absolute",
//                     top: `${
//                       lightBulbRef.current.offsetTop +
//                       lightBulbRef.current.clientHeight / 4 +
//                       yOffset
//                     }px`,
//                     left: `${
//                       lightBulbRef.current.offsetLeft +
//                       lightBulbRef.current.clientWidth / 2 +
//                       xOffset
//                     }px`,
//                   }}
//                 />
//               );
//             })}
//           </motion.div>
//         )
//       );
//     };

//     const [animateStars, setAnimateStars] = useState(false);
//     const lightBulbRef = useRef(null);
//     useEffect(() => {
//       const handleScroll = () => {
//         // I want to add a click handler to the light bulb icon so every time it's clicked, it will trigger stars to appear on the screen
//         // I'm thinking of using a library called "react-confetti" to achieve this effect.

//         if (lightBulbRef.current) {
//           setAnimateStars(true);

//           setTimeout(() => {
//             setAnimateStars(false);
//           }, 1000);
//         }
//       };

//       window.addEventListener("scroll", handleScroll);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, []);

//   return (
//     <div className="fixed right-40 top-24 inline-block w-20 animate-pulse ">
//       <div style={{ position: "relative" }}>
//         <Image ref={lightBulbRef} src={lightBulb} className="w-full h-auto" />
//         <AnimatedStars
//           animateStars={animateStars}
//           lightBulbRef={lightBulbRef}
//         />
//       </div>
//     </div>
//   );
// }

// export default AnimatedLight