import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MainCategoryContainer = styled.div``;

const MainCategoryWrap = styled.div``;

const CategoryIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ categorypick }) => (categorypick ? '#000' : 'gray')};
  /* margin: 0 20px; */

  span {
    margin: 3px 0;
    font-size: 13px;
    padding-bottom: 5px;
    border-bottom: ${({ categorypick }) =>
      categorypick ? '3px solid #000' : ''};
  }
`;

const MainCategories = ({ category }) => {
  const location = useLocation();

  return (
    <MainCategoryContainer>
      <MainCategoryWrap>
        <CategoryIcons categorypick={category?.name === 'All' ? true : false}>
          {category?.icon}
          <span>{category?.name}</span>
        </CategoryIcons>
      </MainCategoryWrap>
    </MainCategoryContainer>
  );
};

export default MainCategories;
