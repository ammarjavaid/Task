import React from "react";
import { Filter } from "../assets";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const UserSearchAndFilter = ({ toggleSortOrder }) => {
  return (
    <>
      <SearchWrapper>
        <SerachBar>
          <Input type="text" placeholder="Enter" />
          <SearchIcon>
            <StyledSearchIcon />
          </SearchIcon>
        </SerachBar>
        <FilterImage src={Filter} alt="" onClick={toggleSortOrder} />
      </SearchWrapper>
    </>
  );
};

export default UserSearchAndFilter;

const SearchWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 20px;
`;

const SerachBar = styled.div`
  display: flex;
  border: 1px solid #dcdcdc;
  width: 100%;
`;

const Input = styled.input`
  padding: 5px 15px;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #49b0ab;
  padding: 9px 20px;
  cursor: pointer;
`;

const StyledSearchIcon = styled(FaSearch)`
  color: white;
`;

const FilterImage = styled.img`
  cursor: pointer;
`;
