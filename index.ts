const input1 = document.getElementById("num1") as HTMLInputElement
const input2 = document.getElementById("num2") as HTMLInputElement
const button = document.getElementById("button") as HTMLInputElement

function sum(a: number, b: number) {
    return a + b
}

button.addEventListener("click", function() {
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)
    console.log(sum(numero1, numero2))
})