export interface Link {
  title: string;
  href: string;
  description?: string;
  articles?: number;
  category?: string;
}
export interface Section {
  category: string;
  links: Link[];
}
