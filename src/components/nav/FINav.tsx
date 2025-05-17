"use client";
import { useEffect, useState } from "react";
import { getRedirectUrl } from "@/utils/constants";


export default function FINav() {
  const [setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(getRedirectUrl());
  }, []);



  return (
    <nav>
      nav
    </nav>
  );
}
