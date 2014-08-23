package main

import (
	"github.com/lafaulx/decay/controller"
	"html/template"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("templates/index.html")
	t.Execute(w, nil)
}

func publicHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, r.URL.Path[1:])
}

func main() {
	textController := &controller.TextController{}
	imageController := &controller.ImageController{}
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/public/", publicHandler)
	http.HandleFunc("/a/1/text", textController.ProcessRequest)
	http.HandleFunc("/a/1/image", imageController.ProcessRequest)
	http.ListenAndServe(":8080", nil)
}
