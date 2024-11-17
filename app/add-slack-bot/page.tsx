"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Search() {
  const code = useSearchParams().get("code");

  return <div>Your code: {code}</div>;
}
const Authorization = () => {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
};

export default Authorization;
