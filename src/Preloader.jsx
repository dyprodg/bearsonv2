import React, { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import GrainEffect from './GrainEffect';

const Preloader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="Preloader">
    {
      loading ?
      (
        <>
          <GrainEffect />
          <PuffLoader 
            size={300}
            color={"#9C4D26"}
            loading={loading}
          />
        </>
      )
      : null
    }
    </div>
  );
};

export default Preloader;
