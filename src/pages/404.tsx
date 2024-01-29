import React, { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    window.location.href = "https://attention.ee";
  }, []);
  return <h1>404 - Page Not Found</h1>;
}
