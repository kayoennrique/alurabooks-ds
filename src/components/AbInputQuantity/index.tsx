import React from "react";
import styled from "styled-components";

const StylizedButton = styled.button`
    background: #002F52;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    width: 28px;
    height: 28px;
    border-radius: 50%;
`;
const SpanStylized = styled.span`
    font-size: 18px;
    line-height: 27px;
    display: inline-block;
    margin: 0 12px;
    color: #002F52;
    font-family: Arial, Helvetica, sans-serif;
`;

const FlexContainerStylized = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContainerStylized = styled.div`
    width: 100px;
    text-align: center;
    display: inline-block;
`;

const LabelStylized = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
`;

export interface AbInputQuantityProps {
    onChange: (value: number) => void
    value: number
}

export const AbInputQuantity = ({ onChange, value }: AbInputQuantityProps) => {


    return (
        <ContainerStylized>
            <LabelStylized>Quantidade</LabelStylized>
            <FlexContainerStylized>
                {value !== 0 && <StylizedButton
                    onClick={() => onChange(value - 1)}>
                    -
                </StylizedButton>}
                <SpanStylized>
                    {value}
                </SpanStylized>
                <StylizedButton onClick={() => onChange(value + 1)}>
                    +
                </StylizedButton>
            </FlexContainerStylized>
        </ContainerStylized>
    );
}
