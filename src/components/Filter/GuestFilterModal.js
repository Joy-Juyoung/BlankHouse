import React, { useEffect, useState } from 'react';
import Modal from '../Modals/ModalLayout';
import {
  FilterClearBtn,
  FilterResultBtn,
  ModalContainer,
  ModalFooter,
  ModalMain,
  ModalMainSection,
  ModalMainText,
  ModalMainTitle,
  PlaceInput,
  PlaceInputText,
  PlaceTypeWrap,
  PlaceTypeWrapper,
  PriceBetween,
  PriceCurrency,
  PriceInput,
  PriceRangeBarWrap,
  PriceRangeInputSection,
  PriceRangeLabel,
  PriceRangeWrap,
  PriceRangeWrapper,
  RoomBedOption,
  RoomBedOptionList,
  RoomBedWrap,
  RoomBedWrapper,
} from '../Modals/ModalStyle';
import FilterPriceRage from './FilterPriceRage';
import { useDispatch } from 'react-redux';
import { getFilterRoomsAsync } from '../../redux/slices/roomSlice';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const GuestFilterModal = ({
  modalFilterShown,
  toggleFilterModal,
  filterRoomInfo,
  averagePrice,
  maxPrice,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [bedrooms, setBedrooms] = useState('Any');
  const [beds, setBeds] = useState('Any');
  const [bethrooms, setBethrooms] = useState('Any');

  const [selectedType, setSelectedType] = useState('');

  // const [owner_name, setOwner_name] = useState('');
  // const [country, setCountry] = useState('');
  const [houseType, setHouseType] = useState('');
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(2000);
  const [isUnder, setIsUnder] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [value, setValue] = React.useState([
    Number(minimumPrice),
    Number(maximumPrice),
  ]);
  // const [maximum_guests, setMaximum_guests] = useState('');
  const [check_in, setCheck_in] = useState('');
  const [check_out, setCheck_out] = useState('');

  const dispatch = useDispatch();

  const handleClickFilter = () => {
    toggleFilterModal(false);
    dispatch(
      getFilterRoomsAsync({
        keyword:
          JSON.parse(localStorage.getItem('getSearched')) !== null
            ? JSON.parse(localStorage.getItem('getSearched')).where
            : '',
        //city: city || '',
        category:
          JSON.parse(localStorage.getItem('getCategory')) !== null
            ? JSON.parse(localStorage.getItem('getCategory'))
            : '',
        maximum_guests:
          JSON.parse(localStorage.getItem('getSearched')) !== null
            ? JSON.parse(localStorage.getItem('getSearched')).who
            : '',
        check_in: check_in || '',
        check_out: check_out || '',

        house_type: houseType || '',
        number_of_beds: beds === 'Any' ? '' : beds,
        number_of_bedrooms: bedrooms === 'Any' ? '' : bedrooms,
        number_of_toilets: bethrooms === 'Any' ? '' : bethrooms,
        mininum_price: minimumPrice || '',
        maximum_price: maximumPrice || '',
      })
    );
  };

  const handleClearFilter = () => {
    setBedrooms('Any');
    setBeds('Any');
    setBethrooms('Any');
    setValue([0, 2000]);

    setSelectedType('');
    setHouseType('');
    setMinimumPrice('');
    setMaximumPrice('');
  };

  const handlePriceMax = (e) => {
    if (e.target.value > 2000) {
      setMaximumPrice(2000);
      setIsOver(true);
    } else {
      setMaximumPrice(e.target.value);
      setIsOver(false);
    }
  };

  const handlePriceMin = (e) => {
    if (e.target.value < 0) {
      setMinimumPrice(0);
      setIsUnder(true);
    } else {
      setMinimumPrice(e.target.value);
      setIsUnder(false);
    }
  };

  // console.log('maximumPrice', maximumPrice);

  return (
    <Modal
      shown={modalFilterShown}
      close={() => {
        toggleFilterModal(false);
        setMaximumPrice(2000);
        setIsOver(false);
        setIsUnder(false);
      }}
      title='Filters'
    >
      <ModalContainer className='filter'>
        <ModalMain className='filter'>
          <ModalMainSection>
            <ModalMainTitle>Price range</ModalMainTitle>
            <ModalMainText>
              The average nightly price is ${averagePrice?.toFixed(2)}
            </ModalMainText>
            <PriceRangeBarWrap>
              <FilterPriceRage
                value={value}
                setValue={setValue}
                setMinimumPrice={setMinimumPrice}
                minimumPrice={minimumPrice}
                setMaximumPrice={setMaximumPrice}
                maximumPrice={maximumPrice}
              />
            </PriceRangeBarWrap>
            <PriceRangeWrap>
              <PriceRangeWrapper>
                <PriceRangeLabel>
                  min price
                  <span
                    style={{
                      color: isUnder && 'red',
                      marginLeft: isUnder && '5px',
                    }}
                  >
                    {isUnder && '*not allowed negative number'}
                  </span>
                </PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput
                    type='number'
                    value={minimumPrice}
                    name='min'
                    // placeholder='0'
                    min='0'
                    max='2000'
                    // onChange={(e) => setMinimumPrice(e.target.value)}
                    onChange={handlePriceMin}
                  />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
              <PriceBetween>-</PriceBetween>
              <PriceRangeWrapper>
                <PriceRangeLabel>
                  max price
                  <span
                    style={{
                      color: isOver && 'red',
                      marginLeft: isOver && '5px',
                    }}
                  >
                    {isOver && '*up to $2,000'}
                  </span>
                </PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput
                    type='number'
                    // value={maximumPrice?.toLocaleString('en-US', {
                    //   style: 'decimal',
                    // })}
                    value={maximumPrice}
                    name='max'
                    // placeholder='2,000'
                    min='0'
                    max='2000'
                    // onChange={(e) => setMaximumPrice(e.target.value)}
                    onChange={handlePriceMax}
                  />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
            </PriceRangeWrap>
            {/* {isOver && <span> *It is over</span>} */}
          </ModalMainSection>

          <ModalMainSection>
            <ModalMainTitle>Type of place</ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='radio'
                  name='type'
                  value='entire_place'
                  checked={selectedType === 'entire_place'}
                  onChange={(e) => {
                    setHouseType(e.target.value);
                    setSelectedType(e.target.value);
                  }}
                />
                <PlaceInputText>
                  <p>Entire Place</p>
                  <span>A Place all to youreself</span>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='radio'
                  name='type'
                  value='private_room'
                  checked={selectedType === 'private_room'}
                  onChange={(e) => {
                    setHouseType(e.target.value);
                    setSelectedType(e.target.value);
                  }}
                />
                <PlaceInputText>
                  <p>Private Room</p>
                  <span>Your own room, plus access to shared spaces</span>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='radio'
                  name='type'
                  value='shared_room'
                  checked={selectedType === 'shared_room'}
                  onChange={(e) => {
                    setHouseType(e.target.value);
                    setSelectedType(e.target.value);
                  }}
                />
                <PlaceInputText>
                  <p>Shared room</p>
                  <span>
                    A sleeping space and common areas that may be shared with
                    others
                  </span>
                </PlaceInputText>
              </PlaceTypeWrapper>
            </PlaceTypeWrap>
          </ModalMainSection>

          <ModalMainSection>
            <ModalMainTitle>Rooms and beds</ModalMainTitle>
            <RoomBedWrap>
              <RoomBedWrapper>
                <p>Bedrooms</p>
                <RoomBedOptionList>
                  {anyOptionList.map((option, index) => {
                    return (
                      <RoomBedOption
                        key={index}
                        selected={option === bedrooms ? true : false}
                        onClick={() => setBedrooms(option)}
                      >
                        {option}
                      </RoomBedOption>
                    );
                  })}
                </RoomBedOptionList>
              </RoomBedWrapper>
              <RoomBedWrapper>
                <p>Beds</p>
                <RoomBedOptionList>
                  {anyOptionList.map((option, index) => {
                    return (
                      <RoomBedOption
                        key={index}
                        selected={option === beds ? true : false}
                        onClick={() => setBeds(option)}
                      >
                        {option}
                      </RoomBedOption>
                    );
                  })}
                </RoomBedOptionList>
              </RoomBedWrapper>
              <RoomBedWrapper>
                <p>Bethrooms</p>
                <RoomBedOptionList>
                  {anyOptionList.map((option, index) => {
                    return (
                      <RoomBedOption
                        key={index}
                        selected={option === bethrooms ? true : false}
                        onClick={() => setBethrooms(option)}
                      >
                        {option}
                      </RoomBedOption>
                    );
                  })}
                </RoomBedOptionList>
              </RoomBedWrapper>
            </RoomBedWrap>
          </ModalMainSection>
        </ModalMain>
        <ModalFooter>
          <FilterClearBtn onClick={handleClearFilter}>Clear all</FilterClearBtn>
          <FilterResultBtn onClick={handleClickFilter}>Show</FilterResultBtn>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default GuestFilterModal;
