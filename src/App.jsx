import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiCalendar, BiSolidUser } from 'react-icons/bi';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import SearchBar from './Components/SearchBar';
import Travelers from './Components/Travelers';

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // Modal showing statements__________________________________
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);

  // __________________________________________________________

  return (
    <div className="w-[90%] md:w-[85%] shadow-lg mx-auto mt-10 border-gray-500/20 rounded-md p-5 border-[2px]">
      <form action="">
        <div className="grid grid-cols-12 gap-4">
          {/*_________________________ Select Places_______________________ */}

          <div
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="flex relative cursor-pointer sm:col-span-7 lg:col-span-4 md:col-span-4 xs:col-span-12   px-2  space-x-1 items-center border-[1px] border-black/40 h-12 rounded-lg"
          >
            <FaMapMarkerAlt className="text-[22px]" /> <p>Going to</p>
            {/*_________________________ Search bar / box______ _______________________*/}
            {showSearchBar && (
              <div>
                <div className="shadow-lg border-[2px] border-gray-300 bg-slate-100 -top-1 -left-5 -right-3 min-h-[400px] rounded-lg absolute">
                  {' '}
                  <SearchBar />
                </div>
                <div
                  onClick={() => setShowSearchBar(false)}
                  className="bg-black w-6 absolute cursor-pointer z-10 h-6 top-2 right-0"
                >
                  ❌
                </div>
              </div>
            )}
          </div>

          {/*__________________________ Select Date _____________________________ */}
          <div
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex relative sm:col-span-5 cursor-pointer lg:col-span-3 md:col-span-4 xs:col-span-12  px-2  space-x-2 items-center border-[1px] border-black/40 h-12 rounded-lg"
          >
            <BiCalendar className="text-[22px]" />{' '}
            <span>
              <p className="text-sm text-black/80">Dates</p>
              <h2 className="font-semibold text-black/70">{`${format(
                date[0]?.startDate,
                'MMM d'
              )} ${''} -to- ${''} ${format(date[0]?.endDate, 'MMM d')}`}</h2>
            </span>
          </div>

          {/*__________________ Date range picker__________________ */}
          {showDatePicker && (
            <div className="absolute md:top-[108px] xs:top-10 left-0 right-0 w-full flex justify-center mx-auto">
              <div
                onClick={() => setShowDatePicker(false)}
                className="bg-black w-6 -mr-6 cursor-pointer z-10 h-6"
              >
                ❌
              </div>
              <DateRange
                className="shadow-lg border-gray-400/10 border-[2px] xs:w-[95%] xs:h-[80vh] md:h-auto md:w-auto  font-bold bg-slate-200"
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={date}
                direction="horizontal"
              />
            </div>
          )}

          {/*___________ Total rooms and travelers _________ */}

          <div
            onClick={() => setShowTravelers(!showTravelers)}
            className="flex sm:col-span-10 cursor-pointer md:col-span-4 lg:col-span-3 xs:col-span-12  px-2  space-x-2 items-center border-[1px] border-black/40 h-12 rounded-lg"
          >
            <BiSolidUser className="text-[22px]" />{' '}
            <span>
              <p className="text-sm text-black/80">Travelers</p>
              <h2 className=" font-semibold text-black/70">
                2 travelers, 1 room
              </h2>
            </span>
            {/*_________________________ select rooms and / member information _____________________________*/}
          </div>
          {showTravelers && (
            <div className="absolute bg-black right-32 top-28">
              <div>
                {' '}
                <Travelers />
              </div>
              <div
                onClick={() => setShowTravelers(false)}
                className="bg-black w-6 absolute cursor-pointer z-10 h-6 top-2 right-0"
              >
                ❌
              </div>
            </div>
          )}

          {/* Submit Button____________ */}
          <div className="sm:col-span-2 xs:col-span-12 ">
            <input
              type="submit"
              className="bg-blue-700 font-semibold cursor-pointer text-md  text-white w-full h-12 rounded-lg"
              value="Search"
            />
          </div>
        </div>

        {/*______________ _______________ Additional Services____________________ */}

        <div className="mt-5 space-x-3 ">
          <span className="text-sm cursor-pointer border-[1px]  border-black rounded-full py-1 px-2">
            Add a flight
          </span>
          <span className="text-sm cursor-pointer border-[1px]  border-black rounded-full py-1 px-2">
            Add a flight
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;
