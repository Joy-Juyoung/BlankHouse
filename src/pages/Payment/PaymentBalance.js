import React, { useState } from 'react';
import {
  BalanceBtn,
  PaymentBalanceBtn,
  PaymentBalanceMsg,
  PaymentInfoDetail,
  PaymentInfoTitle,
  PaymentInfoWrapper,
  PaymentOptions,
} from './PaymentStyle';
import AddIcon from '@mui/icons-material/Add';
import ShowMoreModal from '../../components/Show/ShowMoreModal';

const PaymentBalance = ({ userMe, finalTotalPrice, roomId }) => {
  const [modalBalanceShown, toggleBalanceModal] = useState(false);
  // console.log('parseFloat', parseFloat(finalTotalPrice.replace(/,/g, '')));

  return (
    <PaymentInfoWrapper>
      <PaymentInfoTitle>Your Balance</PaymentInfoTitle>
      <PaymentInfoDetail>
        <PaymentOptions>
          <span>Your Current Balances:</span>
          <span>
            $
            {userMe?.balance?.toLocaleString('en-US', {
              style: 'decimal',
              minimumFractionDigits: 2,
            })}
          </span>
        </PaymentOptions>
        <PaymentBalanceMsg>
          {parseFloat(finalTotalPrice?.replace(/,/g, '')) > userMe?.balance && (
            <p>
              * Your balance is not enough to buy items. Please add the balance
              through the button below.
            </p>
          )}
          <PaymentBalanceBtn>
            <BalanceBtn onClick={() => toggleBalanceModal(!modalBalanceShown)}>
              <AddIcon sx={{ fontSize: 18 }} />
              <span>Add Balance</span>
            </BalanceBtn>
          </PaymentBalanceBtn>
        </PaymentBalanceMsg>
      </PaymentInfoDetail>

      <ShowMoreModal
        toggleBalanceModal={toggleBalanceModal}
        modalBalanceShown={modalBalanceShown}
        userMe={userMe}
        roomId={roomId}
      />
    </PaymentInfoWrapper>
  );
};

export default PaymentBalance;
