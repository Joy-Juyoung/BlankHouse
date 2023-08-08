import React, { useCallback, useEffect, useState } from 'react';
import { ExImageWrapper, ExTopHeader, ExTopWrap, ExTopWrapper, ExpBody, ExpBodyBottom, ExpBodyTop, ExpDetail, ExpWrapper, 
        HeaderNameWrap, 
        InfoSlideWrap, 
        LeftArrowBtn, 
        OnlineExpContainer, OnlineExpWrap, 
        RightArrowBtn, 
        ShowAllLink, 
        SliderArrowWrap, 
        SliderBtnWrap, 
        TopHeaderWrap, 
        TopLeftInfo, TopRightInfo } from './OnlineExpStyle';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { ExperiencesData } from '../Experiences/ExperiencesData';
import OnlineCard from './OnlineCard';
import { MainListWrap } from '../Experiences/ExperienceStyle';
import OnlineCategory from './OnlineCategory';
import { useDispatch, useSelector } from 'react-redux';
import { allExperiences } from '../../redux/slices/experiences';
import PageLoading from '../../components/Loading/PageLoading';

const OnlineExp = () => {
    const [loading, setLoading] = useState(false);

    const experiences = useSelector((state) => state.experiences);
    const dispatch = useDispatch();
  
    const initFetch = useCallback(() => {
      dispatch(allExperiences());
    }, [dispatch]);
  
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      // setIsPageMain(true);
      initFetch();
    }, [initFetch]);
  
  
    if (loading)
      return (
        <div>
          <PageLoading />
        </div>
      );

  return (
    <OnlineExpContainer>
        <OnlineExpWrap>
            <ExTopWrapper>
                <ExTopWrap>
                    <ExTopHeader>
                        <TopHeaderWrap>
                            <HeaderNameWrap>
                                <h1>New this week</h1>
                            </HeaderNameWrap>
                            <SliderArrowWrap>
                                <LeftArrowBtn>
                                    <KeyboardArrowLeftOutlinedIcon/>
                                </LeftArrowBtn>
                                <p/>
                                <RightArrowBtn>
                                    <KeyboardArrowRightOutlinedIcon/>
                                </RightArrowBtn>
                            </SliderArrowWrap>
                        </TopHeaderWrap>
                    </ExTopHeader>
                    <ExImageWrapper>

                    </ExImageWrapper>
                </ExTopWrap>
            </ExTopWrapper>
        </OnlineExpWrap>

        <OnlineExpWrap>
            <OnlineCategory visibleItems={15}/>
        </OnlineExpWrap>

        <OnlineExpWrap>
            <ExpWrapper>
                <ExpDetail>
                    <ExpBody>
                        <ExpBodyTop>
                            <TopLeftInfo>
                                <h2>Plan a trip with help from local Hosts around the world</h2>
                            </TopLeftInfo>
                            <TopRightInfo>
                                <ShowAllLink>
                                    Show (15)
                                </ShowAllLink>
                                <span/>
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
                                {experiences?.map((experiences, index) => {
                                return <OnlineCard key={index} experience={experiences} />;
                                })}
                            </InfoSlideWrap>
                        </ExpBodyBottom>
                    </ExpBody>
                </ExpDetail>
            </ExpWrapper>
        </OnlineExpWrap>

        <OnlineExpWrap>
            <ExpWrapper>
            <ExpDetail>
                    <ExpBody>
                        <ExpBodyTop>
                            <TopLeftInfo>
                                <h2>Bestsellers</h2>
                            </TopLeftInfo>
                            <TopRightInfo>
                                <ShowAllLink>
                                    Show (98)
                                </ShowAllLink>
                                <span/>
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
                            {experiences?.map((experiences, index) => {
                                return <OnlineCard key={index} experience={experiences} />;
                                })}
                            </InfoSlideWrap>
                        </ExpBodyBottom>
                    </ExpBody>
                </ExpDetail>
            </ExpWrapper>
        </OnlineExpWrap>

        <OnlineExpWrap>
            <ExpWrapper>
            <ExpDetail>
                    <ExpBody>
                        <ExpBodyTop>
                            <TopLeftInfo>
                                <h2>Starting in the next 6 hours</h2>
                            </TopLeftInfo>
                            <TopRightInfo>
                                <ShowAllLink>
                                    Show (62)
                                </ShowAllLink>
                                <span/>
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
                            {experiences?.map((experiences, index) => {
                                return <OnlineCard key={index} experience={experiences} />;
                                })}
                            </InfoSlideWrap>
                        </ExpBodyBottom>
                    </ExpBody>
                </ExpDetail>
            </ExpWrapper>
        </OnlineExpWrap>
        
        <OnlineExpWrap>
            <ExpWrapper>
            <ExpDetail>
                    <ExpBody>
                        <ExpBodyTop>
                            <TopLeftInfo>
                                <h2>Great for groups</h2>
                            </TopLeftInfo>
                            <TopRightInfo>
                                <ShowAllLink>
                                    Show (192)
                                </ShowAllLink>
                                <span/>
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
                        {experiences?.map((experiences, index) => {
                                return <OnlineCard key={index} experience={experiences} />;
                                })}
                            </InfoSlideWrap>
                        </ExpBodyBottom>
                    </ExpBody>
                </ExpDetail>
            </ExpWrapper>
        </OnlineExpWrap>

        <OnlineExpWrap>
            <ExpWrapper>
                <ExpDetail>
                    <ExpBody>
                        <ExpBodyTop>
                            <TopLeftInfo>
                                <h2>Make plans this weekend</h2>
                            </TopLeftInfo>
                            <TopRightInfo>
                                <ShowAllLink>
                                    Show (414)
                                </ShowAllLink>
                                <span/>
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
                        {/* <MainListWrap>
                            {ExperiencesData
                            .filter(
                                (list) =>
                                    list.pk === 1 || 
                                    list.pk < 7 
                                ).map((experiences, index) => {
                                return <ExpListCard key={index} experiences={experiences} />;
                                })}
                        </MainListWrap> */}
                        <ExpBodyBottom>   
                            <InfoSlideWrap>                         
                            {experiences?.map((experiences, index) => {
                                return <OnlineCard key={index} experience={experiences} exIndex={index}/>;
                                })}
                            </InfoSlideWrap>
                        </ExpBodyBottom>
                    </ExpBody>
                </ExpDetail>
            </ExpWrapper>
        </OnlineExpWrap>    

    </OnlineExpContainer>
  )
}

export default OnlineExp;