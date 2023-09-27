import React, { useState } from 'react';
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/react';
import {
  LinkAccount,
  DropUl,
  DropLi,
  DropAccountWrap,
  DropAccountContainer,
  DropAccountCoverTop,
  DropAccountCoverMain,
  ProfileWrap,
  DropUlWrap,
  BtnAccount,
} from './DropdownListStyle';
import LogInModal from './LogInModal';
import { useNavigate } from 'react-router-dom';
const DropdownList = () => {
  const [modalLogShown, toggleLogModal] = useState(false);
  const navigate = useNavigate();

  return (
    <DropAccountContainer>
      <DropAccountCoverMain>
        <DropAccountWrap>
          <DropUl>
            <DropUlWrap>
              <BtnAccount
                onClick={() => {
                  toggleLogModal(!modalLogShown);
                }}
              >
                <DropLi>Sign up</DropLi>
              </BtnAccount>
              {modalLogShown && (
                <LogInModal
                  toggleLogModal={toggleLogModal}
                  modalLogShown={modalLogShown}
                />
              )}
              <LinkAccount to='/userOrders'>
                <DropLi>Log in</DropLi>
              </LinkAccount>
              <LinkAccount>
                <DropLi>Airbnb your home</DropLi>
              </LinkAccount>
              {/* <LinkAccount to='/help' onClick={navigate('/help')}> */}
              <LinkAccount onClick={navigate('/help')}>
                <DropLi>Help</DropLi>
              </LinkAccount>
            </DropUlWrap>
          </DropUl>
        </DropAccountWrap>
      </DropAccountCoverMain>
    </DropAccountContainer>
  );
};

export default DropdownList;
