import React, { useState } from 'react';
import Modal from './Modal';
import {
  FilterClearBtn,
  FilterResultBtn,
  ModalContainer,
  ModalFooter,
  ModalMain,
  ModalMainSection,
  ModalMainSectionTwo,
  ModalMainText,
  ModalMainTitle,
  PlaceInput,
  PlaceInputText,
  PlaceNameText,
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
  ShowAllBtn,
  ShowAllWrap,
} from './ExperienceFilterModalStyle';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import GiteIcon from '@mui/icons-material/Gite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ExPriceRage from './ExPriceRage';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];






const ExperienceFilterModal = ({ modalShown, toggleModal }) => {
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
            <ModalMainTitle>Activity</ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Art and culture'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Art and culture</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Entertainment'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Entertainment</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Food and drink'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Food and drink</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Sports'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Sports</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Tours'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Tours</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Sightseeing'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Sightseeing</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Wellness'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Wellness</p>                  
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Nature and outdoors'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Nature and outdoors</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              {/* show all button  */}
              <ShowAllWrap>
                <ShowAllBtn>
                <span>Hide activity types</span>
                </ShowAllBtn>
              </ShowAllWrap>
            </PlaceTypeWrap>
          </ModalMainSection>

          <ModalMainSection>
            <ModalMainTitle>Price range</ModalMainTitle>
            <ModalMainText>The average price of an experience is $000 CAD.</ModalMainText>
            <PriceRangeBarWrap>
              <ExPriceRage/>
              </PriceRangeBarWrap>
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
            <ModalMainTitle>Language offered</ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='English'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>English</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='French'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>French</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='German'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>German</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Korean'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Korean</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
               {/* show more button  */}
              <ShowAllWrap>
                <ShowAllBtn>
                <span>
                  Show less
                </span>
                </ShowAllBtn>
              </ShowAllWrap>
            </PlaceTypeWrap>
          </ModalMainSection>

          <ModalMainSection>
            <ModalMainTitle>Time of day</ModalMainTitle>
            <PlaceTypeWrap>
            <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Morning'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceNameText>
                  <p>Morning</p>
                  <span>Starts before 12 pm</span>
                </PlaceNameText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Afternoon'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceNameText>
                  <p>Afternoon</p>
                  <span>Starts after 12 pm</span>
                </PlaceNameText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Evening'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceNameText>
                  <p>Evening</p>
                  <span>Starts after 5 pm</span>
                </PlaceNameText>
              </PlaceTypeWrapper>
            </PlaceTypeWrap>
          </ModalMainSection>

          <ModalMainSectionTwo>
            <ModalMainTitle>Accessibility features</ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <h3>Mobility</h3>              
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>         
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='No stairs or steps'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>No stairs or steps</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Accessible bathroom'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Accessible bathroom</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Accessible parking spot'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Accessible parking spot</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Mainly flat or levelled ground'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Mainly flat or levelled ground</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <h3>Communication</h3>              
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>         
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Detailed audio or verbal information'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Detailed audio or verbal information</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Sign language'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Sign language</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Deaf-aware techniques'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Deaf-aware techniques</p>                  
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Designated sighted guide'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Designated sighted guide</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <h3>Sensory</h3>              
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>         
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='No extreme sensory stimuli'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>No extreme sensory stimuli</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Quiet retreat space'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceInputText>
                  <p>Quiet retreat space</p>
                </PlaceInputText>
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <h3>Access providers</h3>              
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>         
              </PlaceTypeWrapper>
              <PlaceTypeWrapper>
                <PlaceInput
                  type='checkbox'
                  value='Free admission for people assisting guests with disabilities'
                  onChange={(e) => handleCheckedType(e)}
                />
                <PlaceNameText>
                  <p>Free admission for people assisting guests with disabilities</p>
                  <span>
                    Interpreters, caregivers, or other access providers are welcome to join the guests they’re assisting at no additional cost.
                  </span>
                </PlaceNameText>
              </PlaceTypeWrapper>
            </PlaceTypeWrap>
          </ModalMainSectionTwo>

        </ModalMain>
        <ModalFooter>
          <FilterClearBtn>Clear all</FilterClearBtn>
          <FilterResultBtn>Show 49 results</FilterResultBtn>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default ExperienceFilterModal;
