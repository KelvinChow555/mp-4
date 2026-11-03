"use client";
import styled from "styled-components";

export const Main = styled.main`
    max-width: 768px;
    margin: 0 auto;
    padding: 32px 16px;
`;

export const Gray = styled.p`
    color: #6b7280;
`;

export const Grid = styled.dl`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

export const Label = styled.dt`
    font-size: 14px;
    color: #6b7280;
`;

export const Value = styled.dd`
    margin: 0;
    font-weight: bold;
`;
