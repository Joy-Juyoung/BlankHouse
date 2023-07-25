import React, { useState } from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { DropBackDrop, GuestsCloseBtn, GuestsCount, GuestsDropdown } from './ExDetailStyle';


const ExGuestDropdown = ({ setIsGuests, guestsNum, setGuestsNum }) => {
  // const [count, setCount] = useState(0);
  const [adultNum, setAdultNum] = useState(1);
  const [childrenNum, setChildrenNum] = useState(0);
  const [infantsNum, setInfantsNum] = useState(0);
 
  // console.log('count', count);
  useEffect(() => {
    setAdultNum(guestsNum);
  }, []);

  useEffect(() => {
    setGuestsNum(adultNum + childrenNum + infantsNum );
  }, [adultNum, childrenNum, infantsNum]);

  return (
    <>
      <GuestsDropdown
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul>
          <li>
            <div>
              <p>Adults</p>
              <span>Age 13+</span>
            </div>
            <GuestsCount>
              <button
                name='adults'
                style={{ opacity: adultNum === 0 ? '0.25' : '1' }}
                onClick={() => adultNum !== 0 && setAdultNum(adultNum - 1)}
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{adultNum}</span>
              <button name='adults' onClick={() => setAdultNum(adultNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </li>
          <li>
            <div>
              <p>Children</p>
              <span>Age 13+</span>
            </div>
            <GuestsCount>
              <button
                name='children'
                style={{ opacity: adultNum === 0 ? '0.25' : '1' }}
                onClick={() =>
                  childrenNum !== 0 && setChildrenNum(childrenNum - 1)
                }
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{childrenNum}</span>
              <button
                name='children'
                onClick={() => setChildrenNum(childrenNum + 1)}
              >
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </li>
          <li>
            <div>
              <p>Infants</p>
              <span>Age 13+</span>
            </div>
            <GuestsCount>
              <button
                name='infants'
                style={{ opacity: adultNum === 0 ? '0.25' : '1' }}
                onClick={() =>
                  infantsNum !== 0 && setInfantsNum(infantsNum - 1)
                }
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{infantsNum}</span>
              <button
                name='infants'
                onClick={() => setInfantsNum(infantsNum + 1)}
              >
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </li>          
        </ul>
        <GuestsCloseBtn>
          <span onClick={() => setIsGuests(false)}>Save</span>
        </GuestsCloseBtn>
      </GuestsDropdown>
      <DropBackDrop onClick={() => setIsGuests(false)} />
    </>
  );
};

export default ExGuestDropdown;
