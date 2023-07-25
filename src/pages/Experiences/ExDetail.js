import React, { useState } from 'react'
import { ExperiencesData } from './ExperiencesData';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import { AvatarBtn, 
        BookBtn, BottomInfoWrap, 
        ChooseBtn, CoAvatars, CoHostAvatar,CoHostLink, CoHostLists, ContactHostWrap, 
        DatePersonPick, DetailInfoList, DetailInfoWrap,DetailLists, DetailTopHead, ExDetailMid, 
        ExDetailMidWrap,ExDetailNavWrap,ExDetailWrap, 
        HeadTwoBtnsWrap,HeadTwoWrap,HostAvatar,HostInfoWrap,HostIntro,HostLink,HostLinkWrap, 
        HostRating,HostSimpleInfo, 
        InfoDetail,InfoList,InfoLists,
        LanguageInfoList,LanguageInfoWrap,LanguageTranslateBtn,LeftBottomInfo,LeftInfoBottom,LeftInfoTop,LeftLanguageInfo,LeftMidInfo,LeftTitleInfo,LeftWillInfo,
        MidInfoList,MidLeftList,MidLeftWrap,MidLocationWrap,MidReviewWrap,MidRightInfo,MidRightWrap, 
        OptionsDetail,OptionsInfoWrap, 
        PaymentInfoWrap,PickOptionsList, 
        ReadMoreBtn,ReportBtn,ReportBtnWrap,ReviewAvatarBtn,ReviewDetails,ReviewListsWrap,ReviewNavBtn,ReviewsInfo,ReviewsIntro,ReviewsUserInfo,RightAvartar, 
        SaveBtnWrap, 
        RightInfoWrap, 
        ShareBtnWrap,ShowPriceBtn, 
        TitleInfoLeft,TitleInfoRight,TopHeadOne,TopHeadTwo,TopNavLink, 
        UserInfoWrap,
        ShareBtn,
        SaveBtn,
        ExPhotoWrap,
        ExPhotoContainer,
        ExPhotoGridOne,
        ExPhotoGridTwo,
        ExPhotoGridThree,
        GridOneWrap,
        GridTwoWrap,
        GridListOne,
        GridListTwo,
        GridListThree,
        ExShowAllWrap,
        ShowAllBtnWrap,
        SimilarWrap,
        ExtraInfoWrap,
        ChooseDateWrap,
        DateSlideWrap,
        SlideTitle,
        SlideBtnWrap,
        DataPickBtnWrap,
        ExpDatePickWrap,
        SideDatesInput,
        ThingsWrap,
        ThingsInfoWrap,
        ThingInfoTop,
        ThingInfoBottom,
        IconInfoWrap,
        } from './ExDetailStyle';
import ExpDatePicker from './ExpDatePicker';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Map1 from '../../assets/images/houseSample/map1.jpg';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GridOnIcon from '@mui/icons-material/GridOn';
import { DateInput, GuestsInput, RoomSideInputField, SideDateInput, SideGuestsInput } from './ExDetailStyle';
import ExGuestDropdown from './ExGuestDropdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import MasksIcon from '@mui/icons-material/Masks';

const ExDetail = () => {

    const [isDatePikerOpen, setIsDatePickerOpen] = useState(false);
    const [isGuests, setIsGuests] = useState(false);
    const [guestsNum, setGuestsNum] = useState(1);

  return (
    <div>
        <ExDetailWrap>
            <ExDetailMid>
                <ExDetailMidWrap>
                    <ExDetailNavWrap>
                        <ol>
                            <li>
                                <TopNavLink>{ExperiencesData[0].city},{ExperiencesData[0].country}</TopNavLink>
                            </li>
                            <li>
                                <span></span>
                                <TopNavLink>  Transportation activities</TopNavLink>
                            </li>
                            <li>
                                <span></span>
                                <TopNavLink> Walk </TopNavLink>
                            </li>
                        </ol>
                    </ExDetailNavWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <DetailTopHead>
                        <TopHeadOne>
                            <h1>Tip-Based Walking Tour of Calgary</h1>
                        </TopHeadOne>
                        <TopHeadTwo>
                            <HeadTwoWrap>  
                                <ReviewNavBtn>                             
                                    <StarIcon sx={{ fontSize: '16px' }} />
                                    <span>{ExperiencesData[0].rating}</span>
                                </ReviewNavBtn>
                                <span>·</span> 
                                <span>{ExperiencesData[0].city},{ExperiencesData[0].province}{ExperiencesData[0].country} </span>
                            </HeadTwoWrap>
                            <HeadTwoBtnsWrap>
                                <ShareBtnWrap>
                                    <ShareBtn>
                                        <IosShareOutlinedIcon />
                                        <span>Share</span>
                                    </ShareBtn>
                                </ShareBtnWrap>
                                <SaveBtnWrap>
                                    <SaveBtn>
                                        <FavoriteBorderOutlinedIcon/>
                                        <span>Save</span>
                                    </SaveBtn>                           
                                </SaveBtnWrap>
                            </HeadTwoBtnsWrap>
                        </TopHeadTwo>
                    </DetailTopHead>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <ExPhotoWrap>
                        <ExPhotoContainer>
                            <ExPhotoGridOne>
                                <GridOneWrap>
                                    <img src={ExperiencesData[0].photo} />
                                </GridOneWrap>
                            </ExPhotoGridOne>
                            <ExPhotoGridTwo>
                                <GridTwoWrap>
                                    <GridListOne>
                                        <img src={ExperiencesData[1].photo} />
                                    </GridListOne>
                                    <GridListTwo>
                                        <img src={ExperiencesData[2].photo} />
                                    </GridListTwo>
                                    <GridListThree>
                                        <img src={ExperiencesData[3].photo} />
                                    </GridListThree>                                     
                                </GridTwoWrap>
                            </ExPhotoGridTwo>
                            <ExPhotoGridThree>
                                <GridOneWrap>
                                    <img src={ExperiencesData[4].photo} />
                                </GridOneWrap>
                            </ExPhotoGridThree>
                        </ExPhotoContainer>
                        <ExShowAllWrap>
                            <ShowAllBtnWrap>
                                <GridOnIcon/>
                                <span>Show all 5 photos</span>
                            </ShowAllBtnWrap>
                        </ExShowAllWrap>
                    </ExPhotoWrap>
                </ExDetailMidWrap>
            </ExDetailMid>
        </ExDetailWrap>
            <ExDetailMid>
                <ExDetailMidWrap>
                    <MidLeftWrap>
                        <MidLeftList>
                            <LeftTitleInfo>
                                <TitleInfoLeft>
                                    <LeftInfoTop>
                                        <h2>Experience hosted by Joshua</h2>
                                    </LeftInfoTop>
                                    <LeftInfoBottom>
                                        <span>3 hoursHosted · in English</span>
                                    </LeftInfoBottom>
                                </TitleInfoLeft>
                                <TitleInfoRight>
                                    <RightAvartar>
                                        <Avatar>H</Avatar>
                                    </RightAvartar>
                                </TitleInfoRight>
                            </LeftTitleInfo>
                        </MidLeftList>
                            
                        <MidLeftList>
                            <LeftMidInfo>
                                <MidInfoList>
                                    <InfoLists>
                                        <ThumbUpAltOutlinedIcon/>
                                        <InfoDetail>
                                            <h3>Excellent value</h3>
                                            <span>Guests say it's well worth the price.</span>
                                        </InfoDetail>
                                    </InfoLists>
                                    <InfoLists>
                                        <ChatOutlinedIcon />
                                        <InfoDetail>
                                            <h3>Super storytelling</h3>
                                            <span>Guests say this Host tells great stories.</span>
                                        </InfoDetail>
                                    </InfoLists>
                                    <InfoLists>
                                        <EditCalendarOutlinedIcon/>
                                        <InfoDetail>
                                            <h3>Cancellation flexibility</h3>
                                            <span>Free cancellation up to 24 hours before the start time.</span>
                                        </InfoDetail>
                                    </InfoLists>
                                </MidInfoList>
                            </LeftMidInfo>
                        </MidLeftList>

                        <MidLeftList>
                            <LeftLanguageInfo>
                                <LanguageInfoWrap>
                                    <GTranslateOutlinedIcon/>
                                    <LanguageInfoList>
                                        <span>Some info has been automatically translated.</span>
                                        <LanguageTranslateBtn>
                                            Show original language
                                        </LanguageTranslateBtn>
                                    </LanguageInfoList>
                                </LanguageInfoWrap>
                            </LeftLanguageInfo>                    
                        </MidLeftList>

                        <MidLeftList>
                            <LeftWillInfo>
                                <h2>What you'll do</h2>
                                <p> 
                                    Discover the fun history of the most country city in Canada on the #1 Best Rated Walking Tour in Calgary! <br></br><br></br>
                                    On this tips-based tour you will experience the must-see highlights of Calgary while hearing fun anecdotes of the cities history and great stories of the people who built it.<br></br><br></br>
                                    Your expert local guide will combine fun storytelling with exciting sightseeing with a personal touch. You will learn all there is to know about c… 
                                    <ReadMoreBtn>Read More</ReadMoreBtn>
                                </p>
                            </LeftWillInfo>
                        </MidLeftList>

                        <MidLeftList>
                            <LeftBottomInfo>
                                <BottomInfoWrap>
                                    <HostInfoWrap>
                                        <HostAvatar>
                                            <AvatarBtn>
                                                <Avatar>H</Avatar>
                                            </AvatarBtn>
                                        </HostAvatar>
                                        <HostSimpleInfo>
                                            <h2>Meet your host, Joshua</h2>
                                            <span>Host on Airbnb since 2020</span>
                                        </HostSimpleInfo>
                                    </HostInfoWrap>
                                    <HostRating>
                                        <StarOutlinedIcon/>
                                        <span>27 reviews</span>
                                    </HostRating>
                                    <HostIntro>
                                        <p> 
                                            I'm your local Canadian tour guide. I grew up in a small town, have deep roots dating back to before Canada's founding (1867), and embrace the traditional patriotic values of Canadians.<br></br><br></br>
                                            I have pursued many different paths in life, and have always enjoyed meeting new people and sharing a unique perspective with my community. I am curious so-journer.<br></br><br></br>
                                            I co-founded a small tour company Calgary. After traveling throughout the world, I found a passion..<ReadMoreBtn>Read More</ReadMoreBtn>
                                        </p>
                                    </HostIntro>
                                    <CoHostAvatar>
                                        <span>Co-hosts:</span>
                                        <CoHostLists>
                                            <CoAvatars>
                                                <CoHostLink>
                                                    <Avatar>H</Avatar>
                                                </CoHostLink>
                                            </CoAvatars>
                                            <CoAvatars>
                                                <CoHostLink>
                                                    <Avatar>H</Avatar>
                                                </CoHostLink>
                                            </CoAvatars>
                                        </CoHostLists>
                                    </CoHostAvatar>
                                    <ContactHostWrap>
                                        <HostLinkWrap>
                                            <HostLink>Contact hosts</HostLink>
                                        </HostLinkWrap>
                                        <PaymentInfoWrap>
                                            <GppMaybeOutlinedIcon/>
                                            <span>
                                                To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                                            <ReadMoreBtn>Learn more</ReadMoreBtn>
                                            </span>
                                        </PaymentInfoWrap>
                                    </ContactHostWrap>
                                </BottomInfoWrap>
                            </LeftBottomInfo>
                        </MidLeftList>
                    </MidLeftWrap>
                    <MidRightWrap>
                        <MidRightInfo>
                            <RightInfoWrap>
                                <InfoList>
                                    <DetailInfoWrap>
                                        <DetailLists>
                                            <h2>
                                                From $7 CAD /person
                                            </h2>
                                            <ShowPriceBtn>
                                                <span>Show all prices</span>
                                            </ShowPriceBtn>
                                            <RoomSideInputField>
                                                <SideDatesInput>
                                                    <GuestsInput>
                                                    <span>DATES</span>
                                                    <div>Add dates</div>
                                                    </GuestsInput>
                                                    <ExpandMoreIcon                                                     
                                                    onClick={() => {
                                                        setIsDatePickerOpen(!isDatePikerOpen);
                                                        }}/>                                                    
                                                    {isDatePikerOpen && (
                                                        <ExpDatePicker/>
                                                         )}                                                    
                                                </SideDatesInput>
                                                <SideGuestsInput
                                                    onClick={() => setIsGuests(!isGuests)}
                                                    className={isGuests ? 'active' : ''}
                                                >
                                                    <GuestsInput>
                                                    <span>GUESTS</span>
                                                    <div>{guestsNum} guests</div>
                                                    </GuestsInput>
                                                    <ExpandMoreIcon />
                                                    {isGuests && (
                                                    <ExGuestDropdown
                                                        setIsGuests={setIsGuests}
                                                        guestsNum={guestsNum}
                                                        setGuestsNum={setGuestsNum}
                                                    />
                                                    )}
                                                </SideGuestsInput>
                                            </RoomSideInputField>
                                             <PickOptionsList>
                                                <OptionsDetail>
                                                    <OptionsInfoWrap>
                                                        <DetailInfoList>
                                                            <h4>Thu., Jun.29</h4>
                                                            <span>10:00 AM - 1:00 PM</span>
                                                            <BookBtn>
                                                                <span>Book for a private group</span>
                                                            </BookBtn>
                                                        </DetailInfoList>
                                                    </OptionsInfoWrap>
                                                    <OptionsInfoWrap>
                                                        <span>$ 7 CAD /person</span>
                                                        <ChooseBtn>
                                                            <span>Choose</span>
                                                        </ChooseBtn>
                                                    </OptionsInfoWrap>
                                                </OptionsDetail>
                                            </PickOptionsList>

                                            <PickOptionsList>
                                                <OptionsDetail>
                                                <OptionsInfoWrap>
                                                    <DetailInfoList>
                                                        <h4>Thu., Jun.29</h4>
                                                        <span>10:00 AM - 1:00 PM</span>
                                                        <BookBtn>
                                                            <span>Book for a private group</span>
                                                        </BookBtn>
                                                    </DetailInfoList>
                                                </OptionsInfoWrap>
                                                <OptionsInfoWrap>
                                                    <span>$ 7 CAD /person</span>
                                                    <ChooseBtn>
                                                        <span>Choose</span>
                                                    </ChooseBtn>
                                                </OptionsInfoWrap>
                                                </OptionsDetail>
                                            </PickOptionsList>

                                            <PickOptionsList>    
                                                <OptionsDetail>
                                                    <OptionsInfoWrap>
                                                        <DetailInfoList>
                                                            <h4>Thu., Jun.29</h4>
                                                            <span>10:00 AM - 1:00 PM</span>
                                                            <BookBtn>
                                                                <span>Book for a private group</span>
                                                            </BookBtn>
                                                        </DetailInfoList>
                                                    </OptionsInfoWrap>
                                                    <OptionsInfoWrap>
                                                        <span>$ 7 CAD /person</span>
                                                        <ChooseBtn>
                                                            <span>Choose</span>
                                                        </ChooseBtn>
                                                    </OptionsInfoWrap>
                                                </OptionsDetail>
                                            </PickOptionsList>
                                        </DetailLists>
                                    </DetailInfoWrap>
                                </InfoList>
                                <InfoList>
                                    <ReportBtnWrap>
                                        <ReportBtn>
                                            < AssistantPhotoIcon />
                                            <span>Report this experience</span>
                                        </ReportBtn>
                                    </ReportBtnWrap>
                                </InfoList>
                            </RightInfoWrap>
                        </MidRightInfo>
                    </MidRightWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <MidLocationWrap>
                        <h2>Where you'll be</h2>
                        <img src={Map1}/>
                        <p>This tour makes a 7km or 4.3 miles route through Calgary's downtown, giving our guests an amazing overview of the city on one tour!</p>
                    </MidLocationWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <MidReviewWrap>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                                <Avatar>H</Avatar>
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                                <Avatar>H</Avatar>
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                            <Avatar>H</Avatar>
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                            <Avatar>H</Avatar>
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                                <Avatar>H</Avatar>                                           
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                        <div>
                            <h2>                                    
                                <StarOutlinedIcon/>
                                <span> 4.96 (27 reviews)</span>
                            </h2>
                            <ReviewListsWrap>
                                <ReviewDetails>
                                    <ReviewsInfo>
                                        <ReviewsUserInfo>
                                            <UserInfoWrap>
                                                <h1>Natalie</h1>
                                                <span>June 2023</span>
                                            </UserInfoWrap>
                                            <ReviewAvatarBtn>
                                                <Avatar>H</Avatar>                                           
                                            </ReviewAvatarBtn>
                                        </ReviewsUserInfo>
                                        <ReviewsIntro>
                                            <span>
                                                This was a good tour to familiarise myself with Calgary and learn more about this city. Darrell was an amiable and affable host.
                                            </span>
                                        </ReviewsIntro>
                                    </ReviewsInfo>   
                                </ReviewDetails>
                            </ReviewListsWrap>
                        </div>
                    </MidReviewWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <ChooseDateWrap>
                        <DateSlideWrap>
                            <SlideTitle>
                                <h2>Choose from available dates</h2>
                                <span>249 available</span>
                            </SlideTitle>
                            <SlideBtnWrap>
                                1/2
                            </SlideBtnWrap>
                        </DateSlideWrap>
                    </ChooseDateWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <ExtraInfoWrap>
                        <ThingsWrap>
                            <h2> Things to know</h2>  
                        </ThingsWrap>   
                        <ThingsInfoWrap>
                            <ThingInfoTop>
                                <h3>Guest requirements</h3>
                                <IconInfoWrap>
                                    <PersonIcon/>
                                    <span>Guests aged 2 and up can attend, up to 4 guests total. Parents can also bring children under 2 years of age.</span>
                                </IconInfoWrap>
                                <IconInfoWrap>
                                    <MasksIcon/>
                                    <span>Airbnb's health and safety guidelines apply.</span>
                                </IconInfoWrap>
                                <IconInfoWrap>
                                    <RollerSkatingIcon/>
                                    <span>The activity level for this Experience is light.</span>
                                </IconInfoWrap>
                                <IconInfoWrap>
                                    <BarChartIcon/>
                                    <span>The skill level for this Experience is beginner.</span>
                                </IconInfoWrap>
                            </ThingInfoTop>
                        <ThingInfoBottom>

                            </ThingInfoBottom>
                        </ThingsInfoWrap>                                                        
                    </ExtraInfoWrap>
                </ExDetailMidWrap>
            </ExDetailMid>

            <ExDetailMid>
                <ExDetailMidWrap>
                    <SimilarWrap>
                        
                            <h2>Similar experiences</h2>
                        
                           
                    </SimilarWrap>
                </ExDetailMidWrap>
            </ExDetailMid>
    </div>
  )
}

export default ExDetail;