import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllRoomInfo,
  getAllRoomsAsync,
} from '../../../redux/slices/roomSlice';
import { MainContainer, MainWrap } from '../../MainHome/MainStyle';
import HostHeader from '../HostHeader';
import {
  ListingMainTop,
  ListingSearch,
  ListingMainWrapper,
  ListingTable,
  ListingTHead,
  ListingTHeadeRow,
  ListingTHeadCell,
  ListingTBody,
  ListingTBodyRow,
  ListingTBodyCell,
  WarningText,
} from './ListingStyle';
import SettingsIcon from '@mui/icons-material/Settings';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Soon from '../../../assets/images/soon.jpg';

const Listing = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const allRoomInfo = useSelector(getAllRoomInfo);
  const dispatch = useDispatch();
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(getAllRoomsAsync());
  }, [dispatch]);

  console.log('Listing', allRoomInfo);

  return (
    <div>
      <HostHeader
        userMe={userMe}
        isUserLogIn={isUserLogIn}
        setIsUserLogIn={setIsUserLogIn}
      />
      <MainContainer>
        <MainWrap>
          <ListingMainTop>
            <h1>2 Listing</h1>
            <ListingSearch>
              <input type='text' placeholder='Search listings' />
              <button>Create listing</button>
            </ListingSearch>
          </ListingMainTop>
          <ListingMainWrapper>
            <ListingTable>
              <ListingTHead>
                <ListingTHeadeRow>
                  <ListingTHeadCell>
                    <input type='checkbox' />
                  </ListingTHeadCell>
                  <ListingTHeadCell>LISTING</ListingTHeadCell>
                  <ListingTHeadCell>STATUS</ListingTHeadCell>
                  <ListingTHeadCell>PHOTOS</ListingTHeadCell>
                  <ListingTHeadCell>TYPE</ListingTHeadCell>
                  <ListingTHeadCell>LAST MODIFIED</ListingTHeadCell>
                  <ListingTHeadCell className='center'>
                    <SettingsIcon sx={{ fontSize: 18 }} />
                  </ListingTHeadCell>
                </ListingTHeadeRow>
              </ListingTHead>
              {allRoomInfo?.map((list) => {
                return (
                  <ListingTBody key={list?.pk}>
                    <ListingTBodyRow>
                      <ListingTBodyCell>
                        <input type='checkbox' />
                      </ListingTBodyCell>
                      <ListingTBodyCell className='title'>
                        <img src={list?.photos[0]?.picture || Soon} alt='' />
                        <span>{list?.name}</span>
                      </ListingTBodyCell>
                      <ListingTBodyCell>
                        <span
                          className={
                            list?.photos?.length < 5
                              ? 'statusYet'
                              : 'statusFinish'
                          }
                          // onMouseOver={() => setIsWarning(true)}
                          // onMouseLeave={() => setIsWarning(false)}
                        >
                          {list?.photos?.length < 5
                            ? 'In Progress'
                            : 'Published'}
                        </span>
                        {list?.photos?.length < 5 && (
                          <WarningText>
                            <ErrorOutlineIcon sx={{ fontSize: 11 }} />
                            <span>Add more pictures to publish</span>
                          </WarningText>
                        )}
                        {/* {list?.photos?.length < 5 && isWarning && (
                          <WarningText>
                            <span>Add more pictures to publish</span>
                          </WarningText>
                        )} */}
                      </ListingTBodyCell>
                      <ListingTBodyCell>
                        <span className={list?.photos?.length < 5 ? 'yet' : ''}>
                          {list?.photos?.length}
                          {/* {list?.photos?.length < 5 && (
                            <ErrorOutlineIcon sx={{ fontSize: 18 }} />
                          )} */}
                        </span>
                      </ListingTBodyCell>
                      <ListingTBodyCell>
                        {list?.house_type === 'entire_place' && 'Entire Place'}
                        {list?.house_type === 'private_room' && 'Private Room'}
                        {list?.house_type === 'shared_room' && 'Shared Room'}
                      </ListingTBodyCell>
                      <ListingTBodyCell>
                        {list?.updated_at?.split('T')[0]}
                      </ListingTBodyCell>
                      <ListingTBodyCell className='center'>
                        {list?.photos?.length < 5 ? (
                          <>
                            {/* <ErrorOutlineIcon sx={{ fontSize: 18 }} /> */}
                            <span className='continue'>Continue</span>
                          </>
                        ) : (
                          <>
                            <span>Edit</span>
                          </>
                        )}
                      </ListingTBodyCell>
                    </ListingTBodyRow>
                  </ListingTBody>
                );
              })}
            </ListingTable>
          </ListingMainWrapper>
        </MainWrap>
      </MainContainer>
    </div>
  );
};

export default Listing;
