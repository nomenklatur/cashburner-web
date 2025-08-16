import FeaturedCategories from "@/components/custom/featured-categories";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import SaleSection from "@/components/custom/sale-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <SaleSection />
      </main>
    </div>
  );
}
