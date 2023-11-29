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
import ListBody from './ListBody';

const Listing = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const navigate = useNavigate();
  const allRoomInfo = useSelector(getAllRoomInfo);
  const dispatch = useDispatch();
  const [modalUploadShown, toggleUploadModal] = useState(false);
  const [nextList, setNextList] = useState(6);
  const [clickedId, setClickedId] = useState();
  const [searchedValue, setSearchedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   setSearchResults(allRoomInfo);
  // }, []);

  // const handleSearch = (e) => {
  //   const keyword = e.target.value;
  //   setSearchedValue(keyword);

  //   const filteredResults = allRoomInfo?.filter((item) =>
  //     item?.payload.toLowerCase().includes(searchedValue.toLowerCase())
  //   );

  //   setSearchResults(filteredResults);
  // };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(getAllRoomsAsync());
  }, [dispatch]);

  const handleShowMore = () => {
    setNextList(nextList + 3);
  };

  // const handleOpenUpload = (id) => {
  //   // console.log('id', id);
  //   setClickedId(id);
  // };

  // console.log(
  //   'Listing',
  //   allRoomInfo?.filter((item) => item?.owner?.username === userMe?.username)
  // );

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
              <input
                type='text'
                placeholder='Search listings by house name'
                onChange={(e) => setSearchedValue(e.target.value)}
              />
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
              {allRoomInfo !== null ? (
                <>
                  {allRoomInfo
                    ?.filter(
                      (item) =>
                        item?.name
                          ?.toLowerCase()
                          ?.includes(searchedValue.toLowerCase()) &&
                        item?.owner?.username === userMe?.username
                    )
                    ?.slice(0, nextList)
                    // ?.reverse()
                    .map((list) => {
                      return (
                        <ListBody
                          key={list?.pk}
                          toggleUploadModal={toggleUploadModal}
                          modalUploadShown={modalUploadShown}
                          setClickedId={setClickedId}
                          list={list}
                        />
                      );
                    })}
                </>
              ) : (
                <>
                  {allRoomInfo
                    ?.slice(0, nextList)
                    // ?.reverse()
                    .map((list) => {
                      return (
                        <ListBody
                          key={list?.pk}
                          toggleUploadModal={toggleUploadModal}
                          modalUploadShown={modalUploadShown}
                          setClickedId={setClickedId}
                          list={list}
                        />
                      );
                    })}
                </>
              )}
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
