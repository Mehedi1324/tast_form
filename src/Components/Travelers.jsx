import React, { useState } from 'react';
import { BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi';

const Travelers = () => {
  const [roomNumber, setRoomeNumber] = useState(1);
  const [childrenQuantity, setChildrenQuantity] = useState(0);

  // Children age ___________________________

  const childrenAge = () => {
    const childrenAgeCard = [];
    const childrenAgeCollection = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    ];
    for (let i = 0; i < childrenQuantity; i++) {
      childrenAgeCard.push(
        <div>
          <p>Children's age</p>
          <select>
            {childrenAgeCollection.map((age) => (
              <option>{age}</option>
            ))}
          </select>
        </div>
      );
    }
    return childrenAgeCard;
    console.log(childrenAgeCard);
  };

  const childernCollectionArray = childrenAge();

  //   Room Collection________________________________________________________

  const collectRoom = () => {
    const [adultsQuantity, setAdultsQuantity] = useState(1);
    const roomCollection = [];
    for (let i = 1; i <= roomNumber; i++) {
      roomCollection.push(
        <div
          key={i}
          className="  p-3 space-y-5 shadow-md border-[1px] border-gray-500/10"
        >
          <h2 className="text-lg font-bold">Room {i}</h2>
          <div className="space-y-3 text-gray-800/90">
            <div className="flex items-center justify-between w-full">
              <div>
                <p>Adults</p>
              </div>
              <div className="flex items-center space-x-2 ">
                <BiSolidMinusCircle
                  onClick={() => setAdultsQuantity(adultsQuantity - 1)}
                  className="text-[25px] cursor-pointer"
                />{' '}
                <span>{adultsQuantity}</span>
                <BiSolidPlusCircle
                  onClick={() => setAdultsQuantity(adultsQuantity + 1)}
                  className="text-[25px] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <p>Children</p>
              </div>
              <div className="flex items-center space-x-2 ">
                <BiSolidMinusCircle
                  onClick={() => setChildrenQuantity(childrenQuantity - 1)}
                  className="text-[25px] cursor-pointer"
                />{' '}
                <span>{childrenQuantity}</span>
                <BiSolidPlusCircle
                  onClick={() => setChildrenQuantity(childrenQuantity + 1)}
                  className="text-[25px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/*______________ Add children's age______________ */}

          <div className="grid grid-cols-2 gap-4 ">
            {childernCollectionArray.map((age) => (
              <div className="border-[2px] bg-white text-gray-800/90 rounded-md p-1 text-center">
                {age}
              </div>
            ))}
          </div>
          {i > 1 && (
            <div
              className="w-full font-semibold text-right text-blue-600 cursor-pointer"
              onClick={() => setRoomeNumber(roomNumber - 1 || roomNumber > 0)}
            >
              Remove room
            </div>
          )}
        </div>
      );
    }
    return roomCollection;
  };

  const roomCollectionArray = collectRoom();

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
