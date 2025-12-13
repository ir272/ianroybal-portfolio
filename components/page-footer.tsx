import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function PageFooter() {
  return (
    <div className="text-sm sm:text-[0.95rem] leading-tight">
      <div className="pt-4" />
      <footer className="pb-16 sm:pb-24">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-3">
            <div>◆ Contact:</div>
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              <a className="inline-flex items-center gap-1" href="mailto:ian.roybal@gmail.com"><Mail size={14} /><span className="hover-underline-nudge">Email</span></a>
              <a className="inline-flex items-center gap-1" href="https://github.com/ir272" target="_blank" rel="noreferrer"><Github size={14} /><span className="hover-underline-nudge">GitHub</span></a>
              <a className="inline-flex items-center gap-1" href="https://x.com/TornadoKing111/" target="_blank" rel="noreferrer"><Twitter size={14} /><span className="hover-underline-nudge">Twitter</span></a>
              <a className="inline-flex items-center gap-1" href="https://www.linkedin.com/in/ianroybal/" target="_blank" rel="noreferrer"><Linkedin size={14} /><span className="hover-underline-nudge">LinkedIn</span></a>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
