'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side redirect for the static export, where server redirects
 * are unavailable. Meta refresh covers the no-JS case; the router
 * handles the in-app case; the link is a final fallback.
 */
export function StaticRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <p className="p-4 text-sm font-extralight">
        This page moved to <a href={to} className="underline">{to}</a>.
      </p>
    </>
  );
}
