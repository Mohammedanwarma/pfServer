require('dotenv').config()  //configuring dotenv package to server for loading env variables to process.env.

const express = require('express')  // importing express.

const server = express()  //creating a server app.
const cors = require('cors')
const  router = require('./Routes/routes')
require('./Connect/dbConnect')


server.use(cors())  //cors() returs cors middleware and use configures it.
server.use(express.json())  //configuring json middleware to convert json data format to native.


server.use(router)

server.use('/projectimg',express.static("./uploads"))

const PORT =3000 || process.env.PORT  //setting default port number and alternate port number form env.

server.listen(PORT,()=>{   //for amking server run and wait for request.
    console.log("Server running at:",PORT)
})




// server.get('/demo/:id',(req,res)=>{    //get request handler
//     console.log(req.params.id)
//     res.send("Get Request Hit !!")
// })

// server.post('/postreq',(req,res)=>{   //post request handler
//     console.log(req.query)      // Using query parameter
//     console.log(req.body)       // To give Message through post
//     // res.send("Post Request Hit !!")
//     res.json({"msg":"OK"}).status(205)  // Sending Response
// })

// server.put('/putreq',(req,res)=>{        //put request handler
//     res.send("Put Request Hit !!")
// })

// server.patch('/patchreq',(req,res)=>{        //patch request handler
//     res.send("Patch Request Hit !!")
// })

// server.delete('/deletereq',(req,res)=>{      //delete request handler
//     res.send("Delete Request Hit !!")
// })




// [

                    // server.use('/demo',(req,res)=>{
                    // res.send("Request Hit!!")
                    // res.end()
                // })



                // server.use((req,res)=>{   //simple request handler example.
                //     res.send("Request Hit!!")
                //     // res.end()
                // })
// ]

