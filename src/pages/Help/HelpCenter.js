import React, { useEffect, useRef, useState } from 'react';
import { ButtonsWrapper } from '../Host/BecomeHost/StepStyle';
import {
  HelpContainer,
  HelpHeader,
  HelpMainWrap,
  HelpMainTop,
  HelpMainTitle,
  HelpMainSearch,
  HelpSearchWrapper,
  HelpMainNav,
  HelpNavWrapper,
  HelpMainContents,
  HelpContentsTitle,
  HelpContentsWrapper,
  HelpContentsList,
  HelpNav,
} from './HelpStyle';
import HelpCenterHeader from './HelpCenterHeader';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBtn } from '../../components/Header/HeaderStyle';

const HelpCenter = ({ userMe, isUserLogIn, setIsUserLogIn, setIsPageMain }) => {
  const [navGuest, setNavGuest] = useState(true);
  const [navHost, setNavHost] = useState(false);
  const [navExperience, setNavExperience] = useState(false);
  const [navAdmin, setNavAdmin] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    setIsPageMain(false);
  }, []);

  const handleNavClick = (e) => {
    if (e.target.id === 'guest') {
      setNavGuest(true);
      setNavHost(false);
      setNavExperience(false);
      setNavAdmin(false);
    }
    if (e.target.id === 'host') {
      setNavGuest(false);
      setNavHost(true);
      setNavExperience(false);
      setNavAdmin(false);
    }
    if (e.target.id === 'experience') {
      setNavGuest(false);
      setNavHost(false);
      setNavExperience(true);
      setNavAdmin(false);
    }
    if (e.target.id === 'admin') {
      setNavGuest(false);
      setNavHost(false);
      setNavExperience(false);
      setNavAdmin(true);
    }

    // setIsNavActive()
  };

  return (
    <HelpContainer>
      <HelpHeader>
        <HelpCenterHeader
          userMe={userMe}
          isUserLogIn={isUserLogIn}
          setIsUserLogIn={setIsUserLogIn}
        />
      </HelpHeader>

      {/* main */}
      <HelpMainWrap>
        <HelpMainTop>
          <HelpMainTitle>
            Hi {userMe?.username || 'Guest'}, how can we help?
          </HelpMainTitle>
          <HelpMainSearch>
            <HelpSearchWrapper>
              <input type='text' placeholder='Search how-tos and more' />
            </HelpSearchWrapper>
            <HelpSearchWrapper>
              <button>
                <SearchIcon fontSize='small' />
              </button>
            </HelpSearchWrapper>
          </HelpMainSearch>
        </HelpMainTop>
        <HelpMainNav>
          <HelpNavWrapper>
            <HelpNav
              onClick={handleNavClick}
              id='guest'
              className={navGuest ? 'active' : ''}
            >
              Guest
            </HelpNav>
            <HelpNav
              onClick={handleNavClick}
              id='host'
              className={navHost ? 'active' : ''}
            >
              Host
            </HelpNav>
            <HelpNav
              onClick={handleNavClick}
              id='experience'
              className={navExperience ? 'active' : ''}
            >
              Experience Host
            </HelpNav>
            <HelpNav
              onClick={handleNavClick}
              id='admin'
              className={navAdmin ? 'active' : ''}
            >
              Travel admin
            </HelpNav>
          </HelpNavWrapper>
        </HelpMainNav>
        <HelpMainContents>
          <HelpContentsTitle>Recommended for you</HelpContentsTitle>
          <HelpContentsWrapper>
            <HelpContentsList>
              <p>How cancellations work</p>
              <span>
                Sometimes things come up and you have to cancel. To keep things
                running...
              </span>
            </HelpContentsList>
            <HelpContentsList>
              <p>Check your reservation status as a guest</p>
              <span>
                Your reservation status keeps you updated on all kinds of
                things, such as...
              </span>
            </HelpContentsList>
            <HelpContentsList>
              <p>Find the cancellation policy for your stay</p>
              <span>
                Maybe you just need the peace of mind before booking, or perhaps
                you...
              </span>
            </HelpContentsList>
            <HelpContentsList>
              <p>When you’ll get your refund</p>
              <span>
                Good news—if you’re eligible for a refund, we'll send your
                refund as soon...
              </span>
            </HelpContentsList>
            <HelpContentsList>
              <p>Edit your account settings</p>
              <span>
                Need to make a change or two?You can edit your account settings,
                as well...
              </span>
            </HelpContentsList>
            <HelpContentsList>
              <p>Deactivating or deleting your account</p>
              <span>
                We’d hate to see you go, but if you’ve decided to leave Airbnb,
                you have a...
              </span>
            </HelpContentsList>
          </HelpContentsWrapper>
        </HelpMainContents>
      </HelpMainWrap>
    </HelpContainer>
  );
};

export default HelpCenter;
