// src/utils/paths.ts
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL ?? '/'; // en Astro suele venir con slash final
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
}