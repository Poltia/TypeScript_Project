import styled, { StyledComponent } from "styled-components";
import Eye from "@/assets/icons/Eye";
import EyeClose from "@/assets/icons/EyeClose";

interface Iprops extends React.HTMLAttributes<HTMLElement> {
  onClick?: () => void;
}

export const PasswordContainerDiv = styled.div`
  width: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  position: relative;
`;

export const PasswordInputWrapDiv = styled.div`
  border: 2px solid gray;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const PasswordInput = styled.input`
  font-size: 20px;
  border: 0 solid;
  width: 100%;
  outline: none;
`;

export const PasswordValidateLabel = styled.label<{ checkValidate: boolean }>`
  font-size: small;
  color: red;
  visibility: ${(props) => (props.checkValidate ? "hidden" : "visible")};
`;
export const EyeIcon = styled(Eye)<Iprops>``;

export const EyeCloseIcon = styled(EyeClose)<Iprops>``;
