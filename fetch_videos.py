import urllib.request
import re
import ssl

def get_latest_video_ids(channel_id):
    url = f"https://www.youtube.com/channel/{channel_id}/videos"
    print(f"Fetching {url}...")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    
    try:
        # Create a context that doesn't verify SSL (simpler for scripts usually)
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            
        # Regex to find video IDs
        # Look for "videoId":"..." patterns that are likely part of the video list
        # We exclude the first few matches if they look like channel internal IDs or duplicates
        # But for simplicity, let's grab all occurrences and filter
        
        # 'videoId":"(.*?)"'
        matches = re.findall(r'"videoId":"(.*?)"', html)
        
        # Filter duplicates while preserving order
        unique_ids = []
        seen = set()
        for vid in matches:
            if vid not in seen and len(vid) == 11: # Video IDs are 11 chars
                unique_ids.append(vid)
                seen.add(vid)
                
        # The first few might be the featured video or duplicates, 
        # usually valid videos start appearing quickly.
        
        print(f"\nFound {len(unique_ids)} potential Video IDs.")
        print("-" * 30)
        
        count = 0
        for vid in unique_ids:
            if count >= 3:
                break
            # Ignore the Channel ID itself if it matches the pattern (unlikely with this regex)
            print(f"Video {count + 1}: {vid}")
            print(f"Link:    https://www.youtube.com/watch?v={vid}")
            count += 1
            
        print("-" * 30)
        print("\nCopy the IDs above (e.g., 'dQw4w9WgXcQ') and paste them into app/events/page.tsx")

    except Exception as e:
        print(f"Error fetching videos: {e}")

if __name__ == "__main__":
    CHANNEL_ID = "UCXHFecIjMPaq78Gw6kOLUGA"
    get_latest_video_ids(CHANNEL_ID)
