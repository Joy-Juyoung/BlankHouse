import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editUserAsync } from '../redux/slices/userSlice';

const PopupBox = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const BoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 0;
`;

const BoxLi = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;

  &.total {
    /* width: 100%; */
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-btween;
  }
`;

const BoxH4 = styled.h4`
  margin: 0;
  width: 100%;
`;

const BoxSpan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;

  input {
    width: 98%;
    padding: 10px 5px;
    border-radius: 10px;
  }

  &.amount {
    display: flex;
    flex-direction: column;
  }

  &.total {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const BoxNotice = styled.div`
  font-size: 11px;
  color: gray;
  text-align: left;

  span {
    &.over {
      color: red;
      font-weight: 600;
    }
    &.minus {
      color: red;
      font-weight: 600;
    }
  }
`;

const BoxBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    width: 150px;
    padding: 10px 0;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const AddBalance = ({
  roomId,
  userMe,
  toggleBalanceModal,
  modalBalanceShown,
}) => {
  const [changeUserBalance, setChangeUserBalance] = useState(
    parseFloat(userMe?.balance)
  );
  const [balance, setBalance] = useState(0);
  const [isOverAmount, setIsOverAmount] = useState(false);
  const [isMinus, setIsMinus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setChangeUserBalance(parseFloat(userMe?.balance) + parseFloat(balance));
  }, [userMe, modalBalanceShown, balance]);

  const ChangeBalance = (e) => {
    setBalance(e.target.value);
  };

  const handleAddBalance = () => {
    if (parseFloat(balance) <= 5000 && parseFloat(balance) >= 0) {
      dispatch(
        editUserAsync({
          roomId,
          balance: parseFloat(userMe?.balance) + parseFloat(balance),
        })
      );
      toggleBalanceModal(false);
      setIsOverAmount(false);
    } else if (parseFloat(balance) > 5000) {
      setIsOverAmount(true);
    } else {
      setIsMinus(true);
    }
  };

  console.log('changeUserBalance', changeUserBalance);
  return (
    <PopupBox>
      <Box>
        <BoxUl>
          <BoxLi>
            <BoxH4>Current Balance</BoxH4>
            <BoxSpan>
              $
              {userMe?.balance.toLocaleString('en-US', {
                style: 'decimal',
                minimumFractionDigits: 2,
              })}
            </BoxSpan>
          </BoxLi>
          <BoxLi>
            <BoxH4>Charge Amount</BoxH4>
            <BoxSpan className='amount'>
              <input
                type='number'
                placeholder='Enter the price you want to add'
                onChange={ChangeBalance}
                min='0'
                max='5000'
              />
            </BoxSpan>
            <BoxNotice>
              <span className={isOverAmount ? 'over' : ''}>
                * Up to $5,000 at a time
              </span>
              <br />
              <span className={isMinus ? 'minus' : ''}>
                * Available only from 0 or higher
              </span>
            </BoxNotice>
          </BoxLi>
          <BoxLi className='total'>
            <BoxH4>Expected Amount</BoxH4>
            <BoxSpan className='total'>
              $
              {changeUserBalance.toLocaleString('en-US', {
                style: 'decimal',
                minimumFractionDigits: 2,
              })}
            </BoxSpan>
          </BoxLi>
        </BoxUl>
        <BoxBtn onClick={handleAddBalance}>
          <span>Add</span>
        </BoxBtn>
      </Box>
    </PopupBox>
  );
};

export default AddBalance;
