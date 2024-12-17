package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Serve React static files from the dist folder (after React build)
	fs := http.FileServer(http.Dir("./dist"))
	http.Handle("/", fs)

	// Example API endpoint
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"message": "Hello from Go Backend!"}`)
	})

	// Start the server
	port := ":8080"
	fmt.Printf("Server running at http://localhost%s\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
