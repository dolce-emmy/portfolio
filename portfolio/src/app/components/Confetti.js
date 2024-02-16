import React from 'react'

const Confetti = () => {
  //   const [showConfetti, setShowConfetti] = useState(false);

  //   const [brightness, setBrightness] = useState(false);
  //   useEffect(() => {

  //     setShowConfetti(true);
  //     const timeoutId = setTimeout(() => {
  //       setShowConfetti(false);
  //     }, 4000);

  // const handleScroll = () => {
    
  // here I am saying if brightness is false, then set it to true
  //   if (!brightness) {
  //     setBrightness(true);
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);

  // return () => {
  //   clearTimeout(timeoutId);
  //   window.removeEventListener("scroll", handleScroll);

  // };

  //   }, [brightness]);

  return (
    <div>
      {/* <Confetti
        width={1920}
        height={1030}
        numberOfPieces={showConfetti ? 200 : 0}
        // here the initial velocity controls the direction of the falling confetti and it's adjusted to 50 to make it fall in a straight line
        initialVelocityY={50}
      /> */}
    </div>
  );
}

export default Confetti