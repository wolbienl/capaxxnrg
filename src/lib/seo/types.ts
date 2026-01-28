/**
 * TypeScript types voor SEO-gerelateerde data
 */

export interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  serviceType: string;
  image?: string;
}

export interface ProductSchemaOptions {
  name: string;
  description: string;
  image?: string;
  sku?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface RouteConfig {
  path: string;
  priority: number;
  changeFreq: ChangeFrequency;
  children?: Record<string, RouteConfig>;
}
