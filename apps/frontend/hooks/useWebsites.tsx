import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import axios from "axios";
export function useWebsites(){
    const {getAuth}  = useAuth();

    useEffect(()=>{
        const auth = getAuth();
        axios.get("/api/v1/websites",{
            headers:{
                Authorization: `Bearer ${auth.session?.accessToken}`
            }
        }).then((res)=>{
            console.log(res.data);
        })
    },[])
}