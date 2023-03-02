import React from "react";
import { IncomeButton, IncomeContainer } from "./style";

const Income = () => {
  return (
    <IncomeContainer>
      <table>
        <tbody>
          <tr>
            <th>날짜</th>
            <td>date</td>
          </tr>
          <tr>
            <th>자산</th>
            <td>수입</td>
          </tr>
          <tr>
            <th>분류</th>
            <td>category</td>
          </tr>
          <tr>
            <th>금액</th>
            <td></td>
          </tr>
          <tr>
            <th>내용</th>
            <td>content</td>
          </tr>
        </tbody>
      </table>
      <IncomeButton>저장</IncomeButton>
    </IncomeContainer>
  );
};

export default Income;
