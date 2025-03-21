import Footer from "@/components/Footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { OfferBanner } from "@/components/offer-banner";
import { RadioGroups } from "@/components/radio-groups";
import { ProductSection } from "@/components/product-section";
import { DetailsSection } from "@/components/details-section";
import { ServicesSection } from "@/components/services-section";
import  FeedbackSection  from "@/components/feedback";

export default function LandingPage() {
  return (
    <>
 {/* Offer Banner */}
 <OfferBanner />    
   {/* Hero */}
      <Hero />
      {/* Product Section */}
      <ProductSection />
      {/* Radio Groups Section */}
      <RadioGroups />
     
      {/* Features Section */}
      <Features />
      {/* Details Section */}
      <DetailsSection />
      {/* Services Section */}
      <ServicesSection />
      {/* About Section */}
      <About />
      {/* Feedback section */}
      <FeedbackSection />
      {/*Footer section*/ }
      <Footer />
    </>
  );
}
