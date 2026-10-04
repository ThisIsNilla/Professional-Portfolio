"use client";

export default function CopyButton({ text }: { text: string }) {
  return (
    <button 
      className="hover:text-primary transition-colors shrink-0" 
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <span className="material-symbols-outlined text-[14px]">content_copy</span>
    </button>
  );
}
