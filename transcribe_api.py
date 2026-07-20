import os
import sys
import json
import tempfile
import urllib.parse
import requests
from faster_whisper import WhisperModel

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

# Singleton model instance
_model = None

def get_model():
    global _model
    if _model is None:
        _model = WhisperModel("small", device="cpu", compute_type="int8")
    return _model

def download_audio_from_url(url):
    """
    Downloads audio file from a given URL to a temporary file.
    Supports direct audio links, Google Drive, Dropbox, etc.
    """
    download_url = url.strip()
    
    # Handle Google Drive view links
    if "drive.google.com" in download_url:
        if "/file/d/" in download_url:
            file_id = download_url.split('/file/d/')[1].split('/')[0]
            download_url = f"https://drive.google.com/uc?export=download&id={file_id}"
        elif "id=" in download_url:
            parsed = urllib.parse.parse_qs(urllib.parse.urlparse(download_url).query)
            if 'id' in parsed:
                file_id = parsed['id'][0]
                download_url = f"https://drive.google.com/uc?export=download&id={file_id}"
                
    # Handle Dropbox links
    if "dropbox.com" in download_url:
        download_url = download_url.replace("dl=0", "dl=1").replace("www.dropbox.com", "dl.dropboxusercontent.com")

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*'
    }
    
    response = requests.get(download_url, headers=headers, stream=True, timeout=60, allow_redirects=True)
    response.raise_for_status()

    # Determine extension from URL or content-type
    ext = ".ogg"
    lower_url = download_url.lower()
    content_type = response.headers.get('content-type', '').lower()

    if '.mp3' in lower_url or 'audio/mpeg' in content_type or 'audio/mp3' in content_type:
        ext = '.mp3'
    elif '.wav' in lower_url or 'audio/wav' in content_type:
        ext = '.wav'
    elif '.m4a' in lower_url or 'audio/m4a' in content_type or 'audio/mp4' in content_type:
        ext = '.m4a'
    elif '.opus' in lower_url or 'audio/opus' in content_type:
        ext = '.opus'
    elif '.aac' in lower_url or 'audio/aac' in content_type:
        ext = '.aac'
    elif '.flac' in lower_url or 'audio/flac' in content_type:
        ext = '.flac'
    elif '.webm' in lower_url or 'audio/webm' in content_type:
        ext = '.webm'

    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=ext)
    for chunk in response.iter_content(chunk_size=16384):
        if chunk:
            temp_file.write(chunk)
    temp_file.close()
    return temp_file.name

def transcribe(input_target):
    if not input_target:
        print(json.dumps({"success": False, "error": "لم يتم تقديم أي رابط أو مسار ملف"}, ensure_ascii=False))
        return

    temp_created_path = None
    audio_path = input_target.strip()

    # Check if input_target is a URL
    if audio_path.startswith("http://") or audio_path.startswith("https://"):
        try:
            audio_path = download_audio_from_url(audio_path)
            temp_created_path = audio_path
        except Exception as e:
            print(json.dumps({"success": False, "error": f"فشل تحميل الصوت من الرابط: {str(e)}"}, ensure_ascii=False))
            return

    if not os.path.exists(audio_path):
        print(json.dumps({"success": False, "error": f"الملف الصوتي غير موجود: {audio_path}"}, ensure_ascii=False))
        return

    try:
        model = get_model()
        segments, info = model.transcribe(audio_path, language="ar")
        full_text = " ".join([segment.text for segment in segments]).strip()
        print(json.dumps({"success": True, "text": full_text}, ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"success": False, "error": str(e)}, ensure_ascii=False))
    finally:
        if temp_created_path and os.path.exists(temp_created_path):
            try:
                os.remove(temp_created_path)
            except Exception:
                pass

if __name__ == "__main__":
    if len(sys.argv) > 1:
        transcribe(sys.argv[1])
    else:
        print(json.dumps({"success": False, "error": "No file path or URL provided"}, ensure_ascii=False))
