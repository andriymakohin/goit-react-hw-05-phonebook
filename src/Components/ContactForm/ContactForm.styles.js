import styled from "styled-components";
import transition from "styled-transition-group";

export const Form = styled.form`
  display: flex;
    flex-direction: column;
    padding: 12px;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-bottom: 16px;
`;

export const Label = styled.label`
    display: inline-block;
    margin-bottom: 16px;
    font-size: 20px;
    color: #171718;
`;
export const Input = styled.input`
    color: #171718;
    font: inherit;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
    width: 350px;
    outline: 0;
`;

// export const ButtonNon = styled.button`
// display: none;
// `

export const Button = transition.button.attrs({
  unmountOnExit: false,
  timeout: 3500,
})`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #3f51b5;
    border: 0;
    outline: 0;
    padding: 8px 24px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
    font: inherit;
    text-transform: uppercase;
    user-select: none;
    transition: background-color 200ms ease-in-out;
    :hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
  &:enter {
    opacity: 0;
    transform: translateX(100%);
  }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms ease-in, transform 250ms ease-in;
  }
  &:exit {
    opacity: 1;
    transform: translateX(0);
  }
  &:exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 250ms ease-in .3s, transform 250ms ease-in .3s;
  }
  
`;
export const Message = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3500,
})`
  background: red;
  width:220px;
  height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  font-weight: 500;
  border-radius:8px;
  display:flex;
  justify-content:center;
  align-items:center;
  span{
    color:#fff;
  }
  &:enter {
    opacity: 0;
    transform: translateX(100%);
  }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms ease-in, transform 250ms ease-in;
  }
  &:exit {
    opacity: 1;
    transform: translateX(0);
  }
  &:exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 250ms ease-in .3s, transform 250ms ease-in .3s;
  }
`;