import styled from "styled-components";

interface Iprops extends React.HTMLAttributes<HTMLElement> {
  onClick?: () => void;
}

export const ValidateContainerDiv = styled.div`
  padding: 5px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  margin-top: 10%;
  position: relative;
`;

export const ValidateInputWrapDiv = styled.div`
  border: 2px solid gray;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const ValidatedInput = styled.input`
  font-size: 20px;
  border: 0 solid;
  width: 100%;
  outline: none;
`;

export const ValidateErrorLabel = styled.label<{ checkValidate: boolean }>`
  font-size: small;
  color: red;
  visibility: ${(props) => (props.checkValidate ? "hidden" : "visible")};
`;
