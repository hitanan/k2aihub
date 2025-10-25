import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { GraduationCap, Palette, ExternalLink, Map } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "K2AI Education",
    icon: GraduationCap,
    description: "Smart learning platform with the mission of providing high-quality education through advanced AI technology and innovative teaching methods",
    url: "https://edu.k2aihub.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "K2AI Creator Studio",
    icon: Palette,
    description: "Save 10 hours/week. Supercharge content 10x faster. Paste a YouTube link. Get back a treasure trove of quality content for Twitter, LinkedIn, Reels, Shorts, and Newsletter in minutes. Stop grinding, start creating.",
    url: "https://creator.k2aihub.com",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "K2AI Vietnam Geographical Map",
    icon: Map,
    description: "Explore 34 provinces and cities of Vietnam through an interactive smart map. Learn about geography, culture, history of different regions with AI technology.",
    url: "/city",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-500 to-teal-500",
    internal: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block mb-6">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              <h1 className="text-5xl md:text-8xl font-black text-white mb-4 relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">K2AI</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent opacity-75 animate-ping">K2AI</div>
              </h1>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full"></div>
        </div>
        <p className="text-2xl text-slate-700 font-semibold max-w-2xl mx-auto mb-3">
          Advanced AI Technology Platform
        </p>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Explore our AI products, from education to content creation
        </p>
      </header>

      {/* Products Section */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="hover:shadow-2xl transition-all duration-500 border border-transparent group hover:-translate-y-2"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-2xl bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  {product.internal ? (
                    <Link
                      href={product.url}
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${product.color} hover:underline transition-all group-hover:gap-3`}
                    >
                      Visit {product.name}
                    </Link>
                  ) : (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${product.color} hover:underline transition-all group-hover:gap-3`}
                    >
                      Visit {product.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose K2AI?</h2>
            <p className="text-lg text-slate-600">Cutting-edge AI solutions for modern challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast & Efficient</h3>
              <p className="text-slate-600">Save time with AI-powered automation</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Smart & Accurate</h3>
              <p className="text-slate-600">Precision-driven AI technology</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">User-Friendly</h3>
              <p className="text-slate-600">Intuitive interfaces for everyone</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12">
        <div className="border-t border-slate-200 pt-8 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://edu.k2aihub.com" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Education</a>
            <span className="text-slate-300">•</span>
            <a href="https://creator.k2aihub.com" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-medium">Creator Studio</a>
            <span className="text-slate-300">•</span>
            <a href="https://k2aihub.com/city" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Vietnam Map</a>
          </div>
          <p className="text-slate-500">&copy; {new Date().getFullYear()} K2AI Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
