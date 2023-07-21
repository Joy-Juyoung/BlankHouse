import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, userMe } from '../redux/slices/users';

const Test = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    // dispatch(allUsers());
    dispatch(userMe());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  //
  console.log('users', users);

  return (
    <div>
      <div>test page</div>
    </div>
  );
};

export default Test;
