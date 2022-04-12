import styled from 'styled-components';

const StyledOutsideBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 6rem;
    padding: .25rem;
    transition: ease-in .05s;
    border-radius: 0.25rem;
    :hover {
        transform: scale(1.05);
        border: 2px solid blue;
    }
    cursor: pointer;

    border: ${props => props.active ? "2px solid blue" : ''};    
`


const StyledColorBox = styled.div`
    height: 5rem;
    width: 5rem;
    border: 2px solid gray;
    border-radius: 0.25rem;
    background-color: ${props => props.bg};
`

export const ColorBox = ({active, color, handleSelectedColor}) => {
    return(
        <StyledOutsideBox active={active} onClick={() => handleSelectedColor(color)}>
            <StyledColorBox bg={color} />
        </StyledOutsideBox>
    )
}