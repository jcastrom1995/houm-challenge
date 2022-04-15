import React, { useEffect, useState } from "react";
import Image from "next/image";

import s from "./Loading.module.css";

const Loading = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 3) {
        setCount(1);
        return;
      }

      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className={s.loading}>
      <Image
        src={`/loading/${count}.jpg`}
        width={300}
        height={300}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
