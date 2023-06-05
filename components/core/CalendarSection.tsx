import React from "react";

import styled from "styled-components";
import { Calendar } from "@/components/ui/calendar";

const CalendarSection = () => {
  return <Wrapper>Calendar</Wrapper>;
};

const Wrapper = styled.div`
  height: 100%;

  border-radius: 7px;
  box-shadow: 0 1px 4px var(--clr-cta), 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 22px;
`;

export default CalendarSection;
