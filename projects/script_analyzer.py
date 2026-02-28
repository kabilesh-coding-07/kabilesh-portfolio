# Script Analyzer - Semantic Inspector
# Created for the Neo-Noir Portfolio

def analyze_script(text):
    words = text.split()
    word_count = len(words)
    unique_words = len(set(words))
    
    print("--- SCRIPT ANALYSIS REPORT ---")
    print(f"Total Words: {word_count}")
    print(f"Unique Contexts: {unique_words}")
    
    if "noir" in text.lower():
        print("GENRE DETECTED: NEO-NOIR")
    else:
        print("GENRE DETECTED: UNKNOWN")

if __name__ == "__main__":
    sample = "In a city of shadows, the noir hero walks alone."
    analyze_script(sample)
