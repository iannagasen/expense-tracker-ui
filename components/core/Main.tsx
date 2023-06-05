"use client";

import React from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import CalendarSection from "./CalendarSection";
import SummarySection from "./SummarySection";

export default function Main() {
  return (
    <MainWrapper>
      <CalendarSectionWrapper>
        <CalendarSection />
      </CalendarSectionWrapper>
      <AddExpenseSectionWrapper>
        <ExpenseForm />
      </AddExpenseSectionWrapper>
      <SummarySectionWrapper>
        <SummarySection></SummarySection>
      </SummarySectionWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  background-color: var(--clr-bg);
  margin: 25px;
  padding: 10px;
  height: calc(100vh - (25px * 2));
  border-radius: 5px;
  box-shadow: 0 2px 8px var(--clr-cta), 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const CalendarSectionWrapper = styled.div`
  /*assuming x=0, y=0 is at the bottom left of the grid box */
  /*start at x=0 (1 will be the start), will take 2 space*/
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
`;

const AddExpenseSectionWrapper = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
`;

const SummarySectionWrapper = styled.div`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
`;
