import re
import json
import youtube_dl

def get_kaltura_videos(videos):
    videos = json.loads(videos)
    pattern = '/p/(.+)/sp/.*/entry_id/(.*)/version'
    for video in videos['videos']:
        try:
            regex_res = re.search(pattern, video['toledo_url'])
            kaltura_p = regex_res.group(1)
            kaltura_e = regex_res.group(2)
            video['kaltura_p'] = kaltura_p
            video['kaltura_e'] = kaltura_e
        except:
            return "error"

    return json.dumps(videos)

def get_video_metadata(videos):
    videos = json.loads(videos)
    for video in videos['videos']:
        kaltura_p = video['kaltura_p']
        kaltura_e = video['kaltura_e']

        ydl_opts = {
            'extract_flat': True,
            'dumpjson': True
        }
        result = youtube_dl.YoutubeDL(ydl_opts).extract_info(f"kaltura:{kaltura_p}:{kaltura_e}", download=False)

        video['kaltura_title'] = result['title']
        
        formats = []
        for format in result['formats']:
            if "mp4" in format['format_id']:
                format_id = format['format_id']
                format_url = format['url']
                format_height = str(format['height'])
                format_width = str(format['width'])
                format_ext = format['ext']
                format_filesize_approx = format['filesize_approx']
                if format_filesize_approx > 1000000000:
                    format_filesize_rounded = format_filesize_approx / 1000000000
                    format_filesize_rounded = str(round(format_filesize_rounded, 1)) + " GB"
                elif format_filesize_approx > 1000000:
                    format_filesize_rounded = format_filesize_approx / 1000000
                    format_filesize_rounded = str(round(format_filesize_rounded, 1)) + " MB"
                elif format_filesize_approx > 1000:
                    format_filesize_rounded = format_filesize_approx / 1000
                    format_filesize_rounded = str(round(format_filesize_rounded, 1)) + " KB"
                else:
                    format_filesize_rounded = str(format_filesize_approx) + " B"
                formats.append({'format_id': format_id, 'format_url': format_url, 'format_height': format_height, 'format_width': format_width, 'format_ext': format_ext, 'format_filesize_approx': format_filesize_approx, 'format_filesize_rounded': format_filesize_rounded})
        video['formats'] = formats

    return json.dumps(videos)