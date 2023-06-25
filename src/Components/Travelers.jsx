import React, { useState } from 'react';

import Rooms from './Rooms';
import useData from '../Context/useData';
import { travelersData } from '../Context/DataProvider';

const Travelers = () => {
  const { roomNumber, setRoomeNumber, totalTravelers, setTotalTravelers } =
    travelersData();

  //   Room Collection________________________________________________________

  const collectRoom = () => {
    let roomCollection = [];
    const [adultsQuantity, setAdultsQuantity] = useState(1);
    for (let i = 1; i <= roomNumber; i++) {
      roomCollection.push(
        <Rooms i={i} setRoomeNumber={setRoomeNumber} roomNumber={roomNumber} />
      );
    }
    return roomCollection;
  };

  const roomCollectionArray = collectRoom();
  console.log(roomCollectionArray);

  return (
    <div>
      <div className="rounded-sm shadow-lg">
        {' '}
        {roomCollectionArray.map((tag) => tag)}{' '}
      </div>
      <div
        className="font-bold text-right text-blue-600 cursor-pointer"
        onClick={() => setRoomeNumber(roomNumber + 1)}
      >
        Add another room
      </div>{' '}
    </div>
  );
};

export default Travelers;
