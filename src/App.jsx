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
    <div
      className="w-[90%] md:w-[85%]  
    -lg mx-auto mt-10 border-gray-500/20 shadow-md rounded-md p-5 border-[2px]"
    >
      <form action="">
        <div className="grid grid-cols-12 gap-4">
          {/*_________________________ Select Places_______________________ */}

          <div className="flex  relative cursor-pointer sm:col-span-7 lg:col-span-4 md:col-span-4 xs:col-span-12   px-2  space-x-1 items-center border-[1px] border-black/40 h-12 rounded-lg">
            <div
              className="flex w-full space-x-2 "
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              {' '}
              <FaMapMarkerAlt className="text-[22px]" /> <p>Going to</p>
            </div>
            {/*_________________________ Search bar / box______ _______________________*/}
            {showSearchBar && (
              <div className="z-10">
                <div className="shadow-lg border-[2px] border-gray-300 bg-slate-100 -top-1 -left-5 -right-3 min-h-[400px] rounded-lg absolute">
                  {' '}
                  <SearchBar />
                </div>
                <div
                  onClick={() => setShowSearchBar(false)}
                  className="absolute right-0 z-10 w-6 h-6 bg-black cursor-pointer top-2"
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
            className="flex  relative sm:col-span-5 cursor-pointer lg:col-span-3 md:col-span-4 xs:col-span-12  px-2  space-x-2 items-center border-[1px] border-black/40 h-12 rounded-lg"
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
            <div className="z-10 absolute md:top-[108px] xs:top-10 left-0 right-0 w-full flex justify-center mx-auto">
              <div
                onClick={() => setShowDatePicker(false)}
                className="z-10 w-6 h-6 -mr-6 bg-black cursor-pointer"
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
            className="flex sm:col-span-10 cursor-pointer  md:col-span-4 lg:col-span-3 xs:col-span-12  px-2  space-x-2 items-center border-[1px] border-black/40  rounded-lg"
          >
            <BiSolidUser className="text-[22px]" />{' '}
            <span>
              <p className="text-sm text-black/80">Travelers</p>
              <h2 className="font-semibold text-black/70">
                2 travelers, 1 room
              </h2>
            </span>
            {/*_________________________ select rooms and / member information _____________________________*/}
          </div>
          {showTravelers && (
            <div className="absolute z-10 h-[100%] overflow-scroll bg-slate-100 p-1 right-[18%] lg:left-[52%] lg:right-[18%] md:left-[50%] md:top-28 md:right-16 sm:left-[7%] sm:right-40 xs:top-[5%] xs:left-3 xs:right-3 sm:top-[175px] xs:bottom-2 top-28">
              <div>
                {' '}
                <Travelers />
              </div>
              <div
                onClick={() => setShowTravelers(false)}
                className="absolute right-0 z-10 w-6 h-6 bg-black cursor-pointer top-2"
              >
                ❌
              </div>
            </div>
          )}

          {/* Submit Button____________ */}
          <div className="sm:col-span-2 xs:col-span-12 ">
            <input
              type="submit"
              className="w-full h-12 font-semibold text-white bg-blue-700 rounded-lg cursor-pointer text-md"
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
