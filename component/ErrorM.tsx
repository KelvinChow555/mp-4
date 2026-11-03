"use client"
import Link from "next/link"
import styled from "styled-components";
import { Main } from "./Styles";

const Box = styled.div`
    padding: 8px 24px 24px;
    border-radius: 12px;
    background: #fee2e2;
    color: #991b1b;
`;

export default function ErrorM({title, message}:{title: string; message:string}) {
    return (
        <Main>
            <Box>
                <h1>{title}</h1>
                <p>{message}</p>
                <Link href="/">
                    Back to search
                </Link>
            </Box>
        </Main>
    );
}
