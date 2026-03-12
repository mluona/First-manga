import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  status: "completed" | "ongoing" | "dropped" | "coming-soon";
  type: "manga" | "manhwa" | "manhua";
  genres: string[];
  latestChapter?: string;
}

const statusConfig = {
  completed: { label: "مكتمل", color: "bg-green-500" },
  ongoing: { label: "مستمر", color: "bg-blue-500" },
  dropped: { label: "مرفوع", color: "bg-red-500" },
  "coming-soon": { label: "قريباً", color: "bg-yellow-500" },
};

const typeConfig = {
  manga: { label: "مانجا", color: "text-purple-400" },
  manhwa: { label: "مانهوا", color: "text-cyan-400" },
  manhua: { label: "مانهوا صينية", color: "text-orange-400" },
};

export default function MangaCard({ id, title, image, status, type, genres, latestChapter }: MangaCardProps) {
  return (
    <Link href={`/series/${id}`}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/4] bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-2 right-2">
            <Badge className={`${statusConfig[status].color} text-white`}>
              {statusConfig[status].label}
            </Badge>
          </div>

          {/* Type Badge */}
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className={`bg-background/80 ${typeConfig[type].color}`}>
              {typeConfig[type].label}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          <div>
            <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>

          {/* Genres */}
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {genres.slice(0, 2).map((genre) => (
                <Badge key={genre} variant="secondary" className="text-xs">
                  {genre}
                </Badge>
              ))}
              {genres.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{genres.length - 2}
                </Badge>
              )}
            </div>
          )}

          {/* Latest Chapter */}
          {latestChapter && (
            <div className="text-xs text-muted-foreground mt-auto">
              آخر فصل: <span className="text-accent">{latestChapter}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
