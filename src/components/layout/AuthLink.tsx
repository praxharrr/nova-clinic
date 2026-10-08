"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AuthLink({ className }: { className?: string }) {
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    createClient()
      .auth.getSession()
      .then(({ data }) => setSignedIn(!!data.session))
      .catch(() => setSignedIn(false));
  }, [pathname]);

  return (
    <Link href={signedIn ? "/account" : "/login"} className={className}>
      {signedIn ? "My account" : "Log in"}
    </Link>
  );
}