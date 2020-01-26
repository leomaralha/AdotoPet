const User = require('../models/Users')

//show - listagem uma de sessao indec - listagem de sessoes
module.exports = {
  async store(req, res) {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const age = req.body.age
    const state = req.body.state
    const city = req.body.city

      try{
        if (await User.findOne({email})){
          return res.status(400).send({error: 'User already exists'});    
        }

        const user = await User.create({
          name,
          email,
          password,
          age,
          state,
          city,
        })
      }catch(err) {
        return res.status(400).send({error: "Registration Falied"})
      }  

  }

}