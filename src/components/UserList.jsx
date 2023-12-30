import React, { useEffect } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { Default, Filter } from "../assets";
import styled from "styled-components";
import { Pagination, Spin } from "antd";

const UserList = ({
  data,
  loading,
  toggleSortOrder,
  setSearchData,
  searchData,
}) => {
  // filtering users
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
      const filterRoles = data.filter((user) => {
        return user?.name?.toLowerCase()?.includes(searchTerm);
      });
      setSearchData(filterRoles);
    } else {
      setSearchData(data);
    }
  };

  useEffect(() => {
    if (searchData?.length > 0) {
      setSearchData(searchData?.slice(0, 5));
    }
  }, [searchData?.length]);

  // default-img
  const handleImageError = (e, defaultImageUrl) => {
    console.error("Error loading image:", e);
    e.target.onerror = null;
    e.target.src = defaultImageUrl;
  };

  // pagination
  const pagination = (page, listingSize) => {
    const pageDefault = (page - 1) * listingSize;
    const size = page * 5;

    const listSize = data?.slice(pageDefault, size);
    setSearchData(listSize);
  };

  return (
    <>
      <SearchWrapper>
        <SerachBar>
          <Input type="text" placeholder="Enter" onChange={handleChange} />
          <SearchIcon>
            <StyledSearchIcon />
          </SearchIcon>
        </SerachBar>
        <FilterImage src={Filter} alt="" onClick={toggleSortOrder} />
      </SearchWrapper>

      {loading ? (
        <Spinner>
          <Spin />
        </Spinner>
      ) : (
        <>
          {searchData?.length === 0 ? (
            <Text>No results found.</Text>
          ) : (
            searchData?.map((el) => (
              <>
                <Wrapper>
                  <UserImgName>
                    <ProfileImage
                      src={el?.visualAidUrl}
                      alt=""
                      onError={(e) => handleImageError(e, Default)}
                    />
                    <div>
                      <HeaderFive> {el?.name} </HeaderFive>
                      <Schedule> {el?.schedule?.Sun} </Schedule>
                    </div>
                  </UserImgName>
                  <div>
                    <FaChevronRight />
                  </div>
                </Wrapper>
                <hr />
              </>
            ))
          )}
        </>
      )}

      <Pagination
        onChange={(e, page) => pagination(e, page)}
        className="pagination"
        defaultCurrent={1}
        total={data?.length}
        showSizeChanger={false}
        pageSize={5}
        style={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default UserList;

// for search

const SearchWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 20px;
  padding: 0 10px;
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

// for user lists

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 15px 0 10px;
`;

const UserImgName = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

const HeaderFive = styled.h5`
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 50%;
  font-size: 12px;
  height: 50vh;
`;

const Schedule = styled.p`
  color: "red";
  font-size: 12px;
`;

const Spinner = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: calc(100vh - 283px);
`;
