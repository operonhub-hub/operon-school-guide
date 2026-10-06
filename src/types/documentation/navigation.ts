export type NavItemStatus = 'draft' | 'published' | 'upcoming';

export interface NavItem {
  id: string;
  title: string;
  slug: string;
  path: string;
  badge?: string;
  status?: NavItemStatus;
}

export interface NavSection {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  items: NavItem[];
}

export interface NavigationConfig {
  sections: NavSection[];
}
