export interface BannerSlide {
  id: number;
  brief: string;
  order?: number;
  title: string;
  imgUrl?: string;
  itemUrl?: string;
  category: string;
  videoUrl?: string;
  colorCode: string;
}
export interface SlideBannerResponse {
  slides: BannerSlide[];
}