"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { Main, Gray } from "@/component/Styles";

const Form = styled.form`
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: #2563eb;
    color: white;
    font-size: 16px;

    &:disabled {
        opacity: 0.5;
    }
`;

export default function Home(){
    const[ticker, setTicker] = useState("");
    const router = useRouter();
    return(
        <Main>
            <h1>Stock Lookup</h1>
            <Gray>Enter a ticker to get the company&apos;s detail and the latest quote</Gray>
            <Form onSubmit={(event)=>{event.preventDefault();
                router.push(`/stock/${ticker.trim().toUpperCase()}`);
            }}
            >
                <Input value={ticker} onChange={(event)=>setTicker(event.target.value)} placeholder="e.g. AAPL"/>
                <Button type="submit" disabled={ticker.trim()===""}>
                    Search
                </Button>
            </Form>
        </Main>
    );
}
