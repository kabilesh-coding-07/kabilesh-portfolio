# Cine-Todo - The Mission Checklist
# Created for the Neo-Noir Portfolio

def cinema_todo():
    tasks = [
        "Script Analysis",
        "Location Scouting",
        "Final Edit Review"
    ]
    
    print("--- CINE-TODO TERMINAL ---")
    print("Current Mission Objectives:")
    for task in tasks:
        print(f"[ ] {task}")
        
    print("\n> STATUS: ACTIVE")
    print("> TRACING SIGNAL...")

if __name__ == "__main__":
    cinema_todo()
