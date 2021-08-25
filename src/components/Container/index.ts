import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    max-width: 800px;
    margin: auto;
  }
`
export default Container
