// import models
const Joke= require("../models/joke.model")
// Create and export functions to get, create, update and delete one joke and get all jokes.
    // READ ALL=GET ALL
module.exports.findAllJokes=(req,res)=>{
    Joke.find()
        .then((allJokes=>{
            console.log("joke.find()",allJokes)
            res.json(allJokes)
        }))
        .catch(err=>{
            res.json(err)
        })
}
    // READ ONE =GET ONE
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json(oneSingleJoke)
        })
        .catch(err => {
            res.json(err)
        })
}
    // CREATE ONE
module.exports.createNewJoke=(req,res)=>{
    Joke.create(req.body)
    .then((oneJoke=>{
        console.log("joke.create()",oneJoke)
        res.json(oneJoke)
    }))
    .catch(err=>{
        res.json(err)
    })
}
// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateJoke => {
            res.json(updateJoke)
        })
        .catch(err => {
            res.json(err)
        })
}
// DELETE
module.exports.deleteJoke=(req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
    res.json(err)
    })
}

// return a random joke
module.exports.findRandomJoke = (req, res) => {
    // Compter le nombre total de documents dans la collection de blagues
    Joke.countDocuments()
        .then(totalJokes => {
            // Utiliser Math.random() pour générer un nombre aléatoire entre 0 et 1.
            // Multipliez-le par le nombre total de blagues.
            // Utilisez Math.floor() pour obtenir un index entier.
            // Ensuite, utilisez findOne() avec skip() pour obtenir une blague à cet index.
            Joke.findOne().skip(Math.floor(Math.random() * totalJokes))
                .then(oneRandomJoke => {
                    res.json(oneRandomJoke);
                })
                .catch(err => {
                    res.json(err);
                });
        })
        .catch(err => {
            res.json(err);
        });
};
