import { motion } from "framer-motion";
import { Zap, MapPin, CreditCard, Star, Leaf, ShieldCheck, Smartphone } from "lucide-react";
import FeatureCard from "./components/FeatureCard";
import StepCard from "./components/StepCard";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-green-700">chargora</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-green-600 font-medium">Features</a>
          <a href="#how" className="hover:text-green-600 font-medium">How It Works</a>
          <a href="#benefits" className="hover:text-green-600 font-medium">Benefits</a>
          <a href="#map" className="hover:text-green-600 font-medium">Map</a>
          <a href="#faq" className="hover:text-green-600 font-medium">FAQ</a>
          <a href="#contact" className="hover:text-green-600 font-medium">Contact</a>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-green-700"
        >
          No worries for charging stations anymore ⚡
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          With <span className="font-bold text-green-700">chargora</span>, every door next to you can become an EV charging station. <br />
          <span className="text-green-700 font-semibold">Driving green, charging simple, living sustainable.</span>
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">Find a Charger</button>
          <button className="px-6 py-3 bg-white border border-green-600 text-green-700 rounded-xl shadow hover:bg-green-50 transition">Become a Host</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-700">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          <FeatureCard icon={<MapPin size={36} />} title="Find Nearby Chargers" desc="Locate chargers around the corner in real-time." />
          <FeatureCard icon={<CreditCard size={36} />} title="Book & Pay Instantly" desc="Reserve slots and make secure digital payments in seconds." />
          <FeatureCard icon={<Zap size={36} />} title="Earn by Sharing" desc="Turn your home charger into income by hosting others." />
          <FeatureCard icon={<Star size={36} />} title="Trusted Community" desc="Verified users ensure safety, trust, and convenience." />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-green-700">Why Choose Chargora?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <FeatureCard icon={<Leaf size={36} />} title="Eco-Friendly" desc="Every charge supports a greener planet and reduces emissions." />
          <FeatureCard icon={<ShieldCheck size={36} />} title="Safe & Reliable" desc="All hosts and chargers go through strict verification." />
          <FeatureCard icon={<Zap size={36} />} title="24/7 Access" desc="Charge anytime, anywhere, without worrying about availability." />
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 px-8 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-700">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          <StepCard step="1" text="Sign up as a Driver or Host" />
          <StepCard step="2" text="Register your charger or find one nearby" />
          <StepCard step="3" text="Book & Pay instantly through the app" />
          <StepCard step="4" text="Plug in, charge, and drive greener!" />
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-green-700">Map Preview</h2>
        <p className="mt-4 text-gray-600">Explore live charging stations around your city in one click.</p>
        <div className="mt-8 w-full h-80 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center">
          <span className="text-gray-500">[Interactive Map Placeholder]</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-700">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <Testimonial name="Amit" text="Chargora made charging effortless! I never worry about range anxiety now." />
          <Testimonial name="Priya" text="Hosting my charger gives me passive income and supports EV adoption." />
          <Testimonial name="Rahul" text="Game changer for EV owners – charging right in the neighborhood." />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-green-700">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <FAQ question="How do I become a host?" answer="Simply sign up, register your charger, set your availability and pricing. You'll start earning once drivers use your station." />
          <FAQ question="Is it safe to charge at someone's home?" answer="Yes, all hosts and chargers are verified by Chargora to ensure safety and reliability." />
          <FAQ question="What payment methods are supported?" answer="Chargora supports UPI, debit/credit cards, and popular digital wallets for seamless payments." />
          <FAQ question="Do I need special equipment to host?" answer="If you already own an EV charger, you can become a host. For others, we provide guidance on affordable installations." />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-8 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-700">Stay Updated</h2>
        <p className="mt-4 text-gray-600">Subscribe to our newsletter and get the latest updates on EV charging and green living.</p>
        <div className="mt-6 flex justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-l-xl border border-gray-300 w-64 focus:outline-none" />
          <button className="px-6 py-3 bg-green-600 text-white rounded-r-xl shadow hover:bg-green-700 transition">Subscribe</button>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-green-700">Download Our App</h2>
        <p className="mt-4 text-gray-600">Get the full Chargora experience on your phone. Book, pay, and manage your charging anywhere, anytime.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition flex items-center space-x-2">
            <Smartphone size={20} /> <span>Download for Android</span>
          </button>
          <button className="px-6 py-3 bg-white border border-green-600 text-green-700 rounded-xl shadow hover:bg-green-50 transition flex items-center space-x-2">
            <Smartphone size={20} /> <span>Download for iOS</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-10 px-8 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">chargora</h3>
            <p className="mt-2 text-sm">Making every doorstep a charging station for a greener tomorrow.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-gray-200">Features</a></li>
              <li><a href="#how" className="hover:text-gray-200">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-gray-200">Benefits</a></li>
              <li><a href="#map" className="hover:text-gray-200">Map</a></li>
              <li><a href="#faq" className="hover:text-gray-200">FAQ</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <span className="hover:text-gray-200 cursor-pointer">🌐</span>
              <span className="hover:text-gray-200 cursor-pointer">📘</span>
              <span className="hover:text-gray-200 cursor-pointer">🐦</span>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-8">© 2025 chargora. All rights reserved.</p>
      </footer>
    </div>
  );
}
