import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import Routines from "../components/Routines";
import UserList from "../components/UserList";

const Home = () => {
  const [data, setData] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const userData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://devapi.getgoally.com/v1/api/reminders/all",
        {
          headers: {
            Authorization: "ddc58e6a-2e69-4f44-97e8-1454eb352069",
          },
        }
      );
      setData(response?.data?.docs);
      setSearchData(response?.data?.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    if (data) {
      setLoading(true);
      const sortedData = [...data].sort((a, b) =>
        sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );

      setSearchData(sortedData);
      setLoading(false);
    }
  }, [sortOrder]);

  return (
    <>
      <MainWrapper>
        <Header />
        <Routines />
        <UserList
          data={data}
          loading={loading}
          toggleSortOrder={toggleSortOrder}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </MainWrapper>
    </>
  );
};

export default Home;

const MainWrapper = styled.section`
  width: 400px;
  margin: auto;
  background-color: white;
  padding-bottom: 2rem;
`;
