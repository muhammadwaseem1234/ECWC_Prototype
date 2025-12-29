// YouTube video fetching using regex parsing

export interface YouTubeVideo {
    id: string;
    title: string;
    link: string;
    published: string;
    thumbnail: string;
}

const CHANNEL_ID = 'UCXHFecIjMPaq78Gw6kOLUGA';
const VIDEOS_URL = `https://www.youtube.com/channel/${CHANNEL_ID}/videos`;

export async function getLatestVideos(): Promise<YouTubeVideo[]> {
    try {
        console.log("Fetching YouTube URL:", VIDEOS_URL);
        const response = await fetch(VIDEOS_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            console.error("YouTube Fetch Failed:", response.status);
            return [];
        }

        const html = await response.text();
        console.log("YouTube HTML Length:", html.length);

        const videos: YouTubeVideo[] = [];

        // Regex to find videoRenderer objects
        // We look for the start of videoRenderer and capture enough context to extract fields
        // This is a "dirty" parser but often more robust than trying to parse the huge JSON blob blindly
        const videoRendererRegex = /"videoRenderer":\{"videoId":"([^"]+)".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\].*?"publishedTimeText":\{"simpleText":"([^"]+)"\}/g;

        // Alternative: Find the whole JSON blob and search within it (safer if fields are reordered)
        // Let's try to extract videoId, title, and time specifically.

        // Strategy:
        // 1. Split by "videoRenderer" to get chunks for each video
        // 2. Parse each chunk for properties

        const chunks = html.split('"videoRenderer":');
        // Skip the first chunk as it's before the first video
        for (let i = 1; i < chunks.length; i++) {
            if (videos.length >= 3) break;

            const chunk = chunks[i];

            // Extract Video ID
            const idMatch = chunk.match(/"videoId":"([^"]+)"/);
            const titleMatch = chunk.match(/"title":\{"runs":\[\{"text":"([^"]+)"\}\]/);
            const timeMatch = chunk.match(/"publishedTimeText":\{"simpleText":"([^"]+)"\}/);

            if (idMatch && titleMatch && timeMatch) {
                const videoId = idMatch[1];
                const title = titleMatch[1];
                const time = timeMatch[1];

                // Exclude Shorts if necessary (but user didn't specify, we'll keep them if they appear in /videos)
                // /videos tab usually filters out Shorts (which are in /shorts), so we should be good.

                videos.push({
                    id: videoId,
                    title: title,
                    link: `https://www.youtube.com/watch?v=${videoId}`,
                    published: time,
                    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
                });
            }
        }

        console.log("Scraped Videos:", videos.length);
        if (videos.length > 0) {
            console.log("First Video:", videos[0].title);
        }

        return videos;
    } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        return [];
    }
}
