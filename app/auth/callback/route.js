import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req){
    const cookiesStore = cookies();
    const supabase = createClientComponentClient({cookies: () => cookiesStore});

    const {useSearchParams} = new URL(req.url);

    const code = useSearchParams.get('code');

    if(code) {
        await supabase.auth.exchangeCodeForSession(code);
    }
    
    return NextResponse.redirect(new URL('/watch-list', req.url));
}