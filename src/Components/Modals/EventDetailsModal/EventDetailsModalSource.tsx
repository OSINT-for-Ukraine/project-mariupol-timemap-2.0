import {
  FacebookEmbed,
  InstagramEmbed,
  TikTokEmbed,
  XEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import { getSocialMediaType } from "./utils";
import { TelegramEmbed } from "./TelegramEmbed";

export const EventDetailsModalSource = ({ path }: { path: string }) => {
  const mediaType = getSocialMediaType(path);

  switch (mediaType) {
    case "facebook":
      return <FacebookEmbed url={path} width={550} />;
    case "instagram":
      return <InstagramEmbed url={path} width={550} />;
    case "tiktok":
      return <TikTokEmbed url={path} width={550} />;
    case "twitter":
      return <XEmbed url={path} width={550} />;
    case "youtube":
      return <YouTubeEmbed url={path} width={550} />;
    case "t.me":
      return <TelegramEmbed url={path} />;
    default:
      return (
        <a className="event-source-link" href={path} target="__blank">
          {path}
        </a>
      );
  }
};
