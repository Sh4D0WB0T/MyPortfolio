import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send, X, Sparkles, Bot } from "lucide-react";

const SUGGESTIONS = [
  "Who are you?",
  "Tell me about your projects.",
  "Why cybersecurity?",
  "What are your future goals?",
  "Tell me about BlackHawk AI.",
];

export function AaishaAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const loading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = (text: string) => {
    const t = text.trim();
    if (!t || loading) return;
    void sendMessage({ text: t });
    setInput("");
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full glass-strong glow-violet pulse-ring"
        aria-label="Chat with AAISHA AI"
      >
        {open ? <X className="h-5 w-5 text-white" /> : <Bot className="h-6 w-6" style={{ color: "var(--aurora-blue)" }} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            className="fixed bottom-24 right-6 z-50 flex h-[600px] max-h-[80vh] w-[400px] max-w-[92vw] flex-col overflow-hidden rounded-2xl glass-strong"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 p-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "var(--gradient-aurora)" }}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold tracking-tight">AAISHA AI</div>
                <div className="text-xs text-muted-foreground status-online">Digital Twin · Online</div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Hi — I'm Aaisha's digital twin. Ask me anything about her work, projects, or how to get in touch.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => submit(s)}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-foreground/90 transition hover:border-[color:var(--aurora-blue)] hover:text-[color:var(--aurora-blue)]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={
                        isUser
                          ? "max-w-[85%] rounded-2xl rounded-br-sm px-3.5 py-2 text-sm"
                          : "max-w-[90%] text-sm leading-relaxed text-foreground/95"
                      }
                      style={
                        isUser
                          ? { background: "var(--gradient-aurora)", color: "#08111f" }
                          : undefined
                      }
                    >
                      {text || (loading ? "…" : "")}
                    </div>
                  </div>
                );
              })}

              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="text-sm text-muted-foreground">Thinking…</div>
              )}
              {error && (
                <div className="text-sm text-[color:var(--cherry-rose)]">
                  Something went wrong. Try again.
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AAISHA AI…"
                className="flex-1 rounded-xl bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:bg-white/10"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl disabled:opacity-50"
                style={{ background: "var(--gradient-aurora)" }}
                aria-label="Send"
              >
                <Send className="h-4 w-4 text-[#08111f]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}