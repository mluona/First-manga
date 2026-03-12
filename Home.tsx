import Header from "@/components/Header";
import MangaCard from "@/components/MangaCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Flame, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

// Sample data - in real app this would come from API
const featuredManga = {
  id: "1",
  title: "Jujutsu Kaisen",
  image: "https://d2xsxph8kpxj0f.cloudfront.net/94518947/b2kaXkc58DQeSg8RYrxenE/hero-manga-featured-76h2DNXkoeEYoXViC9AVcj.webp",
  status: "ongoing" as const,
  type: "manga" as const,
  genres: ["Action", "Supernatural"],
  latestChapter: "Chapter 250",
  description: "A high schooler is forced to swallow a cursed finger, becoming the host of a powerful demon.",
};

const trendingManga = [
  {
    id: "1",
    title: "Jujutsu Kaisen",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/94518947/b2kaXkc58DQeSg8RYrxenE/manga-card-1-E6trygaMf4v2AdgBsKh7BB.webp",
    status: "ongoing" as const,
    type: "manga" as const,
    genres: ["Action", "Supernatural"],
    latestChapter: "Ch. 250",
  },
  {
    id: "2",
    title: "Solo Leveling",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/94518947/b2kaXkc58DQeSg8RYrxenE/manga-card-2-A533nuNrxEo5h4UNoVgzZG.webp",
    status: "completed" as const,
    type: "manhwa" as const,
    genres: ["Action", "Fantasy"],
    latestChapter: "Ch. 200",
  },
  {
    id: "3",
    title: "Demon Slayer",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/94518947/b2kaXkc58DQeSg8RYrxenE/manga-card-3-83uJfGSukGx4ZJ2xNSe6Wc.webp",
    status: "completed" as const,
    type: "manga" as const,
    genres: ["Action", "Adventure"],
    latestChapter: "Ch. 205",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"all" | "manga" | "manhwa" | "manhua">("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src={featuredManga.image}
                  alt={featuredManga.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-accent" />
                  <span className="text-sm text-accent font-semibold">مميز الآن</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {featuredManga.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredManga.description}
                </p>
              </div>

              {/* Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-foreground">{featuredManga.genres.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-foreground">{featuredManga.latestChapter}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-orange-600 text-white gap-2">
                  ابدأ القراءة
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-border hover:bg-card">
                  المزيد من المعلومات
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                الأكثر رواجاً
              </h2>
              <p className="text-muted-foreground">
                اكتشف أفضل السلاسل المانجا والمانهوا
              </p>
            </div>
            <Button variant="ghost" className="text-accent hover:bg-card gap-1">
              عرض الكل
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingManga.map((manga) => (
              <MangaCard key={manga.id} {...manga} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            استكشف حسب النوع
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {(["all", "manga", "manhwa", "manhua"] as const).map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`
                  ${activeFilter === filter
                    ? "bg-accent hover:bg-orange-600 text-white"
                    : "border-border hover:bg-background"
                  }
                `}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all"
                  ? "الكل"
                  : filter === "manga"
                    ? "مانجا"
                    : filter === "manhwa"
                      ? "مانهوا"
                      : "مانهوا صينية"}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingManga.map((manga) => (
              <MangaCard key={manga.id} {...manga} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">عن الموقع</h3>
              <p className="text-muted-foreground text-sm">
                منصة عربية متخصصة في عرض المانجا والمانهوا والمانهوا الصينية
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">الأقسام</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">المانجا</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">المانهوا</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">الفصول</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">المساعدة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">الدعم</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">الشروط</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">تابعنا</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">تويتر</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">ديسكورد</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">تيليجرام</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 First Manga. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
