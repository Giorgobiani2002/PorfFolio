"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

// TypeScript type for i18n messages (all required)
type ChatMessages = {
  title: string;
  subtitle: string;
  footer: string;
  getStarted: string;
  inputPlaceholder: string;
  closeButtonTooltip: string; // required
};

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl:
      "http://localhost:5678/webhook/5219a7a3-04d7-4d02-9a25-154686fdcdda/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        "Hello! 👋 I am AI Support.\nI’m here to help you explore Lasha Giorgobianis’ portfolio—his projects, skills, experience, and contact details.\nFeel free to ask me anything about Lasha, and I’ll guide you! 🌟",
      ],
      i18n: {
        en: {
          title: "AI Support By LG",
          subtitle: "Start a chat. We're here to help you 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
          closeButtonTooltip: "Close chat", // <-- now required and fixed
        } as ChatMessages,
      },
      enableStreaming: false,
    });
  }, []);

  return <div id="n8n-chat"></div>;
}
