function HomeResponse (req, res, next) {
  res.send('welcome to the fitness page here you will become fit !!!!!')
}


function ContactResponse (req, res)  {
    res.send('contant: abcd@gmail.com, phone: 87383838377 express')
}

module.exports = {HomeResponse, ContactResponse}