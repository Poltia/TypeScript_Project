import React from "react";
import { SpendingButton, SpendingContainer } from "./style";

const Spending = () => {
  return (
    <SpendingContainer>
      <table>
        <tbody>
          <tr>
            <th>날짜</th>
            <td>date</td>
          </tr>
          <tr>
            <th>자산</th>
            <td>지출</td>
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
      <SpendingButton>저장</SpendingButton>
    </SpendingContainer>
  );
};

export default Spending;
