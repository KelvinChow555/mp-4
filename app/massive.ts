"use server"
import {CompanyProps, PriceProps } from "@/types";
const BASE_URL = "https://api.massive.com";
async function callApi(path: string){
    let res;
    try{
        res = await fetch(`${BASE_URL}${path}?apiKey=${process.env.STOCK_API_KEY}`);
    } catch {
        throw new Error("Couldn't reach the stock API. Please try again later.");
    }
    if (res.status === 429) {
        throw new Error("Too many requests. The free plan allows 5 per minute, so wait a minute and try again.");
    }
    if (res.status === 404) {
        return null;
    }
    if (!res.ok) {
        throw new Error(`The stock API returned an error (${res.status}).`);
    }
    return res.json();
}
async function getLogo(logoUrl?: string): Promise<string | null> {
    if (!logoUrl) {
        return null;
    }
    try {
        const res = await fetch(`${logoUrl}?apiKey=${process.env.STOCK_API_KEY}`);
        if (!res.ok) {
            return null;
        }
        const base64 = Buffer.from(await res.arrayBuffer()).toString("base64");
        return `data:${res.headers.get("content-type")};base64,${base64}`;
    } catch {
        return null; // no logo is fine, the rest of the page still shows
    }
}
export async function getPrice(ticker: string): Promise<PriceProps | null> {
    const data = await callApi(`/v2/aggs/ticker/${ticker}/prev`);
    if (!data || !data.results || data.results.length === 0) {
        return null;
    }
    return data.results[0];
}
export async function getCompany(ticker: string): Promise<CompanyProps | null> {
    const data = await callApi(`/v3/reference/tickers/${ticker}`);
    if (!data) {
        return null;
    }
    const company: CompanyProps = data.results;
    company.logo = await getLogo(company.branding?.logo_url);
    return company;
}


