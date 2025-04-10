import Generator from "@/components/Generator";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Hero />
      <Generator />
    </main>
  );
}
