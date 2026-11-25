const funcs = [] // array vazio 

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[1]()
funcs[3]()
funcs[9]()

