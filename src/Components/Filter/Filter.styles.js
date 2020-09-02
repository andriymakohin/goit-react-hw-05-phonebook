import transition from "styled-transition-group";
import styled from "styled-components";



export const Form = transition.form.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-bottom: 16px;
    &:enter { 
      opacity: 0;
    }
  &:enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
  &:exit { 
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: opacity 250ms ease-in;
  }
`;

export const Label = styled.label`
      display: inline-block;
      margin-bottom: 16px;
      font-size: 20px;
      color: #171718;
`;


// export const InputFilter = transition.input.attrs({
//   unmountOnExit: true,
//   timeout: 250,
// })
export const InputFilter = styled.input`
    color: #171718;
    font: inherit;
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid rgb(98, 132, 177);
    width: 350px;
    outline: 0;
      

`;
