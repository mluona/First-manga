import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
            MANGA
          </div>
          <span className="text-sm text-muted-foreground hidden sm:inline">World</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-accent transition-colors">
            الرئيسية
          </Link>
          <Link href="/series" className="text-foreground hover:text-accent transition-colors">
            السلاسل
          </Link>
          <Link href="/chapters" className="text-foreground hover:text-accent transition-colors">
            الفصول
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="ابحث عن مانجا..."
            className="bg-transparent text-foreground placeholder-muted-foreground outline-none w-32"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              الرئيسية
            </Link>
            <Link href="/series" className="text-foreground hover:text-accent transition-colors">
              السلاسل
            </Link>
            <Link href="/chapters" className="text-foreground hover:text-accent transition-colors">
              الفصول
            </Link>
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border mt-4">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن مانجا..."
                className="bg-transparent text-foreground placeholder-muted-foreground outline-none flex-1"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
