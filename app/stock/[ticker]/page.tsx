import Link from "next/link";
import { notFound } from "next/navigation";
import CompanyInfo from "@/component/Info";
import ErrorM from "@/component/ErrorM";
import PriceCard from "@/component/PriceCard";
import Card from "@/component/Card";
import { Main, Gray } from "@/component/Styles";
import { getCompany, getPrice } from "@/app/massive";
export default async function stockPage({params}: {params:Promise<{ticker: string}>}){
    const {ticker} = await params;
    const symbol = ticker.toUpperCase();
    let company;
    let price;
    try {
        company = await getCompany(symbol);
        price = await getPrice(symbol);
    }catch(error){
        return <ErrorM title={`Couldn't load ${symbol}`} message={(error as Error).message} />;
    }
    if (!company) {
        notFound();
    }
    return(
        <Main>
            <Link href="/">
                Back to search
            </Link>
            <Card>
                <CompanyInfo company={company} />
            </Card>
            {price && (
                <Card>
                    <PriceCard price={price} />
                </Card>
            )}
            {!price && <Gray>No price data for {symbol}.</Gray>}
        </Main>
    );
}