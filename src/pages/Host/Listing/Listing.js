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
import AddIcon from '@mui/icons-material/Add';
import Soon from '../../../assets/images/soon.jpg';
import { useNavigate } from 'react-router-dom';
import {
  LoadMore,
  LoadMoreBtn,
  LoadMoreBtnDisabled,
} from '../../Trips/TripsStyle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShowMoreModal from '../../../components/Show/ShowMoreModal';

const Listing = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const navigate = useNavigate();
  const allRoomInfo = useSelector(getAllRoomInfo);
  const dispatch = useDispatch();
  const [modalUploadShown, toggleUploadModal] = useState(false);
  const [nextList, setNextList] = useState(6);
  const [clickedId, setClickedId] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(getAllRoomsAsync());
  }, [dispatch]);

  const handleShowMore = () => {
    setNextList(nextList + 3);
  };

  const handleOpenUpload = (id) => {
    // console.log('id', id);
    setClickedId(id);
  };

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
            <h1>{allRoomInfo?.length || 0} Listing</h1>
            <ListingSearch>
              <input type='text' placeholder='Search listings' />
              <button onClick={() => navigate('/host/become?step1')}>
                <AddIcon sx={{ fontSize: 18 }} />
                <span>Create listing</span>
              </button>
            </ListingSearch>
          </ListingMainTop>
          <ListingMainWrapper>
            <ListingTable>
              <ListingTHead>
                <ListingTHeadeRow>
                  <ListingTHeadCell className='id'>
                    {/* <input type='checkbox' /> */}
                    ID
                  </ListingTHeadCell>
                  <ListingTHeadCell>LISTING</ListingTHeadCell>
                  <ListingTHeadCell>STATUS</ListingTHeadCell>
                  <ListingTHeadCell>PHOTOS</ListingTHeadCell>
                  <ListingTHeadCell>TYPE</ListingTHeadCell>
                  <ListingTHeadCell>LAST MODIFIED</ListingTHeadCell>
                  {/* <ListingTHeadCell>LAST MODIFIED</ListingTHeadCell> */}
                  <ListingTHeadCell className='center'>
                    <SettingsIcon sx={{ fontSize: 18 }} />
                  </ListingTHeadCell>
                </ListingTHeadeRow>
              </ListingTHead>
              {allRoomInfo
                ?.slice(0, nextList)
                // ?.reverse()
                .map((list) => {
                  return (
                    <ListingTBody key={list?.pk}>
                      <ListingTBodyRow>
                        <ListingTBodyCell className='id'>
                          {/* <input type='checkbox' /> */}
                          <span>{list?.pk}</span>
                        </ListingTBodyCell>
                        <ListingTBodyCell className='title'>
                          <img src={list?.photos[0]?.picture || Soon} alt='' />
                          <span>{list?.name}</span>
                        </ListingTBodyCell>
                        <ListingTBodyCell>
                          <span
                            className={
                              list?.photos?.length < 1
                                ? 'statusYet'
                                : 'statusFinish'
                            }
                          >
                            {list?.photos?.length < 1
                              ? 'In Progress'
                              : 'Published'}
                          </span>
                          {list?.photos?.length < 1 && (
                            <WarningText>
                              <ErrorOutlineIcon sx={{ fontSize: 11 }} />
                              <span>Add more pictures to publish</span>
                            </WarningText>
                          )}
                        </ListingTBodyCell>
                        <ListingTBodyCell>
                          <span
                            className={list?.photos?.length < 1 ? 'yet' : ''}
                          >
                            {list?.photos?.length}
                          </span>
                        </ListingTBodyCell>
                        <ListingTBodyCell>
                          {list?.house_type === 'entire_place' &&
                            'Entire Place'}
                          {list?.house_type === 'private_room' &&
                            'Private Room'}
                          {list?.house_type === 'shared_room' && 'Shared Room'}
                        </ListingTBodyCell>
                        <ListingTBodyCell>
                          {list?.updated_at?.split('T')[0]}
                        </ListingTBodyCell>
                        <ListingTBodyCell className='center'>
                          {list?.photos?.length < 1 ? (
                            <span
                              className='continue'
                              onClick={(id) => {
                                handleOpenUpload(list?.pk);
                                toggleUploadModal(!modalUploadShown);
                              }}
                            >
                              Continue
                            </span>
                          ) : (
                            <span>Edit</span>
                          )}
                        </ListingTBodyCell>
                      </ListingTBodyRow>
                    </ListingTBody>
                  );
                })}
            </ListingTable>

            {/* modal */}
            <ShowMoreModal
              toggleUploadModal={toggleUploadModal}
              modalUploadShown={modalUploadShown}
              clickedId={clickedId}
            />

            {/* load more */}
            {allRoomInfo?.length > 6 && (
              <LoadMore>
                {nextList / allRoomInfo?.length <= 1 ? (
                  <LoadMoreBtn onClick={handleShowMore}>
                    Load more <ExpandMoreIcon />
                  </LoadMoreBtn>
                ) : (
                  <LoadMoreBtnDisabled disabled>
                    Load more <ExpandMoreIcon />
                  </LoadMoreBtnDisabled>
                )}
              </LoadMore>
            )}
          </ListingMainWrapper>
        </MainWrap>
      </MainContainer>
    </div>
  );
};

export default Listing;
