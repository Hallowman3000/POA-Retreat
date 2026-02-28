
"use client";

import { useState, useRef, useEffect } from "react";
import { aiGuestConcierge } from "@/ai/flows/ai-guest-concierge";
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to POA Retreat. I am your AI concierge. How may I assist with your stay details today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await aiGuestConcierge({ question: userMessage });
      setMessages(prev => [...prev, { role: "assistant", content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "I apologize, I'm having trouble connecting to my knowledge base. Please try again or call our front desk." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group",
          isOpen && "scale-0 opacity-0"
        )}
      >
        <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -left-2 bg-accent text-accent-foreground text-[10px] px-2 py-1 rounded-full font-bold animate-pulse">AI Concierge</span>
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-8 right-8 z-[70] w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.15)] border border-border flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <Bot className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-headline text-lg">AI Concierge</p>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-white/70 text-[10px] uppercase tracking-wider font-bold">Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/10">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex w-full", m.role === "user" ? "justify-end" : "justify-start")}>
              <div className={cn("flex gap-3 max-w-[85%]", m.role === "user" && "flex-row-reverse")}>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                  m.role === "assistant" ? "bg-primary text-white" : "bg-accent text-accent-foreground"
                )}>
                  {m.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed",
                  m.role === "assistant" 
                    ? "bg-white text-foreground shadow-sm rounded-tl-none border border-border" 
                    : "bg-accent text-accent-foreground shadow-sm rounded-tr-none font-medium"
                )}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Loader2 className="animate-spin" size={16} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-border shadow-sm">
                  <span className="flex items-center gap-1 italic text-muted-foreground text-xs">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestions */}
        {messages.length < 3 && !isLoading && (
          <div className="px-6 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
            {["Check-in time?", "Pet policy?", "Dining options?"].map(q => (
              <button 
                key={q} 
                onClick={() => { setInput(q); }}
                className="text-[11px] font-bold bg-muted px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-border flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about resort policies..."
            className="flex-1 rounded-xl border-border focus:ring-primary"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-primary hover:bg-primary/90 rounded-xl"
            disabled={isLoading || !input.trim()}
          >
            <Send size={18} />
          </Button>
        </form>
        <div className="pb-3 text-center bg-white">
          <span className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
            Powered by POA Intelligence <Sparkles size={10} className="text-accent" />
          </span>
        </div>
      </div>
    </>
  );
}
