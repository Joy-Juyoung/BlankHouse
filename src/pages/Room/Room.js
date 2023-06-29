import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainContainer, MainTop, MainWrap } from '../MainHome/MainStyle';
import {
  RoomDetailsSections,
  RoomDetailsTop,
  RoomMainDetails,
  RoomMainPhotos,
  RoomMainSide,
  RoomMainSideWrap,
  RoomMainWrap,
  RoomMainDetailsWrap,
  RoomPhotoMain,
  RoomPhotoSub,
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
  RoomDetailSide,
  RoomDetailSideWrap,
  RoomSideReserve,
  RoomSideReport,
  RoomDetailHeader,
  RoomDetailSection,
  DetailHeader,
} from './RoomStyle';
import { RoomData } from '../MainHome/SampleData';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Loading from '../../components/Loading';
import { Skeleton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlagIcon from '@mui/icons-material/Flag';
import RoomSide from './RoomSide';
import BedIcon from '@mui/icons-material/Bed';

const Room = () => {
  const location = useLocation();
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClickScroll = () => {
    const goPhoto = document.getElementById('viewPhoto');
    const goAmenities = document.getElementById('viewAmenities');
    const goReviews = document.getElementById('viewReviews');
    const goLocation = document.getElementById('viewLocation');

    if (goPhoto) {
      // Will scroll smoothly to the top of the next section
      goPhoto.scrollIntoView({ behavior: 'smooth' });
    }
    if (goAmenities) {
      // Will scroll smoothly to the top of the next section
      goAmenities.scrollIntoView({ behavior: 'smooth' });
    }
    if (goReviews) {
      // Will scroll smoothly to the top of the next section
      goReviews.scrollIntoView({ behavior: 'smooth' });
    }
    if (goLocation) {
      // Will scroll smoothly to the top of the next section
      goLocation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // => scroll position
  };
  // console.log(scrollPosition);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 680);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      {scrollPosition >= 800 && (
        <RoomDetailHeader>
          <DetailHeader>
            <span onClick={handleClickScroll}>Photos</span>
            <span onClick={handleClickScroll}>Amenities</span>
            <span onClick={handleClickScroll}>Reviews</span>
            <span onClick={handleClickScroll}>Location</span>
          </DetailHeader>
        </RoomDetailHeader>
      )}
      <MainContainer pagesmall={true}>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            <RoomTopHeader>{RoomData[0].title}</RoomTopHeader>
            <RoomTopText>
              <RoomTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{RoomData[0].rating}</span>
                <span className='space'>•</span>
                <span>
                  <Link href=''>000 Reviews</Link>
                </span>
                <span>{RoomData[0].descripton}</span>
              </RoomTopInfo>
              <RoomTopInfo>
                <button>
                  <ShareIcon sx={{ fontSize: '18px' }} />
                  <span>Share</span>
                </button>
                <button onClick={(e) => setFav(!fav)}>
                  {fav ? (
                    <FavoriteIcon sx={{ fontSize: '18px', color: '#e20000' }} />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ fontSize: '18px', color: '#000' }}
                    />
                  )}
                  <span>Save</span>
                </button>
              </RoomTopInfo>
            </RoomTopText>
          </RoomTopWrap>
          <RoomMainWrap>
            <RoomMainPhotos>
              <RoomPhotoMain>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '560px', borderRadius: '10px' }}
                />
              </RoomPhotoMain>
              <RoomPhotoSub>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '275px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '275px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '275px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '275px', borderRadius: '10px' }}
                />
              </RoomPhotoSub>
            </RoomMainPhotos>
            <RoomDetailSection>
              {/* {scrollPosition >= 800 && (
              <RoomDetailHeader>
                <DetailHeader>
                  <div>Photos</div>
                  <div>Photos</div>
                  <div>Photos</div>
                </DetailHeader>
              </RoomDetailHeader>
            )} */}
              <RoomMainDetails>
                <RoomMainDetailsWrap>
                  <RoomDetailsTop>
                    <h2>Farm stay hosted by Grant</h2>
                    <span>2 guests</span>
                    <span>1 bedroom </span>
                    <span>1 bath</span>
                    <span>1 bath</span>
                  </RoomDetailsTop>
                  <RoomDetailsSections>
                    <ul>
                      <li>
                        <i></i>
                        <div>
                          <p>Self check-in</p>
                          <span>Check yourself in with the keypad.</span>
                        </div>
                      </li>
                      <li>
                        <i></i>
                        <div>
                          <p>Furry friends welcome</p>
                          <span>Bring your pets along for the stay.</span>
                        </div>
                      </li>
                      <li>
                        <i></i>
                        <div>
                          <p>Free cancellation before Oct. 6.</p>
                          <span></span>
                        </div>
                      </li>
                    </ul>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <p>
                      This private, rustic cottage, nestled on a ridge
                      overlooking the Jumping Pound Creek is your perfect
                      retreat getaway. With 300sq ft of interior living and
                      250sq ft of exterior living you can watch the river valley
                      below from the comfort of your bed or while cuddled up on
                      the porch swing, around the fire. This cottage is fully
                      furnished and has been intentionally designed for a couple
                      who is looking to reconnect with one another and explore
                      the land around. Breakfast fixings are included.
                    </p>
                    <button>
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </button>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>Where you'll sleep</h2>
                    <div>
                      <BedIcon />
                      <p>Bedroom</p>
                      <span>1 king bed</span>
                    </div>
                  </RoomDetailsSections>
                  <RoomDetailsSections id='viewAmenities'>
                    <h2>What this place offers</h2>
                    <div>
                      <i></i>
                      <span>Garden view</span>
                    </div>
                    <div>
                      <i></i>
                      <span>Mountain view</span>
                    </div>
                    <div>
                      <i></i>
                      <span>Wifi</span>
                    </div>
                    <div>
                      <i></i>
                      <span>Kitchen</span>
                    </div>
                    <button>Show all 00 Amenities</button>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>0 nights in Cochrane</h2>
                    <p>Oct. 7, 2023 - Oct. 12, 2023</p>
                    <div>Calendar</div>
                  </RoomDetailsSections>
                  <RoomDetailsSections id='viewReviews'>
                    <h2>
                      <StarIcon sx={{ fontSize: '16px' }} />
                      <span>4.99 / 000 reviews</span>
                    </h2>
                    <div>Average graph</div>
                    <div>Reviews</div>
                    <button>Show all 00 Reviews</button>
                  </RoomDetailsSections>
                  <RoomDetailsSections id='viewLocation'>
                    <h2>Where you’ll be</h2>
                    <div>Map</div>
                    <p>Cochrane, Alberta, Canada</p>
                    <span>
                      The historic town of Cochrane is 5min to the East of us
                      and the historic Wine Glass Ranch, established in 1885,
                      are our direct neighbours to the West.
                    </span>
                    <button>
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </button>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>Hosted by Grant</h2>
                    <div>Host Info</div>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>Things to know</h2>
                    <div>
                      <div>
                        <p>House rules</p>
                        <span>Check-in: 3:00 p.m.–8:00 p.m.</span>
                        <span>Checkout before 11:00 a.m.</span>
                        <span>2 guests maximum</span>
                        <button>
                          <span>Show more</span>
                          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                        </button>
                      </div>
                      <div>
                        <p>Safety & property</p>
                        <span>Nearby lake, river, other body of water</span>
                        <span>May encounter potentially dangerous animal</span>
                        <span>Carbon monoxide alarm</span>
                        <button>
                          <span>Show more</span>
                          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                        </button>
                      </div>
                      <div>
                        <p>Cancellation policy</p>
                        <span>Free cancellation before Oct. 6.</span>
                        <span>
                          Review the Host’s full cancellation policy, which
                          applies even if you cancel for illness or disruptions
                          caused by COVID-19.
                        </span>
                        {/* <span>2 guests maximum</span> */}
                        <button>
                          <span>Show more</span>
                          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                        </button>
                      </div>
                    </div>
                  </RoomDetailsSections>
                </RoomMainDetailsWrap>
                <RoomSide loading={loading} RoomData={RoomData} />
              </RoomMainDetails>
            </RoomDetailSection>
          </RoomMainWrap>
        </MainWrap>
      </MainContainer>
    </>
  );
};

export default Room;
