import json
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
import script
import uvicorn

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

@app.post("/")
async def main(request: Request):
    data = await request.form()
    data = jsonable_encoder(data)
    requested_videos = data['videos']
    try:
        videos = script.get_video_metadata(script.get_kaltura_videos(requested_videos))
        videos = json.loads(videos)

        if videos == []:
            return templates.TemplateResponse('index.html', {'request': request, 'error': "No videos found :'("})
        else:
            return templates.TemplateResponse('videos.html', {'request': request, 'videos': videos['videos']})
    except Exception as e:
        return templates.TemplateResponse('index.html', {'request': request, 'error': e})

@app.get("/info")
def info(request: Request):
    return templates.TemplateResponse('info.html', {'request': request})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=80, log_level="info")