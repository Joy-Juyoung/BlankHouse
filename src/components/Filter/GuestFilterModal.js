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

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];
// const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const GuestFilterModal = ({
  modalFilterShown,
  toggleFilterModal,
  filterRoomInfo,
  averagePrice,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [bedrooms, setBedrooms] = useState('Any');
  const [beds, setBeds] = useState('Any');
  const [bethrooms, setBethrooms] = useState('Any');
  const [value, setValue] = React.useState([200, 700]);

  // const [propety, setPropety] = useState('');
  const [house, setHouse] = useState('');
  const [apartment, setApartment] = useState('');
  const [guesthouse, setGuesthouse] = useState('');
  const [hotel, setHotel] = useState('');
  const [isPropertyClick1, setIsPropertyClick1] = useState(false);
  const [isPropertyClick2, setIsPropertyClick2] = useState(false);
  const [isPropertyClick3, setIsPropertyClick3] = useState(false);
  const [isPropertyClick4, setIsPropertyClick4] = useState(false);

  const [owner_name, setOwner_name] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [house_type, setHouse_type] = useState('');
  const [mininum_price, setMininum_price] = useState('');
  const [maximum_price, setMaximum_price] = useState('');
  const [maximum_guests, setMaximum_guests] = useState('');
  const [check_in, setCheck_in] = useState('');
  const [check_out, setCheck_out] = useState('');

  const dispatch = useDispatch();

  const handleCheckedType = (e) => {
    console.log('checked type', e.target.value);
    setHouse_type(e.target.value);
  };

  const handleClickFilter = () => {
    toggleFilterModal(false);
    dispatch(
      getFilterRoomsAsync({
        owner_name: owner_name || '',
        country: country || '',
        city: city || '',
        category: category || '',
        maximum_guests: maximum_guests || '',
        check_in: check_in || '',
        check_out: check_out || '',

        house_type: house_type || '',
        number_of_beds: beds === 'Any' ? '' : beds,
        number_of_bedrooms: bedrooms === 'Any' ? '' : bedrooms,
        number_of_toilets: bethrooms === 'Any' ? '' : bethrooms,
        mininum_price: mininum_price || '',
        maximum_price: maximum_price || '',
      })
    );
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
                setMininum_price={setMininum_price}
                setMaximum_price={setMaximum_price}
              />
            </PriceRangeBarWrap>
            <PriceRangeWrap>
              <PriceRangeWrapper>
                <PriceRangeLabel>min price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput type='text' value={mininum_price || '000'} />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
              <PriceBetween>-</PriceBetween>
              <PriceRangeWrapper>
                <PriceRangeLabel>max price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput
                    type='text'
                    value={(maximum_price || '000') + '+'}
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
                  onChange={handleCheckedType}
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
                  onChange={handleCheckedType}
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
                  onChange={handleCheckedType}
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
          <FilterClearBtn>Clear all</FilterClearBtn>
          <FilterResultBtn onClick={handleClickFilter}>Show</FilterResultBtn>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default GuestFilterModal;
