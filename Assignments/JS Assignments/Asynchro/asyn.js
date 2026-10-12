function a() {
    console.log("hello A")
}

function b() {
    console.log("hello B")
}

function c() {
    console.log("hello C")
}

setInterval(() =>{
    a()
},3000)

b()
c()