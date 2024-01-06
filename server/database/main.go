package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./database.db")

	if err != nil {
		log.Fatal(err)
		return
	}

	//create user table
	_, err := db.Exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, nickname TEXT, password TEXT, )")
	if err != nil {
		log.Fatal(err)
		return
	}

	_, err := db.Exec("CREATE TABLE IF NOT EXISTS wardrobe (id INTEGER PRIMARY KEY)")
}
