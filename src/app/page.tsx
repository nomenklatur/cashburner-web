import CartSidebar from "@/components/custom/cart-sidebar";
import FeaturedCategories from "@/components/custom/featured-categories";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import Newsletter from "@/components/custom/newsletter";
import SaleSection from "@/components/custom/sale-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <SaleSection />
        <Newsletter />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
