import styled from "styled-components";

const StyledOutsideInternalMemoryBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
    transition: ease-in .05s;
    border-radius: 0.25rem;
    
    :hover {
        transform: scale(1.05);
        border: 2px solid blue;
        font-weight: bold;
    }

    border: ${props => props.active ? "2px solid blue" : ''};
    font-weight: ${props => props.active ? "bold" : ''};
    cursor: pointer;
`

const StyledInternalMemoryBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    border: 2px solid gray;
    border-radius: 0.25rem;
`

export const InternalMemoryBox = ({active, internalMemory}) => {
    return(
        <StyledOutsideInternalMemoryBox active={active}>
            <StyledInternalMemoryBox>
                {internalMemory}
            </StyledInternalMemoryBox>
        </StyledOutsideInternalMemoryBox>
    )
}