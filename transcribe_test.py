import os
import sys
import subprocess
import speech_recognition as sr
import imageio_ffmpeg

def transcribe_ogg(file_path):
    print("Testing transcription for file:", file_path)
    r = sr.Recognizer()
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    print("FFmpeg exe path:", ffmpeg_exe)
    
    wav_path = file_path + ".wav"
    cmd = [ffmpeg_exe, "-y", "-i", file_path, "-ac", "1", "-ar", "16000", wav_path]
    print("Converting ogg/opus to wav...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("FFmpeg error:", res.stderr)
        return None
        
    print("Conversion successful. Transcribing audio via Speech Recognition...")
    with sr.AudioFile(wav_path) as source:
        audio = r.record(source)
        try:
            text = r.recognize_google(audio, language="ar-SA")
            print("\n==============================")
            print("TRANSCRIPTION RESULT (النتيجة):")
            print(text)
            print("==============================\n")
            if os.path.exists(wav_path):
                os.remove(wav_path)
            return text
        except Exception as e:
            print("Speech Recognition error:", e)
            if os.path.exists(wav_path):
                os.remove(wav_path)
            return None

if __name__ == "__main__":
    audio_path = r"C:\Users\Admin\Downloads\WhatsApp Ptt 2026-07-20 at 2.29.47 PM.ogg"
    transcribe_ogg(audio_path)
