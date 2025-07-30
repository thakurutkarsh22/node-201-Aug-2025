function HomeResponse (req, res) {
    // is writing the response and end it as well 
  res.send('welcome to the fitness page here you will become fit !!!!!')
}


function ContactResponse (req, res)  {
    res.send('contant: abcd@gmail.com, phone: 87383838377 express')
}

module.exports = {HomeResponse, ContactResponse}