package main

import (
	"fmt"
	"hospital/router"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file:", err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("Error: PORT environment variable not set")
	}

	// Create a new router
	r := mux.NewRouter()

	// Setup routes
	routes.SetupRoutes(r)

	// Setup CORS middleware
	allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:5173"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	allowedHeaders := handlers.AllowedHeaders([]string{"Content-Type"})

	fmt.Println("Server is getting started")
	fmt.Println("Listening on Port", port)
	log.Fatal(http.ListenAndServe(":"+port, handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))
}
