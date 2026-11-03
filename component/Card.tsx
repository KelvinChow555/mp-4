"use client";
import styled from "styled-components";

const Box = styled.section`
    margin-top: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: white;
`;

export default function Card({ children }: { children: React.ReactNode }) {
    return <Box>{children}</Box>
}