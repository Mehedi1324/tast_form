import React from 'react';
import { BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi';

const Travelers = () => {
  const roomSetUp = () => {
    for (let z = 0; z < 5; z++) {
      return (
        <div>
          {' '}
          <h1 className="text-white">Hello {z}</h1>
        </div>
      );
    }
  };
  console.log(roomSetUp());
  return (
    <div>
      {roomSetUp.map((r) => (
        <div>hello</div>
      ))}
    </div>
    // <div className="p-3 w-full">
    //   <h2>Room 1</h2>
    //   <div>
    //     <div className="flex justify-between items-center w-full">
    //       <div>
    //         <p>Adults</p>
    //       </div>
    //       <div className="flex space-x-2 items-center ">
    //         <BiSolidMinusCircle className="text-[25px]" /> <span>1</span>
    //         <BiSolidPlusCircle className="text-[25px]" />
    //       </div>
    //     </div>
    //     <div className="flex justify-between items-center w-full">
    //       <div>
    //         <p>Children</p>
    //       </div>
    //       <div className="flex space-x-2 items-center ">
    //         <BiSolidMinusCircle className="text-[25px]" /> <span>1</span>
    //         <BiSolidPlusCircle className="text-[25px]" />
    //       </div>
    //     </div>

    //     {/*____ Add children's age__ */}
    //   </div>
    //   <span>Add another room</span>
    // </div>
  );
};

export default Travelers;
