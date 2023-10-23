import styled from 'styled-components'

type ContainerProps = {
  bgColor: string
}
export const Container = styled.div<ContainerProps>`
  max-width: 600px;
  margin: auto;
  background-color: ${ props => props.bgColor };
  color: white;
  padding: 20px;
  display: flex;

  span {
    font-weight: bold;
    color: #000;
  }

  .link {
    color: #FFF;

    &:hover {
      color: #F00;
    }
  }

  @media (max-width: 500px) {
    background-color: green;
    flex-direction: column;

    span {
      color: #00F
    }
  }

`

type BotaoProps = {
  bg: string
  small?: boolean
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${ (props) => props.small ? '15px' : '30px'};
  background-color: ${ props => props.bg };
`