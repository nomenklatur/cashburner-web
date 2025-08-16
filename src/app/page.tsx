import FeaturedCategories from "@/components/custom/featured-categories";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
      </main>
    </div>
  );
}
