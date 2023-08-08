import React, { useState,useCallback, useEffect } from 'react';
import { MainListWrap, MainMidList, MainMidTitle, MainMidWrap, MainTopWrap, 
        TopMenuContainer, TopMenuWrap } from './ExperienceStyle';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CategoryList from './CategoryList';
import OnlineCard from '../OnlineExperiences/OnlineCard';
import ExpListCard from './ExpListCard';
import { ExperiencesData } from './ExperiencesData';
import { useDispatch, useSelector } from 'react-redux';
import { allExperiences } from '../../redux/slices/experiences';
import PageLoading from '../../components/Loading/PageLoading';
import { Link, useNavigate } from 'react-router-dom';


const Experience = () => {
  const [loading, setLoading] = useState(false);

  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                            {experiences?.[0]?.map((experience, index) => {
                              console.log("test",experience);
                            return (
                              <Link key={index} 
                              // to={`/experiences/${experience?.pk}`}
                              // to='/experiences/3'
                              onClick={()=>{navigate(`/experiences/${experience?.pk}`)}}

                              // back page 갈수 있다. onClick={()=>{navigate(-1)}}
                              >
                                <ExpListCard experience={experience} loading={loading} exIndex={index}/>
                              </Link>                                    
                                    )
                            })}
                        </MainListWrap>

                    </MainMidWrap>
                </MainMidList>
            </TopMenuWrap>
        </TopMenuContainer>
  )
}

export default Experience;
