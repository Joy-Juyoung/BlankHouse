import React, { useState, useEffect } from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { GuestsCount } from '../../pages/Room/RoomSideStyle';
import styled from 'styled-components';

const SearchGuestsDropdown = styled.div`
  background: #fff;
  padding: 10px;
  width: 400px;
  position: absolute;
  top: 70px;
  /* left: 0; */
  right: -100px;
  z-index: 5;
  cursor: auto;

  border-radius: 30px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);

  ul {
    list-style: none;
    padding: 0 10px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #dddd;
    padding-bottom: 20px;

    &.last {
      border: none;
      padding-bottom: 0;
    }
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 400;
    font-size: 14px;
  }
`;

const SearchDropBackDrop = styled.div`
  position: fixed;
  top: 160px;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  cursor: auto;

  overflow: hidden;
`;

const SearchGuestsBox = ({
  setIsGuests,
  guestsNum,
  setGuestsNum,
  toggleSearchModal,
}) => {
  // const [count, setCount] = useState(0);
  const [adultNum, setAdultNum] = useState(0);
  const [childrenNum, setChildrenNum] = useState(0);
  const [infantsNum, setInfantsNum] = useState(0);
  const [petsNum, setPetsNum] = useState(0);

  // console.log('count', count);
  useEffect(() => {
    setAdultNum(guestsNum);
  }, []);

  useEffect(() => {
    setGuestsNum(adultNum + childrenNum + infantsNum + petsNum);
  }, [adultNum, childrenNum, infantsNum, petsNum]);

  return (
    <>
      <SearchGuestsDropdown
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
          <li className='last'>
            <div>
              <p>Pets</p>
              <span>Bringing a service animal?</span>
            </div>
            <GuestsCount>
              <button
                name='pets'
                style={{ opacity: adultNum === 0 ? '0.25' : '1' }}
                onClick={() => petsNum !== 0 && setPetsNum(petsNum - 1)}
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{petsNum}</span>
              <button name='pets' onClick={() => setPetsNum(petsNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </li>
        </ul>
      </SearchGuestsDropdown>
      <SearchDropBackDrop onClick={() => toggleSearchModal(false)} />
    </>
  );
};

export default SearchGuestsBox;
