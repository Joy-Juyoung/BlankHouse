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
    RightArrowBtns,  
    TopMenuList, 
    } from './OnlineExpStyle';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


const OnlineCategory = () => {
    const [modalShown, toggleModal] = useState(false);
  return (
    <TopMenuList>
    <MenuDetail>               
        <MenuBtn>
            <BtnDetail>                            
                <span>Dates</span>
            </BtnDetail>
        </MenuBtn>
    </MenuDetail>
    <MenuDetail>
        <MenuBtn>
            <BtnDetail>                            
                <span>Group size</span>
            </BtnDetail>
        </MenuBtn>
    </MenuDetail>
    <MenuDetail>
        <MenuBtn>
            <BtnDetail>                            
                <span>More filters</span>
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
                            <span>Great for groups</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Family friendly</span>
                        </MidListBtn>
                    </DetailInfo>                                
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Animals</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Art & writikng</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Baking</span>
                        </MidListBtn>
                    </DetailInfo>    
                </MidListDetail>
                
                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Cooking</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Dance</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>Drinks</span>
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
                            <span>Fitness</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <MidListBtn>
                            <span>History & culture</span>
                        </MidListBtn>
                    </DetailInfo>
                </MidListDetail>

                <MidListDetail>
                    <DetailInfo>
                        <RightArrowBtns>
                            <KeyboardArrowRightOutlinedIcon/>
                        </RightArrowBtns>
                    </DetailInfo>
                </MidListDetail>
            </MenuMidList>
        </MenuMid>                        
    </TopMenuList>
</TopMenuList>
  )
}

export default OnlineCategory;