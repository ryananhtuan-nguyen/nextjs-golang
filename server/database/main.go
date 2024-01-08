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
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users 
		(
			id TEXT PRIMARY KEY, 
			nickname TEXT, 
			password TEXT
		)
	`)
	if err != nil {
		log.Fatal(err)
		return
	}

	//wardrobe table
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS wardrobe (
			id TEXT PRIMARY KEY,
			user_id TEXT NOT NULL REFERENCES users(id),
			name TEXT,
			description TEXT,
			category TEXT,
			image TEXT NOT NULL,
			public_id TEXT
		);
	`)
	if err != nil {
		log.Fatal(err)
	}

	//outfit table
	_, err = db.Exec(`
    CREATE TABLE IF NOT EXISTS outfits (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id),
        img TEXT NOT NULL,
        description TEXT,
        top_id INTEGER REFERENCES wardrobe(id),
        bottom_id INTEGER REFERENCES wardrobe(id),
        outer_id INTEGER REFERENCES wardrobe(id),
        accessories_id INTEGER REFERENCES wardrobe(id),
        footwear_id INTEGER REFERENCES wardrobe(id),
        date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        public_id TEXT
    );
`)
	if err != nil {
		log.Fatal(err)
	}

}
