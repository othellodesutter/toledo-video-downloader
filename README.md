# Toledo (Kaltura) video downloader
Lightweight and self-deployable tool to download (Kaltura) videos from courses on Toledo.

<img src="/img/example.gif" width="800"/>

## Installation
Install the requirements (YoutubeDL, FastApi etc.) by using pip.

```bash
pip install -r requirements.txt
```

## Configuration
Make a new file in the main directory called *config.py* with the following structure:

```python
config = {
    'host': 'http://localhost:80',
}
```

Change the *host* variable to the hostname where you deploy the downloader. Don't forget to add the http:// or https://. This is used in the *copy to download* button that the user will have to drag to it's bookmarks bar.

## Usage
Launch the application by using one of the following commands:

```bash
uvicorn main:app
```

```bash
python3 main.py
```

Access the site by browsing to *http://localhost:80* in your browser. To download video's: go to the info page on the deployed site and add the *copy to download* button to the bookmarks bar. Then go to the Toledo page where the video's you want to download are put on and click the *copy to download* bookmark. Your deployed downloader will open in a new tab, then paste the autoamatically copied json in the textfield, click on download videos, choose the right video format and wait until the download is finished. Done !
