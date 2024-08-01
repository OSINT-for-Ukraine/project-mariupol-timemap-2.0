import { useEffect, useRef, useState } from "react";

interface TelegramEmbedProps {
  url: string;
}

const removePrefixOfTelegramUrl = (url: string) => {
  const prefix = "https://t.me";
  if (url.startsWith(prefix)) {
    return url.slice(prefix.length);
  }
  return url;
};

export const TelegramEmbed = ({ url }: TelegramEmbedProps) => {
  const [iframeSrc, setIframeSrc] = useState("");
  const [id, setId] = useState("");
  const [height, setHeight] = useState("0px");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const messageHandler = ({ data, source }: MessageEvent) => {
      if (
        !data ||
        typeof data !== "string" ||
        source !== iframeRef.current?.contentWindow
      ) {
        return;
      }

      const action = JSON.parse(data);

      if (action.event === "resize" && action.height) {
        setHeight(action.height + "px");
      }
    };

    window.addEventListener("message", messageHandler);

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", () => {
        checkFrame(id);
      });
    }

    return () => {
      window.removeEventListener("message", messageHandler);
      if (iframe) {
        iframe.removeEventListener("load", () => {
          checkFrame(id);
        });
      }
    };
  }, [id]);

  useEffect(() => {
    const newId = `telegram-post${removePrefixOfTelegramUrl(url).replace(/[^a-z0-9_]/gi, "-")}`;
    setId(newId);
    setIframeSrc(url);
    checkFrame(newId);
  }, [url]);

  const checkFrame = (frameId: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "visible", frame: frameId }),
      "*"
    );
  };

  return (
    <iframe
      ref={iframeRef}
      src={`${iframeSrc}?embed=1`}
      height={height}
      id={id}
      style={{ width: "550px", border: "none" }}
    />
  );
};

export default TelegramEmbed;
