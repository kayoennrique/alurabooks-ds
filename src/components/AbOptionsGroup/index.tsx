import React, { useState } from "react";
import styled from "styled-components";

const SectionStylized = styled.section<{ selected: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${props => props.selected ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};;
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selected ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};;
        font-weight: 400;
        font-size: 12px;
    }
`;

export interface AbOptionsGroup {
    id: number
    title: string
    body: string
    footer: string
}

export interface AbOptionsGroupProps {
    options: AbOptionsGroup[]
    standardValue?: AbOptionsGroup | null
    onChange?: (option: AbOptionsGroup) => void
}

export const AbOptionsGroup = ({ options, onChange , standardValue} : AbOptionsGroupProps) => {
    const [selection, setSelection] = useState<AbOptionsGroup | null>(standardValue ?? null)
    const whenSelect = (option: AbOptionsGroup): void => {
        setSelection(option);
        if (onChange) {
            onChange(option)
        }
    }
    
    return (<>
        {options.map(option => 
            <SectionStylized
                onClick={() => whenSelect(option)}
                key={option.id}
                selected={selection?.id == option.id}
            >
                <header>
                    {option.title}
                </header>
                <div>
                    <strong>{option.body}</strong>
                </div>
                <footer>
                    {option.footer}
                </footer>
            </SectionStylized>
        )}
    </>);
}

