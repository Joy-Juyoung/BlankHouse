import React, { useEffect, useState } from 'react';
import Modal from '../Modals/ModalLayout';
import {
  FilterClearBtn,
  FilterPriceRageGraph,
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
  PriceRangeGraph,
  PriceRangeInputSection,
  PriceRangeLabel,
  PriceRangeWrap,
  PriceRangeWrapper,
  PropertyWrap,
  PropertyWrpper,
  RoomBedOption,
  RoomBedOptionList,
  RoomBedWrap,
  RoomBedWrapper,
} from '../Modals/ModalStyle';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import GiteIcon from '@mui/icons-material/Gite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FilterPriceRage from './FilterPriceRage';
import { useDispatch } from 'react-redux';
import {
  getAllRoomsAsync,
  getFilterRoomsAsync,
} from '../../redux/slices/roomSlice';
import { useParams } from 'react-router-dom';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];
// const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const GuestFilterModal = ({
  modalFilterShown,
  toggleFilterModal,
  filterRoomInfo,
  averagePrice,
  maxPrice,
}) => {
  // const {
  //   house_type,
  //   number_of_beds,
  //   number_of_bedrooms,
  //   number_of_toilets,
  //   mininum_price,
  //   maximum_price,
  // } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  const [bedrooms, setBedrooms] = useState('Any');
  const [beds, setBeds] = useState('Any');
  const [bethrooms, setBethrooms] = useState('Any');
  const [value, setValue] = React.useState([0, 2000]);

  const [selectedType, setSelectedType] = useState('');

  const [owner_name, setOwner_name] = useState('');
  const [country, setCountry] = useState('');
  const [houseType, setHouseType] = useState('');
  const [mininumPrice, setMininumPrice] = useState('');
  const [maximumPrice, setMaximumPrice] = useState('');
  const [maximum_guests, setMaximum_guests] = useState('');
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
        mininum_price: mininumPrice || '',
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
    setMininumPrice('');
    setMaximumPrice('');
  };

  return (
    <Modal
      shown={modalFilterShown}
      close={() => {
        toggleFilterModal(false);
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
                setMininumPrice={setMininumPrice}
                setMaximumPrice={setMaximumPrice}
              />
            </PriceRangeBarWrap>
            <PriceRangeWrap>
              <PriceRangeWrapper>
                <PriceRangeLabel>min price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput
                    type='text'
                    value={
                      mininumPrice?.toLocaleString('en-US', {
                        style: 'decimal',
                      }) || '0'
                    }
                    onChange={(e) => setMininumPrice(e.target.value)}
                  />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
              <PriceBetween>-</PriceBetween>
              <PriceRangeWrapper>
                <PriceRangeLabel>max price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput
                    type='text'
                    value={
                      maximumPrice?.toLocaleString('en-US', {
                        style: 'decimal',
                      }) || '2,000'
                    }
                    onChange={(e) => setMaximumPrice(e.target.value)}
                  />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
            </PriceRangeWrap>
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
