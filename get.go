package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    // Create a new Gin router instance
    router := gin.Default()

    // Define a simple route
    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello, world!",
        })
    })

    // Start the server on port 8080
    router.Run(":8080")
}
