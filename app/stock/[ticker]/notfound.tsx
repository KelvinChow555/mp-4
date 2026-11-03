"use client";
import ErrorMessage from "@/component/ErrorM";
export default function TickerNotFound() {
    return <ErrorMessage title="Ticker not found" message="Check the symbol and try again, for example AAPL." />;
}