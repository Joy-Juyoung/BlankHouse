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
  HelpTbody,
  HelpTable,
  HelpThead,
  HelpTr,
  HelpTh,
  HelpTd,
} from './HelpStyle';
import SearchIcon from '@mui/icons-material/Search';
import { FAQList } from './FAQData';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQnA, getAllQnAAsync } from '../../redux/slices/helpSlice';

const HelpMain = ({ userMe }) => {
  const [navFAQ, setNavFAQ] = useState(true);
  const [navQnA, setNavQnA] = useState(false);
  const [kind, setKind] = useState('');

  const ListOfQnA = useSelector(getAllQnA);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQnAAsync({ kind }));
    // dispatch(getAllQnAAsync());
  }, [dispatch]);

  // console.log(
  //   'ListOfQnA',
  //   ListOfQnA?.filter((myQnA) => myQnA?.writer?.pk === userMe?.id)
  // );
  // console.log(' userMe?.pk', userMe);

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
          {!ListOfQnA || !userMe ? (
            <HelpContentsWrapper className='qna'>
              <HelpQnaList>
                <QuestionAnswerIcon sx={{ fontSize: 48 }} color='disabled' />
                <p>Your have no Q&A.</p>
              </HelpQnaList>
            </HelpContentsWrapper>
          ) : (
            <HelpContentsWrapper className='qna'>
              <p
                style={{
                  fontSize: '11px',
                  padding: '0 10px',
                }}
              >
                Total{' '}
                {
                  ListOfQnA?.filter((myQnA) => myQnA?.writer?.pk === userMe?.id)
                    ?.length
                }
              </p>
              <HelpTable>
                <HelpThead>
                  <HelpTr>
                    <HelpTh>ID</HelpTh>
                    <HelpTh>Kind</HelpTh>
                    <HelpTh>User</HelpTh>
                    <HelpTh>Status</HelpTh>
                    <HelpTh>Updated_at</HelpTh>
                  </HelpTr>
                </HelpThead>

                <HelpTbody>
                  {ListOfQnA?.filter(
                    (myQnA) => myQnA?.writer?.pk === userMe?.id
                  )
                    .slice(0, 6)
                    .map((qna) => {
                      return (
                        <HelpTr key={qna?.pk} className='qnaList'>
                          <HelpTd>{qna?.pk}</HelpTd>
                          <HelpTd>{qna?.kind}</HelpTd>
                          <HelpTd>{qna?.writer?.username}</HelpTd>
                          <HelpTd>{qna?.status}</HelpTd>
                          <HelpTd>{qna?.updated_at?.split('T')[0]}</HelpTd>
                        </HelpTr>
                      );
                    })}
                </HelpTbody>
              </HelpTable>
            </HelpContentsWrapper>
          )}
          <HelpMoreBtn>
            <button>Show All My Q&A</button>
          </HelpMoreBtn>
        </HelpMainContents>
      )}
    </HelpMainWrap>
  );
};

export default HelpMain;
