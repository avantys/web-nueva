// src/utils/types.ts
export interface NavigationChild {
  name: string;
  href: string;
}

export interface NavigationLink {
  name: string;
  href: string;
  color?: string;
  submenu?: NavigationChild[]; // ← opcional
}
