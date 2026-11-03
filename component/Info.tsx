"use client"
import Image from "next/image";
import styled from "styled-components";
import { CompanyProps } from "@/types";
import { Gray, Grid, Label, Value } from "./Styles";

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Logo = styled(Image)`
    height: 48px;
    width: auto;
`;

export default function Info({company}: {company: CompanyProps}){
    let hq = "N/A";
    if(company.address){
        hq = `${company.address.city}, ${company.address.state}`;
    }
    const facts = [
        {label: "MarketCap (USD)", value: company.market_cap},
        {label: "Exchange", value: company.primary_exchange},
        {label: "Employees", value: company.total_employees},
        {label: "List sinced", value : company.list_date},
        {label: "Headquarters", value: hq},
        {label: "Weighted_share_outstanding", value: company.weighted_shares_outstanding},
    ];
    return (
        <div>
            <Top>
                {company.logo && (
                    <Logo src={company.logo} alt="" width={256} height={96}/>
                )}
                <div>
                    <h1>{company.name}</h1>
                    <Gray>{company.ticker}</Gray>
                </div>
            </Top>
            <p>{company.description}</p>
            <Grid>
                {facts.map((fact) => (
                    <div key={fact.label}>
                        <Label>{fact.label}</Label>
                        <Value>{fact.value ?? "N/A"}</Value>
                    </div>
                ))}
            </Grid>
            {company.homepage_url && (
                <a href ={company.homepage_url} target="_blank">
                    visit company website
                </a>
            )}
        </div>
    );
}
