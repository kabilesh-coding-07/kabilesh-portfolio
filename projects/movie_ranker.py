# Movie Ranker - A Cinephile's Choice Script
# Created for the Neo-Noir Portfolio

def rank_movies():
    print("--- MOVIE RANKER v1.0 ---")
    movies = []
    
    while True:
        movie = input("Enter a movie title (or 'done' to finish): ")
        if movie.lower() == 'done':
            break
        movies.append(movie)
    
    print("\n--- YOUR OFFICIAL SELECTION ---")
    for i, m in enumerate(movies, 1):
        print(f"{i}. {m.upper()}")
    
    print("\n[DIRECTOR'S CUT]: Selection stored successfully.")

if __name__ == "__main__":
    rank_movies()
