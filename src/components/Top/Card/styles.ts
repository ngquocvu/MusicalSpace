import styled from 'styled-components'
const Container = styled.div`
  background: ${(props) => props.theme.colors.btnBackground};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;
  padding: 1em;
  width: 100%;
  margin: 5px 5px 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
const Title = styled.div`
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 1.25em;
  background-color: inherit;
`
const Description = styled.p`
  font-weight: 300;
  background-color: inherit;
`

export { Container, Title, Description }
