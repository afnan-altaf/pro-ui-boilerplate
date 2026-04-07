"use client";

  import { motion } from "framer-motion";
  import { Rocket, Zap, Palette } from "lucide-react";
  import { cn } from "@/lib/utils";

  const features = [
    {
      icon: Rocket,
      title: "Next.js 15 + TypeScript",
      description: "App Router, server components, and full type safety out of the box.",
    },
    {
      icon: Palette,
      title: "Tailwind CSS + Framer Motion",
      description: "Utility-first styling paired with high-end animations for every interaction.",
    },
    {
      icon: Zap,
      title: "shadcn/ui + 21st.dev Ready",
      description: "Pre-wired with clsx and tailwind-merge for drop-in component compatibility.",
    },
  ];

  export default function Home() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Pro UI{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Boilerplate
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Your Claude Code launchpad. Everything configured, nothing to install.
            Build beautiful UIs from minute one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className={cn(
                "rounded-2xl border border-zinc-800 bg-zinc-900 p-6",
                "hover:border-violet-500/50 hover:bg-zinc-800/60 transition-all duration-300"
              )}
            >
              <feature.icon className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }
  