import React from "react";
import { useSpring, animated } from "@react-spring/web";

export const NumberStats = ({ n, label }) => {
  const { number } = useSpring({
    number: n,
    from: { number: 0 },
    config: { mass: 1, tension: 20, friction: 10 },
    delay: 200,
  });

  return (
    <div className="flex flex-col items-center">
      <animated.div className="text-4xl font-bold">
        {number.to((n) => n.toFixed(0))}
      </animated.div>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
};
