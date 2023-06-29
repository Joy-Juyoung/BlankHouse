import React from 'react'
import { ExperiencesData } from './ExperiencesData';
import { AvatarBtn, BookBtn, BottomInfoWrap, ChooseBtn, CoAvatars, CoHostAvatar, CoHostLink, CoHostLists, ContactHostWrap, DatePersonPick, DetailInfoList, DetailInfoWrap, DetailLists, ExDetailMid, 
        ExDetailMidWrap, 
        HostAvatar, 
        HostInfoWrap, 
        HostIntro, 
        HostLink, 
        HostLinkWrap, 
        HostRating, 
        HostSimpleInfo, 
        InfoDetail, 
        InfoList, 
        InfoLists, 
        LanguageInfoList, 
        LanguageInfoWrap, 
        LanguageTranslateBtn, 
        LeftBottomInfo, 
        LeftInfoBottom, 
        LeftInfoTop, 
        LeftLanguageInfo, 
        LeftMidInfo, 
        LeftTitleInfo,
        LeftWillInfo,
        MidInfoList, 
        MidLeftList, 
        MidLeftWrap, 
        MidLocationWrap, 
        MidReviewWrap, 
        MidRightInfo, 
        MidRightWrap, 
        OptionsDetail, 
        OptionsInfoWrap, 
        PaymentInfoWrap, 
        PickOptionsList, 
        ReadMoreBtn, 
        ReportBtn, 
        ReportBtnWrap, 
        ReviewAvatarBtn, 
        ReviewDetails, 
        ReviewListsWrap, 
        ReviewsInfo, 
        ReviewsIntro, 
        ReviewsUserInfo, 
        RightAvartar, 
        RightInfoWrap, 
        ShowPriceBtn, 
        TitleInfoLeft, 
        TitleInfoRight, 
        UserInfoWrap} from './ExDetailStyle';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Map1 from '../../assets/images/houseSample/map1.jpg';
const ExDetail = () => {
  return (
    <div>
        <span>Calgary,Canada > Transportation activities > Walk </span>

        <h1>Tip-Based Walking Tour of Calgary</h1>
        <span>rating · </span> 
        <span>Calgary,Alberta,Canada </span>
        <p>photos</p>
        <p>photos</p>
        <p>photos</p>
        <p>photos</p>
        <p>photos</p>

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
                                    <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
                                                <FaceOutlinedIcon/>
                                            </CoHostLink>
                                        </CoAvatars>
                                        <CoAvatars>
                                            <CoHostLink>
                                                <FaceOutlinedIcon/>
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
                                        <DatePersonPick>
                                            Dates Picker
                                        </DatePersonPick>
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
                                            <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
                                            <FaceOutlinedIcon/>
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
        
        </ExDetailMid>
    </div>
  )
}

export default ExDetail;