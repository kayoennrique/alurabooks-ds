import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    text?: string
    kind?: 'primary' | 'secondary'
    isBlock?: boolean
    onClick?: () => void
}

const StylizedButton = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps) => props.kind === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbButtonProps) => props.kind === 'primary' ? '#FFF' : '#EB9B00'};
    width: ${(props: AbButtonProps) => props.isBlock ? '100%' : 'auto'};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbButtonProps) => props.kind === 'primary'
        ? css`
            &:hover {
                background: #B87900;
                border: 2px solid #B87900;
            }
        `
        : css`
        &:hover {
            background: #FFF;
            border: 2px solid #B87900;
            color: #B87900;
        }
        `
    }
`;

export const AbButton = ({ text, onClick, kind = 'primary' }: AbButtonProps) => {
    return (<StylizedButton onClick={onClick} kind={kind}>
        {text}
    </StylizedButton>);
}