const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido e que eu poderia fazer para melhorar?",
    "O que me de deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}
// \n = new line

ask()

const answers = []

// stdin.on deixa o processo ligado, "procurando eventos"

process.stdin.on("data", data => {
    // process.stdout.write(data.toString().trim() + '\n')
    // escreve a resposta dada no terminal

    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

