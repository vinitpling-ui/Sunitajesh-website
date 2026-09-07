/**
 * Every project image ships in two widths. Without a srcset a phone downloads the
 * desktop file — the covers are 1600px wide and a phone shows them at about 390,
 * so it was pulling roughly four times the pixels it could ever display.
 *
 * The components already pass a `sizes` attribute; this is what makes it mean
 * anything. Pass the large path, get both candidates back.
 */
const LARGE_WIDTH: Record<string, number> = {
  "work-recnet-cover": 1600,
  "work-vinit-cover": 1600,
  "work-pling-showcase": 1600,
  "work-pling-cover": 1600,
  "work-pling-tourneys": 1280,
  "work-pling-venues": 1280,
  "work-recnet-map": 1280,
  "work-recnet-detail": 1280,
  "work-vinit-about": 1280,
  "work-vinit-work": 1280,
  "work-vinit-services": 1280,
  "work-gsc-cover": 1600,
  "work-gsc-about": 1280,
  "work-gsc-services": 1280,
};

export const srcSetFor = (src: string): string | undefined => {
  const name = src.split("/").pop()?.replace(/\.webp$/, "");
  const large = name ? LARGE_WIDTH[name] : undefined;
  if (!large) return undefined;
  return `${src.replace(/\.webp$/, "-800.webp")} 800w, ${src} ${large}w`;
};
