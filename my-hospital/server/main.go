package main

import (
	"fmt"
	"hospital/router"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()
	if err != nil{
		log.Fatal(err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		fmt.Printf("Error while getting PORT")
	}

    // Create a new router
    r := mux.NewRouter()

    // Setup routes
    routes.SetupRoutes(r)

    fmt.Println("Server is getting started")
	fmt.Println("Listening on Port", port)
	log.Fatal(http.ListenAndServe(":" + port, r))
	fmt.Println("Listening on Port", port)
}
