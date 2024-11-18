"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Authorization = () => {
  const code = useSearchParams().get("code");
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-access-token?code=${code}` ,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => res.json())

        setAccessToken(response.access_token);
        return;
      }catch(error){
        console.error(error);
      }finally{
        setLoading(false);
      }
    }

    fetchData();
  },[])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Your access token: {accessToken}</div>
    </Suspense>
  );
};

export default Authorization;
