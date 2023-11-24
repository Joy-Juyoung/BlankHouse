import React, { useEffect, useState } from 'react';
import {
  HelpMainWrap,
  HelpMainTop,
  HelpMainTitle,
  HelpMainSearch,
  HelpSearchWrapper,
  HelpMainNav,
  HelpNavWrapper,
  HelpMainContents,
  HelpContentsWrapper,
  HelpContentsList,
  HelpNav,
  HelpMoreBtn,
  HelpQnaList,
} from './HelpStyle';
import SearchIcon from '@mui/icons-material/Search';
import { FAQList } from './FAQData';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddIcon from '@mui/icons-material/Add';

const HelpMain = ({ userMe }) => {
  const [navFAQ, setNavFAQ] = useState(true);
  const [navQnA, setNavQnA] = useState(false);
  const handleNavClick = (e) => {
    if (e.target.id === 'QnA') {
      setNavQnA(true);
      setNavFAQ(false);
    }
    if (e.target.id === 'FAQ') {
      setNavQnA(false);
      setNavFAQ(true);
    }
  };

  return (
    <HelpMainWrap>
      <HelpMainTop>
        <HelpMainTitle>
          Hi {userMe?.username || 'Guest'}, how can we help?
        </HelpMainTitle>
        <HelpMainSearch>
          <HelpSearchWrapper>
            <input type='text' placeholder='Search for a question' />
          </HelpSearchWrapper>
          <HelpSearchWrapper>
            <button>
              <SearchIcon fontSize='small' />
            </button>
          </HelpSearchWrapper>
        </HelpMainSearch>
      </HelpMainTop>
      <HelpMainNav>
        <HelpNavWrapper>
          <HelpNav
            onClick={handleNavClick}
            id='FAQ'
            className={navFAQ ? 'active' : ''}
          >
            FAQ
          </HelpNav>
          <HelpNav
            onClick={handleNavClick}
            id='QnA'
            className={navQnA ? 'active' : ''}
          >
            1:1 Q&A
          </HelpNav>
        </HelpNavWrapper>
      </HelpMainNav>
      {navFAQ && (
        <HelpMainContents>
          <HelpContentsWrapper>
            {FAQList?.slice(0, 6).map((faq) => {
              return (
                <HelpContentsList key={faq?.id}>
                  <p>{faq?.title}</p>
                  <span>
                    {faq?.description.length > 70
                      ? `${faq?.description.substring(0, 70)}...`
                      : faq?.description}
                  </span>
                </HelpContentsList>
              );
            })}
          </HelpContentsWrapper>
          <HelpMoreBtn>
            <button>Show All FAQ</button>
          </HelpMoreBtn>
        </HelpMainContents>
      )}
      {navQnA && (
        <HelpMainContents>
          {/* <>
            <HelpContentsWrapper className='qna'>
              {FAQList?.slice(0, 6).map((faq) => {
                return (
                  <HelpContentsList key={faq?.id}>
                    <p>{faq?.title}</p>
                    <span>
                      {faq?.description.length > 70
                        ? `${faq?.description.substring(0, 70)}...`
                        : faq?.description}
                    </span>
                  </HelpContentsList>
                );
              })}
            </HelpContentsWrapper>
            <HelpMoreBtn>
              <button>
                <AddIcon sx={{ fontSize: 18 }} />
                Add Question
              </button>
            </HelpMoreBtn>
          </> */}
          <>
            <HelpContentsWrapper className='qna'>
              <HelpQnaList>
                <QuestionAnswerIcon sx={{ fontSize: 48 }} color='disabled' />
                <p>Your have no Q&A.</p>
              </HelpQnaList>
            </HelpContentsWrapper>
            <HelpMoreBtn>
              <button>
                <AddIcon sx={{ fontSize: 18 }} />
                Add Question
              </button>
            </HelpMoreBtn>
          </>
        </HelpMainContents>
      )}
    </HelpMainWrap>
  );
};

export default HelpMain;
