import React from "react";
import { DayContainer, DayTbody, DayThead } from "./style";

const Day = () => {
  return (
    <DayContainer>
      <table>
        <DayThead>
          <tr>
            <td>날짜</td>
            <td>수입(_)</td>
            <td>지출(_)</td>
          </tr>
        </DayThead>
        <DayTbody>
          <tr>
            <td>category</td>
            <td>content</td>
            <td>price</td>
          </tr>
        </DayTbody>
      </table>
    </DayContainer>
  );
};

export default Day;
