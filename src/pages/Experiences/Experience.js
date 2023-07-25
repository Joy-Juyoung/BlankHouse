import React, { useState } from 'react';
import { MainListWrap, MainMidList, MainMidTitle, MainMidWrap, MainTopWrap, 
        TopMenuContainer, TopMenuWrap } from './ExperienceStyle';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CategoryList from './CategoryList';
import OnlineCard from '../OnlineExperiences/OnlineCard';
import ExpListCard from './ExpListCard';
import { ExperiencesData } from './ExperiencesData';
import { ExpBody, ExpBodyBottom, ExpBodyTop, ExpDetail, ExpWrapper, 
        InfoSlideWrap, 
        LeftArrowBtn, 
        OnlineExpWrap, 
        RightArrowBtn, 
        ShowAllLink, SliderArrowWrap,
        TopLeftInfo, TopRightInfo } from '../OnlineExperiences/OnlineExpStyle';


const Experience = () => {


  return (
        <TopMenuContainer>
            <TopMenuWrap>
                <CategoryList/>
                <MainMidList>
                    <MainTopWrap>
                        <h1>49 nearby Experiences</h1>
                    </MainTopWrap>
                    <OnlineExpWrap>
                        <ExpWrapper>
                            <ExpDetail>
                                <ExpBody>
                                    <ExpBodyTop>
                                        <TopLeftInfo>
                                            <h2>Happening tomorrow</h2>
                                        </TopLeftInfo>
                                            <TopRightInfo>
                                                <SliderArrowWrap>
                                                    <LeftArrowBtn>
                                                        <KeyboardArrowLeftOutlinedIcon/>
                                                    </LeftArrowBtn>
                                                    <p/>
                                                    <RightArrowBtn>
                                                        <KeyboardArrowRightOutlinedIcon/>
                                                    </RightArrowBtn>
                                                </SliderArrowWrap>
                                            </TopRightInfo>
                                        </ExpBodyTop>
                                        <ExpBodyBottom>
                                            <InfoSlideWrap>                         
                                                {ExperiencesData
                                                .filter(
                                                (list) =>
                                                    list.pk === 1 || 
                                                    list.pk < 6
                                                )
                                                .map((experiences, index) => {
                                                return <OnlineCard key={index} experiences={experiences} />;
                                                })}
                                            </InfoSlideWrap>
                                        </ExpBodyBottom>
                                    </ExpBody>
                                </ExpDetail>
                            </ExpWrapper>
                        </OnlineExpWrap>
                    <MainMidWrap>
                        <MainMidTitle>
                            <h2>All Experiences</h2>
                        </MainMidTitle>
                        <MainListWrap>
                            
                            {/* Data Map and display Main List Cart */}
                            {ExperiencesData.map((experiences, index) => {
                            return <ExpListCard key={index} experiences={experiences} />;
                            })}
                        </MainListWrap>
                    </MainMidWrap>
                </MainMidList>
            </TopMenuWrap>
        </TopMenuContainer>
  )
}

export default Experience;