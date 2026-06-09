export interface Link {
  label: string;
  href: string;
}

export interface Section {
  category: string;
  links: Link[];
}
