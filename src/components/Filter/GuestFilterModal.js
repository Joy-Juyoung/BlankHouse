import React, { useState } from 'react';
import Modal from '../Modals/Modal';
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

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const GuestFilterModal = ({ modalFilterShown, toggleFilterModal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [bedrooms, setBedrooms] = useState('Any');
  const [beds, setBeds] = useState('Any');
  const [bethrooms, setBethrooms] = useState('Any');

  // const [propety, setPropety] = useState('');
  const [house, setHouse] = useState('');
  const [apartment, setApartment] = useState('');
  const [guesthouse, setGuesthouse] = useState('');
  const [hotel, setHotel] = useState('');
  const [isPropertyClick1, setIsPropertyClick1] = useState(false);
  const [isPropertyClick2, setIsPropertyClick2] = useState(false);
  const [isPropertyClick3, setIsPropertyClick3] = useState(false);
  const [isPropertyClick4, setIsPropertyClick4] = useState(false);

  const handleCheckedType = (e) => {
    console.log('checked type', e.target.value);
  };

  return (
    <Modal
      shown={modalFilterShown}
      close={() => {
        toggleFilterModal(false);
      }}
      title='Filters'
    >
      <ModalContainer>
        <ModalMain>
          <ModalMainSection>
            <ModalMainTitle>Price range</ModalMainTitle>
            <ModalMainText>The average nightly price is $000,000</ModalMainText>
            <PriceRangeBarWrap>
              {/* <PriceRangeGraph>range graph</PriceRangeGraph> */}
              <FilterPriceRage />
            </PriceRangeBarWrap>
            <PriceRangeWrap>
              <PriceRangeWrapper>
                <PriceRangeLabel>min price</PriceRangeLabel>
                <PriceRangeInputSection>
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
                  setIsPropertyClick1(!isPropertyClick1);
                }}
                clicked={house && isPropertyClick1 ? true : false}
              >
                <HomeIcon fontSize='large' />
                <p>House</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setApartment('Apartment');
                  setIsPropertyClick2(!isPropertyClick2);
                }}
                clicked={apartment && isPropertyClick2 ? true : false}
              >
                <DomainIcon fontSize='large' />
                <p>Apartment</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setGuesthouse('Guesthouse');
                  setIsPropertyClick3(!isPropertyClick3);
                }}
                clicked={guesthouse && isPropertyClick3 ? true : false}
              >
                <GiteIcon fontSize='large' />
                <p>Guesthouse</p>
              </PropertyWrpper>
              <PropertyWrpper
                onClick={() => {
                  setHotel('Hotel');
                  setIsPropertyClick4(!isPropertyClick4);
                }}
                clicked={hotel && isPropertyClick4 ? true : false}
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
