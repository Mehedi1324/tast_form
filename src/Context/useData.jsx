import React, { useState } from 'react';

const useData = () => {
  const [roomNumber, setRoomeNumber] = useState(1);

  const [totalTravelers, setTotalTravelers] = useState(1);
  return {
    roomNumber,
    setRoomeNumber,
    totalTravelers,
    setTotalTravelers,
  };
};

export default useData;
