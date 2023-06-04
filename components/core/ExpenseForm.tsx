"use client";

import React from "react";
import styled from "styled-components";

export default function ExpenseForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ExpenseFormWrapper>
      <div>Add Expense</div>
      <form>
        <DateField />
        <ExpenseTypeField />
        <AmountTypeField />
        <button>Submit</button>
      </form>
    </ExpenseFormWrapper>
  );
}

const DateField = () => {
  return (
    <FormFieldWrapper>
      <label>Date</label>
      <input type="date" placeholder="YYYY-MM-DD" />
    </FormFieldWrapper>
  );
};

const ExpenseTypeField = () => {
  return (
    <FormFieldWrapper>
      <label>Type</label>
      <select>
        <option value="1">Type 1</option>
        <option value="2">Type 2</option>
        <option value="3">Type 3</option>
        <option value="4">Type 4</option>
      </select>
    </FormFieldWrapper>
  );
};

const AmountTypeField = () => {
  return (
    <FormFieldWrapper>
      <label>Amount</label>
      <input type="number"></input>
    </FormFieldWrapper>
  );
};

const ExpenseFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 60vh;
  margin: 30vh auto;
  border-radius: 7px;
  box-shadow: 0 1px 4px var(--clr-cta), 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;

  & > *:first-child {
    height: 50px;
    border-radius: 7px 7px 0 0;

    text-transform: uppercase;
    font-weight: 800;
    font-size: 25px;
  }

  form {
    flex-grow: 1;
    margin-top: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: auto;

      box-shadow: 0 0 4px var(--clr-cta);
      border-radius: 5px;
      border: 0.5px solid var(--clr-cta);
      padding: 10px;
      transition: background 0.3s ease;

      :hover {
        background: var(--clr-cta);
      }
    }
  }
`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;

  input,
  select {
    height: 30px;
    border: none;
    background: #7ee6c5;
    box-shadow: 0 0 4px var(--clr-cta);
    border-radius: 5px;
    font-weight: 300;
    padding: 2px 5px;
    transition: background 0.3s ease;
    appearance: none;

    :focus,
    :hover {
      border: 0.5px solid var(--clr-cta);
      background: none;
    }
  }

  option {
    border: none;

    :checked {
      background-color: var(--clr-cta);
    }
  }

  & + & {
    margin-top: 15px;
  }
`;
