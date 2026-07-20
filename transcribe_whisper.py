import os
import sys
from faster_whisper import WhisperModel

# Force UTF-8 stdout
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

def transcribe():
    audio_path = r"C:\Users\Admin\Downloads\WhatsApp Ptt 2026-07-20 at 2.29.47 PM.ogg"
    print("Loading Whisper 'small' model...")
    model = WhisperModel("small", device="cpu", compute_type="int8")
    
    print("Transcribing audio file:", audio_path)
    segments, info = model.transcribe(audio_path, language="ar")
    
    full_text = ""
    for segment in segments:
        full_text += segment.text + " "
        
    cleaned_text = full_text.strip()
    
    # Save result to UTF-8 text file
    with open("transcription_output.txt", "w", encoding="utf-8") as f:
        f.write(cleaned_text)
        
    print("\n==============================================")
    print("FINAL TRANSCRIPTION RESULT (النتيجة التفريغية):")
    print(cleaned_text)
    print("==============================================\n")
    return cleaned_text

if __name__ == "__main__":
    transcribe()
