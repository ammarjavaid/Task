import React from "react";
import { Cloud, Moon, Sun } from "../assets";
import { Switch } from "antd";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const Routines = () => {
  return (
    <>
      <MorningNightRoutine>
        <MorningRoutine>
          <Heading>Morning Routine</Heading>
          <Weekday>
            <WeekdayTop>
              <div className="day-and-time">
                <Text>Weekdays</Text>
                <Text>7:00 AM</Text>
              </div>
              <div className="img">
                <img src={Sun} alt="" />
                <ImageCloud src={Cloud} alt="" />
              </div>
            </WeekdayTop>
            <WeendayBottom>
              <Switch defaultChecked />
              <FaChevronRight />
            </WeendayBottom>
          </Weekday>
        </MorningRoutine>
        <NightRoutine>
          <Heading> Night Routine </Heading>
          <Everyday>
            <EverydayTop>
              <div className="day-and-time">
                <EverydayText>Everyday</EverydayText>
                <EverydayText>9:00 PM</EverydayText>
              </div>
              <div className="img">
                <img src={Moon} alt="" />
              </div>
            </EverydayTop>
            <EverydayBottom>
              <Switch />
              <FaChevronRight style={{ color: "white" }} />
            </EverydayBottom>
          </Everyday>
        </NightRoutine>
      </MorningNightRoutine>
    </>
  );
};

export default Routines;

const MorningNightRoutine = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  padding: 0 10px;
`;

const MorningRoutine = styled.div`
  width: 100%;
`;

const Heading = styled.h4`
  text-align: center;
  font-size: 16px;
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const NightRoutine = styled.div`
  width: 100%;
`;

const Weekday = styled.div`
  background-color: #cfe4ff;
  padding: 10px 20px;
  border-radius: 10px;
`;

const WeekdayTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
`;

const Text = styled.p`
  margin: 0;
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

const WeendayBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageCloud = styled.img`
  position: absolute;
  right: 0;
  top: 7px;
`;

// ------------------
const Everyday = styled.div`
  background-color: #103c58;
  padding: 10px 20px;
  border-radius: 10px;
`;

const EverydayTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const EverydayText = styled.p`
  margin: 0;
  color: white;
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

const EverydayBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
