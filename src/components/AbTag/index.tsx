import React from "react";
import styled from "styled-components";

export interface AbTagStyleProps {
    context?: 'primary' | 'secondary'
}
export interface AbTagProps extends AbTagStyleProps {
    text: string
}

const TagStyled = styled.div`
    padding: 24px 32px;
    color: #FFFFFF;
    background: ${(props: AbTagStyleProps) => props.context === 'primary' ? '#EB9B00' : 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'};
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`;

export const AbTag = ({ text, context = 'primary'  }: AbTagProps) => {
    return (
        <TagStyled context={context}>
            {text}
        </TagStyled>
    );
}