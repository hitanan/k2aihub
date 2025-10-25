import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Palette, ExternalLink } from "lucide-react";

const products = [
  {
    name: "K2AI Education",
    icon: GraduationCap,
    description: "Nền tảng giáo dục AI tiên tiến, cung cấp các khóa học và tài liệu học tập về trí tuệ nhân tạo, machine learning và deep learning. Giúp học viên nắm vững kiến thức từ cơ bản đến nâng cao.",
    url: "http://edu.k2aihub.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "K2AI Creator Studio",
    icon: Palette,
    description: "Công cụ sáng tạo nội dung thông minh sử dụng AI, giúp người dùng tạo ra các nội dung đa phương tiện, thiết kế đồ họa, và sản xuất nội dung chất lượng cao một cách nhanh chóng và hiệu quả.",
    url: "https://creator.k2aihub.com",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
          K2AI Hub
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Nền tảng công nghệ AI tiên tiến
        </p>
        <p className="mt-3 text-lg text-slate-500 max-w-3xl mx-auto">
          Khám phá các sản phẩm AI của chúng tôi, từ giáo dục đến sáng tạo nội dung
        </p>
      </header>

      {/* Products Section */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.name} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${product.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    Truy cập {product.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-500 border-t border-slate-200">
        <p>&copy; {new Date().getFullYear()} K2AI Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
