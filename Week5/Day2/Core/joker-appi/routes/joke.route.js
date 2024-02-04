const JokeController=require("../controllers/joke.Controller")

// Set the exported functions from the controller file to a variable using the require keyword, then add an express route for every route 
module.exports=(app)=>{
    app.get("/api/jokes",JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.patch("/api/jokes/:id",JokeController.updateJoke)
    app.post("/api/jokes",JokeController.createNewJoke)
    app.delete("/api/jokes/:id",JokeController.deleteJoke)
    app.get("/api/jokes/random", JokeController.findRandomJoke)
}