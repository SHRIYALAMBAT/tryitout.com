import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: yellow;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`


const Deals = () => {
    return (
        <Container>
            Today's Deal! Free shipping over 800
        </Container>
    )
}

export default Deals