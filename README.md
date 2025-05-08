#  URL Shortening Application

A simple and efficient URL shortening service built with **Node.js**, **Express**, **PostgreSQL**, and **MD5 hashing**. This application takes a long URL and generates a shorter, consistent hash-based link that redirects users to the original destination.

---

##  Features

- Generate MD5 hash for URLs (deterministic shortening)
- RESTful API with `encode` and `redirect` routes
- PostgreSQL-backed persistent storage
- Input validation to ensure proper URL formats
- Handles duplicate URLs by reusing existing hashes

---

## Tech Stack

- **Backend Framework**: Express.js
- **Database**: PostgreSQL
- **Hashing Algorithm**: MD5
- **Database Driver**: `pg` Node.js client

---

## API Endpoints

### `POST /encode`

Shortens a given URL.

- **Request Body**:
  ```
  {
    "url": "https://example.com"
  }
  ```

- **Response**:
    ```
    {
    "message": "Success!",
        "data": {
            "url": "http://localhost:3000/abc123"
        }
    }
    ```
### `GET /:hash`

Redirects the user to the original URL.

- Example: GET /abc123 → redirects to https://example.com


