import React, { useState } from 'react';
import { MainListWrap, MainMidList, MainMidTitle, MainMidWrap, MainTopWrap, 
        TopMenuContainer, TopMenuWrap } from './ExperienceStyle';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CategoryList from './CategoryList';
import OnlineCard from '../OnlineExperiences/OnlineCard';
import ExpListCard from './ExpListCard';
import { ExperiencesData } from './ExperiencesData';


const Experience = () => {
  return (
        <TopMenuContainer>
            <TopMenuWrap>
                <CategoryList/>
                <MainMidList>
                    <MainTopWrap>
                        <h1>49 nearby Experiences</h1>
                    </MainTopWrap>
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
