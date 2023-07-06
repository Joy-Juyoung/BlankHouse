import React, { useState } from 'react';
import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider } from '@coreui/react';
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
const DropdownList = () => {

      const [modalLogShown, toggleLogModal] = useState(false);

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
              {/* <LogInModal
              toggleLogModal={toggleLogModal}
              modalLogShown={modalLogShown}
            /> */}
              <LinkAccount to='/userOrders'>
                <DropLi>Log in</DropLi>
              </LinkAccount>
              <LinkAccount>
                <DropLi>Airbnb your home</DropLi>
              </LinkAccount>
              <LinkAccount to='/help'>
                <DropLi>Help</DropLi>
              </LinkAccount>
            </DropUlWrap>
          </DropUl>
        </DropAccountWrap>
      </DropAccountCoverMain>
    </DropAccountContainer>
    // <CDropdown>
    // <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
    // <CDropdownMenu>
    //     <CDropdownItem component="button">Action</CDropdownItem>
    //     <CDropdownItem component="button">Another action</CDropdownItem>
    //     <CDropdownItem component="button">Something else here</CDropdownItem>
    //     <CDropdownDivider />
    //     <CDropdownItem component="button">Separated link</CDropdownItem>
    // </CDropdownMenu>
    // </CDropdown>
  )
}

export default DropdownList;