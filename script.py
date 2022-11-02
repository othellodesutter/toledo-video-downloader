import re
import json
import subprocess

def get_kaltura_videos(videos):
    print("getting kaltura videos")
    videos = json.loads(videos)
    print(videos)
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
        cmd = f'youtube-dl -f "[protocol=m3u8_native]" kaltura:{kaltura_p}:{kaltura_e} --dump-json'
        result = subprocess.run(cmd, shell=True, capture_output=True)
        result = result.stdout.decode('utf-8')
        result = json.loads(result)

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