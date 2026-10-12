function a() {
    console.log("hello A")
}

function b() {
    console.log("hello B")
}

function c() {
    console.log("hello C")
}

setTimeout(() =>{
    a()
},3000)


async function run() {
    await a()
}
run()
b()
c()