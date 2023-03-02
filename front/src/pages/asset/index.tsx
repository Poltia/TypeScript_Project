import React from "react";
import { AssetContainer } from "./style";

const Asset = () => {
  return (
    <AssetContainer>
      <div>
        <label>현금</label>
        <table>
          <tbody>
            <tr>
              <th>현금</th>
              <td>(금액)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <label>은행</label>
        <table>
          <tbody>
            <tr>
              <th>카카오뱅크</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>KB국민은행</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>우리은행</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>기업은행</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>신한은행</th>
              <td>금액</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <label>카드</label>
        <table>
          <tbody>
            <tr>
              <th>현대카드</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>우리카드</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>롯데카드</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>신한카드</th>
              <td>금액</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <label>저축</label>
        <table>
          <tbody>
            <tr>
              <th>카카오뱅크 세이프박스</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>카카오뱅크 26주 적금</th>
              <td>금액</td>
            </tr>
            <tr>
              <th>우리은행 자유적금</th>
              <td>금액</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AssetContainer>
  );
};

export default Asset;
