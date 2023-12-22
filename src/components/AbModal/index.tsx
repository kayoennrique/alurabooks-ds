import React, { ReactNode } from "react"
import styled from "styled-components";

export interface AbModalProps {
    children: ReactNode,
    title: string,
    open: boolean,
    whenClose: () => void
}

const ModalWindow = styled.div`
    position: fixed;
    padding: 64px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ModalBackground = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
`

const TitleModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`
const TitleModal = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
    margin: 0;
`
const ButtonCloseModal = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002F52;
`

export const AbModal = ({ children, open, whenClose, title }: AbModalProps) => {
    if (!open) {
        return <></>
    }
    return (
        <>
            <ModalBackground onClick={whenClose} />
            <ModalWindow>
                <TitleModalWrapper>
                    <TitleModal>{title}</TitleModal>
                    <ButtonCloseModal onClick={whenClose}>X</ButtonCloseModal>
                </TitleModalWrapper>
                {children}
            </ModalWindow>
        </>
    )
}