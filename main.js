// mendapatkan element id/class
const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

// menginisialisasi dari 0
let init = 0

// function yg berisi value pertanyaan
const botSay = (data) => {
    return [
        "Halo, Perkenalkan nama saya seinBot, siapa namamu masbro?",
        `Halo ${data?.nama}, berapa usiamu?`,
        `Ohh ${data?.usia}, hobi kamu apa ya?`,
        `Buset sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga masbro?`,
        `Ohh ${data?.pacar}, ya udah kalau gitu udahan ya masbro?`,
    ]
}

// id pertanyaan di isi dengan function botSay()
pertanyaan.innerHTML = botSay()[0]

// menampung data user
let usersData = []

// kondisi jika user menjawab pertanyaan
function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan ini jawabannya dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

// loading screen
function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(5px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1100)
    usersData.push(jawaban.value)
    jawaban.value = ""
}

// jika pertanyaan di selesaikan
function finishing() {
    pertanyaan.innerHTML = `Thank you ya masbro ${usersData[0]} udah mampir ke seinBot :)`
    jawaban.value = "siap masbro!!!"
}

function botEnd() {
    alert(`Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama lagi :)`)
    loaders.style.display = "block"
    container[0].style.filter = "blur(5px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1200)
    window.location.reload()
}