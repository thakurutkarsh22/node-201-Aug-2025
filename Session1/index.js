const http = require("http");
const PORT = 8089;



const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
        // HOME PAGE
        res.write("welcome to the fitness page");
        res.write(" here you will become fit");
        res.end();
    } else if (url === "/contacts") {
        res.end("contant: abcd@gmail.com, phone: 87383838377");
    } else if(url === "/fitness") {
        const dietChart = {
            name: "utkarhs",
            age: 28,
            height:180,
            weight: 75,
            diet: ["eggs", "protiesn"],
            gymAdrre: {
                street: "110089",
                pincode: 999999
            },
            shouldSleep8Hours: true,
        }
        
        // HEADER Metadata -> Extra data/information about the REAL DATA
        res.writeHead(200, {"content-type": "application/json" })

        // REAL DATA -> human, items 
        res.end(JSON.stringify(dietChart));
    }
});


server.listen(PORT, () => {
    console.log("THumbs up every thins is good port listning is active on ", PORT)
})