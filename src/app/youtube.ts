// Server-only: reads YOUTUBE_API_KEY, so never import this from a client component.

export type YoutubeStats = { subscribers: string; videos: string; views: string };

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

// Rounds down to the nearest hundred with a "+" (318 → "300+", 1,250 → "1.2K+") so the count never overstates
const roundedCount = (n: number) =>
  n < 100 ? String(n) : `${compact.format(Math.floor(n / 100) * 100)}+`;

// Returns null when the key is missing or the request fails, so callers can fall back to static values.
export async function getYoutubeStats(handle: string): Promise<YoutubeStats | null> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return null;

  const url = new URL("https://www.googleapis.com/youtube/v3/channels");
  url.searchParams.set("part", "statistics");
  url.searchParams.set("forHandle", handle);
  url.searchParams.set("key", key);

  try {
    // Cached for an hour (ISR) so visits don't each spend API quota
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error(`YouTube API error ${res.status}: ${await res.text()}`);
      return null;
    }

    const data = await res.json();
    const stats = data.items?.[0]?.statistics;
    if (!stats) return null;

    return {
      subscribers: stats.hiddenSubscriberCount ? "Hidden" : roundedCount(Number(stats.subscriberCount)),
      videos: compact.format(Number(stats.videoCount)),
      views: roundedCount(Number(stats.viewCount)),
    };
  } catch (error) {
    console.error("YouTube API request failed", error);
    return null;
  }
}
