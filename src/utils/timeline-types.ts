type DateObject = {
  year: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
  display_date?: string;
};

type TextObject = {
  headline?: string;
  text?: string;
};
type MediaObject = {
  url: string;
  caption?: string;
  credit?: string;
  thumbnail?: string;
  alt?: string;
  title?: string;
  link?: string;
  link_target?: string;
};

type TitleSlide = {
  start_date?: DateObject;
  end_date?: DateObject;
  text?: TextObject;
  media?: MediaObject;
  group?: string;
  display_date?: string;
  background?: {
    url?: string;
    color?: string;
  };
  autolink?: boolean;
  unique_id?: string;
};

type TimelineOptions = {
  font?: string;
  debug?: boolean;
  height?: number;
  width?: number;
  is_embed?: boolean;
  hash_bookmark?: boolean;
  default_bg_color?:
    | string
    | {
        r: number;
        g: number;
        b: number;
      };
  scale_factor?: number;
  initial_zoom?: number;
  zoom_sequence?: number[];
  timenav_position?: "top" | "bottom";
  optimal_tick_width?: number;
  base_class?: string;
  timenav_height?: number;
  timenav_height_percentage?: number;
  timenav_mobile_height_percentage?: number;
  timenav_height_min?: number;
  marker_width_min?: number;
  marker_padding?: number;
  start_at_slide?: number;
  start_at_end?: boolean;
  menubar_height?: number;
  use_bc?: boolean;
  duration?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ease?: any; // default: TL.Ease.easeInOutQuint (don't know the type of this)
  dragging?: boolean;
  trackResize?: boolean;
  slide_padding_lr?: number;
  slide_default_fade?: string;
  language?: string;
  ga_property_id?: string | null;
  track_events?: string[];
  script_path?: string;
};

type Slide = TitleSlide & { start_date: DateObject };

export type {
  DateObject,
  TextObject,
  MediaObject,
  TitleSlide,
  Slide,
  TimelineOptions,
};
