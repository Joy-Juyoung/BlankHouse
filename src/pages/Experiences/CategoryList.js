import React, { useState } from 'react'
import { BtnDetail, 
    DetailInfo, 
    ExFilterBtn, 
    FilterBtnWrap, 
    FilterWrap, 
    MenuBtn, 
    MenuDetail, 
    MenuLine, 
    MenuMid, 
    MenuMidList, 
    MidListBtn, 
    MidListDetail,  
    TopMenuList, 
    } from './ExperienceStyle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TuneIcon from '@mui/icons-material/Tune';
import ExperienceFilterModal from '../../components/Modals/ExperienceFilterModal';

const CategoryList = () => {
    const [modalShown, toggleModal] = useState(false);
  return (
    <TopMenuList>
    <MenuDetail>               
        <MenuBtn>
            <BtnDetail>                            
                <span>Price</span>
                <KeyboardArrowDownIcon />
            </BtnDetail>
        </MenuBtn>
    </MenuDetail>
    <MenuDetail>
        <MenuBtn>
            <BtnDetail>                            
                <span>Language offered</span>
                <KeyboardArrowDownIcon />
            </BtnDetail>
        </MenuBtn>
    </MenuDetail>
    <MenuDetail>
        <MenuBtn>
            <BtnDetail>                            
                <span>Time of day</span>
                <KeyboardArrowDownIcon />
            </BtnDetail>
        </MenuBtn>  
        <MenuLine/>                      
    </MenuDetail>
    <TopMenuList>
        <MenuMid>
            <MenuMidList>
                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Art and culture</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Entertainment</span>
                        </MidListBtn>
                    </DetailInfo>                                
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Food and drink</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Sports</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Tours</span>
                        </MidListBtn>
                    </DetailInfo>    
                </MidListDetail>
                
                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Sightseeing</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Wellness</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Nature and outdoors</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>
            </MenuMidList>
        </MenuMid>                        
    </TopMenuList>
    <FilterWrap>
        <ExFilterBtn onClick={() => {
                toggleModal(!modalShown);
            }}>
            <FilterBtnWrap>
                <TuneIcon/>
                <span>Filter</span>
            </FilterBtnWrap>
        </ExFilterBtn>
        <ExperienceFilterModal
            toggleModal={toggleModal}
            modalShown={modalShown}
            />
    </FilterWrap>
</TopMenuList>
  )
}

export default CategoryList