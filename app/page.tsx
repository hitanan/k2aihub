import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { GraduationCap, Palette, ExternalLink, Map, Sparkles, Zap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  createPageMetadata,
  createHomepageStructuredData,
  createProductStructuredData,
} from "@/lib/utils/seo";
import StructuredData from "@/src/components/structured-data";

export const metadata: Metadata = createPageMetadata(
  "K2AI Hub - Advanced AI Technology Platform",
  "Explore AI-powered solutions: K2AI Education (90+ free learning modules), K2AI Creator Studio (10x faster content creation), K2AI Finance (smart budget tracking), and interactive Vietnam Map. Smart learning, content creation, finance management, and innovation powered by AI.",
  "/",
  [
    "AI platform",
    "AI education",
    "smart learning",
    "AI content creation",
    "content repurposing",
    "AI finance",
    "budget tracker",
    "personal finance",
    "AI tools",
    "online learning",
    "Vietnam education",
    "interactive learning",
    "AI technology",
    "education technology",
    "content automation",
    "free education",
    "AI powered tools",
    "Vietnam geography",
    "financial insights",
    "expense tracking",
  ]
);

const products = [
  {
    name: "K2AI Education",
    icon: GraduationCap,
    description: "Smart learning platform with 90+ free modules covering AI, programming, STEM, digital marketing, and essential skills. 500+ interactive lessons with 3D games and practical projects for learners of all levels.",
    features: ["90+ Learning Modules", "500+ Lessons", "100% Free", "Interactive 3D Games"],
    url: "https://edu.k2aihub.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "K2AI Creator Studio",
    icon: Palette,
    description: "AI-powered content repurposing tool that transforms one YouTube video into 10+ platform-optimized posts. Save 10 hours/week creating Twitter threads, LinkedIn posts, Reels, Shorts, and newsletters.",
    features: ["Save 10 Hours/Week", "10x Content Output", "AI-Powered", "Multi-Platform"],
    url: "https://creator.k2aihub.com",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "K2AI Vietnam Map",
    icon: Map,
    description: "Interactive geographical map of 34 provinces and cities of Vietnam. Explore culture, history, economy, and landmarks with AI-enhanced learning. Perfect for students and travelers.",
    features: ["34 Provinces", "Cultural Insights", "AI-Enhanced", "Interactive"],
    url: "/city",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-500 to-teal-500",
    internal: true,
  },
  {
    name: "K2AI Finance",
    icon: TrendingUp,
    description: "AI-powered personal budget tracker with smart savings suggestions. Track subscriptions, manage expenses with family, visualize spending patterns, and achieve financial goals with intelligent insights. Save 20% more every month.",
    features: ["AI Insights", "Family Budgets", "Smart Alerts", "Expense Tracking"],
    url: "https://finance.k2aihub.com",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Home() {
  const structuredData = createHomepageStructuredData();
  const educationData = createProductStructuredData('K2AI Education');
  const creatorData = createProductStructuredData('K2AI Creator Studio');
  const financeData = createProductStructuredData('K2AI Finance');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Comprehensive Structured Data for SEO */}
      {structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      {/* Product-specific structured data */}
      {educationData && <StructuredData data={educationData} />}
      {creatorData && <StructuredData data={creatorData} />}
      {financeData && <StructuredData data={financeData} />}

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12 text-purple-600 animate-pulse mr-4" />
            <h1 className="text-6xl md:text-8xl font-black relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                K2AI
              </span>
            </h1>
            <Sparkles className="w-12 h-12 text-blue-600 animate-pulse ml-4" />
          </div>
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-slate-800 font-bold max-w-3xl mx-auto mb-4">
          Advanced AI Technology Platform
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Empowering education, creativity, and innovation through AI. Explore smart learning with 90+ free modules, 
          supercharge your content creation 10x faster, manage your finances intelligently, and discover Vietnam interactively.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              90+
            </div>
            <div className="text-sm text-slate-600 font-medium">Learning Modules</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              10x
            </div>
            <div className="text-sm text-slate-600 font-medium">Faster Content</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              34
            </div>
            <div className="text-sm text-slate-600 font-medium">Vietnam Cities</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              20%
            </div>
            <div className="text-sm text-slate-600 font-medium">More Savings</div>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <main className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our AI-Powered Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four specialized platforms designed to transform how you learn, create, manage finances, and explore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-slate-200 group hover:-translate-y-3 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className={`text-2xl md:text-3xl mb-3 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-black`}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-700 min-h-[100px]">
                    {product.description}
                  </CardDescription>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${product.bgColor} ${product.color} font-semibold`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  {product.internal ? (
                    <Link
                      href={product.url}
                      className={`inline-flex items-center gap-2 text-base font-bold ${product.color} hover:underline transition-all group-hover:gap-4 group-hover:translate-x-1`}
                    >
                      Explore {product.name} →
                    </Link>
                  ) : (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-base font-bold ${product.color} hover:underline transition-all group-hover:gap-4`}
                    >
                      Visit {product.name}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Why Choose K2AI Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose K2AI?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge AI solutions designed for learners, creators, and innovators
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border-2 border-blue-200 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Fast & Efficient</h3>
              <p className="text-slate-600 leading-relaxed">
                AI-powered automation saves you time. Learn faster with interactive modules. 
                Create 10x more content in minutes. Get instant insights.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border-2 border-purple-200 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart & Accurate</h3>
              <p className="text-slate-600 leading-relaxed">
                Advanced AI models ensure precision and quality. Content optimized for each platform. 
                Learning paths personalized to your goals.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border-2 border-emerald-200 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Made for Everyone</h3>
              <p className="text-slate-600 leading-relaxed">
                Intuitive interfaces designed for all skill levels. From beginners to experts. 
                Vietnamese and English content. 100% accessible.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Learning, Creating & Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of learners, creators, and savers using K2AI to achieve their goals faster with AI technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://edu.k2aihub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-lg"
            >
              Start Learning Free →
            </a>
            <a
              href="https://creator.k2aihub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition-all hover:scale-105 text-lg"
            >
              Try Creator Studio
            </a>
            <a
              href="https://finance.k2aihub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all hover:scale-105 text-lg"
            >
              Track Finances Smartly
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-16">
        <div className="border-t-2 border-slate-200 pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                K2AI Hub
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-md">
                Advanced AI Technology Platform empowering education, creativity, and innovation. 
                Making AI accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Products</h4>
              <div className="space-y-2">
                <a href="https://edu.k2aihub.com" className="block text-slate-600 hover:text-blue-600 transition-colors">
                  K2AI Education
                </a>
                <a href="https://creator.k2aihub.com" className="block text-slate-600 hover:text-purple-600 transition-colors">
                  Creator Studio
                </a>
                <a href="https://finance.k2aihub.com" className="block text-slate-600 hover:text-orange-600 transition-colors">
                  K2AI Finance
                </a>
                <Link href="/city" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                  Vietnam Map
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:k2aihub@gmail.com" className="block text-slate-600 hover:text-blue-600 transition-colors">
                  k2aihub@gmail.com
                </a>
                <a href="https://twitter.com/k2aihub" className="block text-slate-600 hover:text-blue-600 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} K2AI Hub. All rights reserved. Powered by advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
