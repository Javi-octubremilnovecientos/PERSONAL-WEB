import React, { useEffect, useRef } from "react";
import { GitHub } from "../assets/Icons/GitHub";
import { Url } from "../assets/Icons/Url";
import { useHasHover } from "../hooks/useHasHover";

interface ProjectCardProps {
  id: string;
  title: string;
  status: string;
  dotClass: string;
  image: string;
  alt: string;
  liveUrl: string;
  repoUrl: string;
  description: string;
  tags: string[];
  activeId: string | null;
  onActivate: (id: string | null) => void;
}

export function ProjectCard({
  id,
  title,
  status,
  dotClass,
  image,
  alt,
  liveUrl,
  repoUrl,
  description,
  tags,
  activeId,
  onActivate,
}: ProjectCardProps) {
  const hasHover = useHasHover();
  const isActive = activeId === id;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!hasHover && isActive) {
      timerRef.current = window.setTimeout(() => onActivate(null), 4000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isActive, hasHover, onActivate]);

  const handleImageTap = () => {
    if (hasHover) return;
    onActivate(isActive ? null : id);
  };

  const dimClass = hasHover
    ? "group-hover:opacity-60"
    : isActive
    ? "opacity-60"
    : "";

  const iconsClass = hasHover
    ? "group-hover:opacity-100"
    : isActive
    ? "opacity-100"
    : "";

  return (
    <div className="bg-surface-bright dark:bg-terminal-black flex flex-col">
      <div className="flex justify-between items-center p-2 brutalist-border-b bg-terminal-black/5 dark:bg-surface-bright/10 font-code-sm uppercase">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 ${dotClass}`}></div>
          <span>{title}</span>
        </div>
        <span>{status}</span>
      </div>
      <div className="p-4 grow flex flex-col gap-4">
        <div
          onClick={handleImageTap}
          className="w-full h-48 bg-terminal-black brutalist-border relative overflow-hidden group cursor-pointer"
        >
          <div
            className={`absolute inset-0 z-10 bg-terminal-black mix-blend-luminosity opacity-0 transition-opacity pointer-events-none ${dimClass}`}
          />
          <div
            className={`absolute inset-0 z-20 flex items-center justify-evenly text-surface-bright text-5xl opacity-0 transition-opacity pointer-events-none ${iconsClass} ${
              isActive || hasHover ? "[&>a]:pointer-events-auto" : ""
            }`}
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Url />
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
          </div>
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <p className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
          {description}
        </p>
        <div className="flex gap-2 mt-auto flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 brutalist-border font-label-caps">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
