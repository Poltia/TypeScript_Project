import styled from "styled-components";
import Cancel from "../../assets/icons/Cancel";

interface Iprops extends React.HTMLAttributes<HTMLElement> {
  onClick?: () => void;
}

export const ValidateContainerDiv = styled.div`
  width: auto;
  padding: 1.5rem;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 4rem;
  margin-top: 10%;
  position: relative;
`;

export const ValidateInputWrapDiv = styled.div`
  border: 2px solid gray;
  padding: 3.5rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const ValidatedInput = styled.input`
  font-size: 4rem;
  border: 0 solid;
  width: 100%;
  outline: none;
`;

export const ValidateErrorLabel = styled.label<{ checkValidate: boolean }>`
  font-size: small;
  color: red;
  visibility: ${(props) => (props.checkValidate ? "hidden" : "visible")};
`;

export const CancelAll = styled(Cancel)<Iprops>``;
