export interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  profile_image: UserProfileImage;
  instagram_username: string;
}

export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Image {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  alt_description: string;
  user: User;
  urls: ImageUrls;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Image[];
}