"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "http://localhost:5678/webhook/5219a7a3-04d7-4d02-9a25-154686fdcdda/chat",
      mode: "window",
      theme: { primaryColor: "#2563eb" },
    });
  }, []);

  return <div></div>;
}
