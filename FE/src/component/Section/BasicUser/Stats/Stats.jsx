import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ n, label }) {
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
}

export const Stats = () => {
  return (
    <section >
      <div className="max-w-screen-xl px-4 pb-5 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          <a className="flex items-center lg:justify-center">
            <Number n={360} label="Pengguna Terdaftar" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Number n={55} label="Pelaporan Terpublikasi" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Number n={499} label="Pelaporan Parkir Liar" />
          </a>{" "}
          <a className="flex items-center lg:justify-center">
            <Number n={300} label="Pelaporan Petugas Parkir Liar" />
          </a>
        </div>
      </div>
    </section>
  );
};
