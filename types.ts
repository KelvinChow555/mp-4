export type CompanyProps = {
    branding?:{logo_url?:string};
    ticker: string;
    name: string;
    description?: string;
    homepage_url?: string;
    primary_exchange?: string;
    market_cap?:number;
    list_date?: string;
    address?: { city?: string; state?: string };
    market?: string;
    total_employees?: number;
    weighted_shares_outstanding?: number;
    logo?: string | null;
};
export type PriceProps ={
    o: number;// open
    h: number;// high
    l: number;// low
    c: number;// close
    v: number;// volume
    t: number;// date
};