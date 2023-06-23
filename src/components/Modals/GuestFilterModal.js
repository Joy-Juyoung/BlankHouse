import React, { useState } from 'react';
import Modal from './Modal';
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
  PropertyWrap,
  PropertyWrpper,
  RoomBedOption,
  RoomBedOptionList,
  RoomBedWrap,
  RoomBedWrapper,
} from './ModalStyle';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import GiteIcon from '@mui/icons-material/Gite';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const GuestFilterModal = ({ modalShown, toggleModal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [bedrooms, setBedrooms] = useState('Any');
  const [beds, setBeds] = useState('Any');
  const [bethrooms, setBethrooms] = useState('Any');

  // const [propety, setPropety] = useState('');
  const [house, setHouse] = useState('');
  const [apartment, setApartment] = useState('');
  const [guesthouse, setGuesthouse] = useState('');
  const [hotel, setHotel] = useState('');
  const [isPropetyClick1, setIsPropetyClick1] = useState(false);
  const [isPropetyClick2, setIsPropetyClick2] = useState(false);
  const [isPropetyClick3, setIsPropetyClick3] = useState(false);
  const [isPropetyClick4, setIsPropetyClick4] = useState(false);

  const handleCheckedType = (e) => {
    console.log('checked type', e.target.value);
  };

  return (
    <Modal
      shown={modalShown}
      close={() => {
        toggleModal(false);
      }}
      title='Filters'
    >
      <ModalContainer>
        <ModalMain>
          <ModalMainSection>
            <ModalMainTitle>Price range</ModalMainTitle>
            <ModalMainText>The average nightly price is $000,000</ModalMainText>
            <PriceRangeBarWrap>price bar</PriceRangeBarWrap>
            <PriceRangeWrap>
              <PriceRangeWrapper>
                <PriceRangeLabel>min price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput type='text' value='00000' />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
              <PriceBetween>-</PriceBetween>
              <PriceRangeWrapper>
                <PriceRangeLabel>max price</PriceRangeLabel>
                <PriceRangeInputSection>
                  <PriceCurrency>$</PriceCurrency>
                  <PriceInput type='text' value='00000+' />
                </PriceRangeInputSection>
              </PriceRangeWrapper>
            </PriceRangeWrap>
          </ModalMainSection>

          <ModalMainSection>
            <ModalMainTitle>Type of place</ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Entire Place'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Entire Place</p>
                  <span>A Place all to youreself</span>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Room'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Room</p>
                  <span>Your own room, plus access to shared spaces</span>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Shared room'
                  onChange={(e) => handleCheckedType(e)}
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

          <ModalMainSection>
            <ModalMainTitle>Property type</ModalMainTitle>
            <PropertyWrap>
              <PropertyWrpper
                onClick={() => {
                  setHouse('House');
                  setIsPropetyClick1(!isPropetyClick1);
                }}
                clicked={house && isPropetyClick1 ? true : false}
              >
                <HomeIcon fontSize='large' />
                <p>House</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setApartment('Apartment');
                  setIsPropetyClick2(!isPropetyClick2);
                }}
                clicked={apartment && isPropetyClick2 ? true : false}
              >
                <DomainIcon fontSize='large' />
                <p>Apartment</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setGuesthouse('Guesthouse');
                  setIsPropetyClick3(!isPropetyClick3);
                }}
                clicked={guesthouse && isPropetyClick3 ? true : false}
              >
                <GiteIcon fontSize='large' />
                <p>Guesthouse</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setHotel('Hotel');
                  setIsPropetyClick4(!isPropetyClick4);
                }}
                clicked={hotel && isPropetyClick4 ? true : false}
              >
                <LocationCityIcon fontSize='large' />
                <p>Hotel</p>
              </PropertyWrpper>
            </PropertyWrap>
          </ModalMainSection>

          {/* <ModalMainSection>
            <ModalMainTitle>Rooms and beds</ModalMainTitle>
            <ModalMainText>The average nightly price is $000,000</ModalMainText>
          </ModalMainSection> 
          */}
        </ModalMain>
        <ModalFooter>
          <FilterClearBtn>Clear all</FilterClearBtn>
          <FilterResultBtn>Show 000 stay</FilterResultBtn>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default GuestFilterModal;
