const grid = document.querySelector('.grid')
let parts = []
let layout = []

function saveCheckbox() {
    let width = document.getElementById('width').value
    let height = document.getElementById('height').value
    document.querySelector('.grid').style.width = `${width*10}vh`
    document.querySelector('.grid').style.height = `${height*10}vh`
    let addToLayout = width * height
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value); 
    })
    if(values[0] === 'redbrick') {
        let sum = (width * height) * bricks[0].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[0].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("1")
        }
    }
    else if(values[0] === 'darkbrick') {
        let sum = (width * height) * bricks[1].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[1].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("2")
        }
    }
    else if(values[0] === 'tuffbrick') {
        let sum = (width * height) * bricks[2].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[2].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("3")
        }
    }
    else if(values[0] === 'midred') {
        let sum = (width * height) * bricks[3].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[3].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("4")
        }
    }
    else if(values[0] === 'midtuff') {
        let sum = (width * height) * bricks[4].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[4].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("5")
        }
    }
    else if(values[0] === 'middark') {
        let sum = (width * height) * bricks[5].oneM2
        document.getElementById('sum').innerHTML = `Potrzebujesz ${sum} sztuk, cena: ${addToLayout * bricks[5].brickPrice}zł`
        for(let i = 0; i < addToLayout; i++) {
            layout.push("6")
        }
    }
}

function calc() {
    saveCheckbox()
    createBoard()
}

function clear() {
    document.getElementById('height').value = ""
    document.getElementById('width').value = ""
    values = []
    parts = []
    layout = []
}

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const part = document.createElement('div')
        grid.appendChild(part)
        parts.push(part)

        if (layout[i] === "1") {
            parts[i].classList.add('first')
        }
        else if (layout[i] === "2") {
            parts[i].classList.add('second')
        }
        else if (layout[i] === "3") {
            parts[i].classList.add('third')
        }
        else if (layout[i] === "4") {
            parts[i].classList.add('fourth')
        }
        else if (layout[i] === "5") {
            parts[i].classList.add('fiveth')
        }
        else if (layout[i] === "6") {
            parts[i].classList.add('sixth')
        }
    }
}

class Brick {
    constructor (brickName, brickPrice, oneM2) {
        this.brickName = brickName
        this.brickPrice = brickPrice
        this.oneM2 = oneM2
    }
}

const bricks = [
    new Brick ('Czerwona lica', 49, 55),
    new Brick ('Twarde lica', 110, 55),
    new Brick ('Ciemne lica', 69, 55),
    new Brick ('Czerwone środki', 70, 47),
    new Brick ('Twarde środki', 64, 47),
    new Brick ('Ciemne środki', 100, 47),
]

