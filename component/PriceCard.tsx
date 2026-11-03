"use client"
import styled from "styled-components";
import {PriceProps} from "@/types";
import { Gray, Grid, Label, Value } from "./Styles";

const BigPrice = styled.span`
    margin-right: 12px;
    font-size: 36px;
    font-weight: bold;
`;

export default function PriceCard({price}:{price:PriceProps}){
    const change = price.c - price.o;
    const percentage = (change / price.o) * 100;
    const date = new Date(price.t).toLocaleDateString("en-US", { dateStyle: "long", timeZone: "America/New_York" });
    let color = "red";
    let sign = "";
    if(change > 0){
        color = "green";
        sign = "+";
    }else if(change === 0){
        color = "gray"
    }
    const stats = [
        { label: "Open", value: `$${price.o}` },
        { label: "High", value: `$${price.h}` },
        { label: "Low", value: `$${price.l}` },
        { label: "Volume", value: price.v },
    ];
    return(
        <div>
            <Gray>Latest close : {date}</Gray>
            <div>
                <BigPrice>${price.c}</BigPrice>
                <span style={{ color: color }}>
                    {sign}
                    {change.toFixed(2)} ({sign}
                    {percentage.toFixed(2)}%)
                </span>
            </div>
            <Grid>
                {stats.map((stats) => (
                    <div key={stats.label}>
                        <Label>{stats.label}</Label>
                        <Value>{stats.value}</Value>
                    </div>
                ))}
            </Grid>
        </div>
    );
}
