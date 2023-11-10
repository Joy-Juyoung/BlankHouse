import React, { useState } from 'react';
import {
  ListingTBody,
  ListingTBodyCell,
  ListingTBodyRow,
  WarningText,
} from './ListingStyle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Soon from '../../../assets/images/soon.jpg';

const ListBody = ({
  list,
  toggleUploadModal,
  modalUploadShown,
  setClickedId,
}) => {
  const handleOpenUpload = (id) => {
    // console.log('id', id);
    setClickedId(id);
  };

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
            className={list?.photos?.length < 1 ? 'statusYet' : 'statusFinish'}
          >
            {list?.photos?.length < 1 ? 'In Progress' : 'Published'}
          </span>
          {list?.photos?.length < 1 && (
            <WarningText>
              <ErrorOutlineIcon sx={{ fontSize: 11 }} />
              <span>Add more pictures to publish</span>
            </WarningText>
          )}
        </ListingTBodyCell>
        <ListingTBodyCell>
          <span className={list?.photos?.length < 1 ? 'yet' : ''}>
            {list?.photos?.length}
          </span>
        </ListingTBodyCell>
        <ListingTBodyCell>
          {list?.house_type === 'entire_place' && 'Entire Place'}
          {list?.house_type === 'private_room' && 'Private Room'}
          {list?.house_type === 'shared_room' && 'Shared Room'}
        </ListingTBodyCell>
        <ListingTBodyCell>{list?.updated_at?.split('T')[0]}</ListingTBodyCell>
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
};

export default ListBody;
