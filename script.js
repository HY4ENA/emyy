// Variáveis para controle de fases
let currentPhase = 1;
let score = 0;
let correctAnswers = 0;
let storedAnswers = {
    name: '',
    food: '',
    music: '',
    animals: ''
};

// Função para mostrar a próxima fase
function goToNextPhase() {
    // Ocultar a fase atual
    document.getElementById(`phase${currentPhase}`).classList.add('hidden');

    // Avançar para a próxima fase
    currentPhase++;
    
    // Exibir a nova fase
    const nextPhase = document.getElementById(`phase${currentPhase}`);
    if (nextPhase) {
        nextPhase.classList.remove('hidden');
    }
}

// Função para esconder todas as fases
function hideAllPhases() {
    const allPhases = document.querySelectorAll('.phase');
    allPhases.forEach(phase => {
        phase.classList.add('hidden');
    });
}

// Função da fase 1: Confirmar se quer abrir o jogo
function moveYesButton() {
    hideAllPhases();
    document.getElementById('secondPhase').classList.remove('hidden');
}

// Função para avançar para a próxima fase se o nome for confirmado como "Mimilly"
function checkName(answer) {
    if (answer === 'sim') {
        hideAllPhases();
        document.getElementById('questionnaire').classList.remove('hidden');
    } else {
        hideAllPhases();
        document.getElementById('errorMessage').classList.remove('hidden');
    }
}

// Função para armazenar as respostas
function storeAnswers() {
    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;
    const music = document.getElementById('music').value;
    const animals = document.getElementById('animals').value;

    if (name && food && music && animals) {
        storedAnswers = { name, food, music, animals };
        hideAllPhases();
        document.getElementById('successMessage').classList.remove('hidden');
    } else {
        hideAllPhases();
        document.getElementById('errorMessage').classList.remove('hidden');
    }
}

// Função para tentar novamente no caso de erro
function retryAnswers() {
    hideAllPhases();
    document.getElementById('questionnaire').classList.remove('hidden');
}

// Função para avançar para a Fase 4 após sucesso no questionário
function goToFourthPhase() {
    hideAllPhases();
    document.getElementById('fourthPhase').classList.remove('hidden');
}

// Função para iniciar a Fase 5
function goToFifthPhase() {
    hideAllPhases();
    document.getElementById('fifthPhase').classList.remove('hidden');
}

// Função para verificar as respostas na Fase 5
function checkAnswers() {
    let correct = 0;

    // Verificar respostas das cores
    const jojoColor = document.querySelector('input[name="jojo"]:checked');
    const emyColor = document.querySelector('input[name="emy"]:checked');

    if (jojoColor && jojoColor.value === 'roxo') {
        correct++;
    }
    if (emyColor && emyColor.value === 'verde') {
        correct++;
    }

    // Mostrar sucesso ou erro baseado nas respostas
    if (correct === 2) {
        score++;
        correctAnswers++;
        alert("Você acertou tudo! Ganhou 1 ponto!");
    } else {
        score -= 0.5;
        alert("Você errou! Eu ganhei 0,5 pontos.");
    }

    hideAllPhases();
    document.getElementById('sixthPhase').classList.remove('hidden');
}

// Função para continuar para a fase 6
function goToSixthPhase() {
    hideAllPhases();
    document.getElementById('sixthPhase').classList.remove('hidden');
}

// Função para verificar as respostas na Fase 6
function checkAnswersSixth() {
    let correct = 0;

    // Verificar respostas dos filmes
    const jojoMovie = document.querySelector('input[name="filme_jojo"]:checked');
    const emyMovie = document.querySelector('input[name="filme_emy"]:checked');

    if (jojoMovie && jojoMovie.value === 'interstellar') {
        correct++;
    }
    if (emyMovie && emyMovie.value === 'sociedade dos poetas mortos') {
        correct++;
    }

    // Mostrar sucesso ou erro baseado nas respostas
    if (correct === 2) {
        score++;
        correctAnswers++;
        alert("Você acertou tudo! Ganhou 1 ponto!");
    } else {
        score -= 0.5;
        alert("Você errou! Eu ganhei 0,5 pontos.");
    }

    hideAllPhases();
    document.getElementById('seventhPhase').classList.remove('hidden');
}

// Função para verificar as respostas na Fase 7
function checkAnswersSeventh() {
    let correct = 0;

    // Verificar respostas dos livros
    const jojoBook = document.querySelector('input[name="livro_jojo"]:checked');
    const emyBook = document.querySelector('input[name="livro_emy"]:checked');

    if (jojoBook && jojoBook.value === 'dante') {
        correct++;
    }
    if (emyBook && emyBook.value === 'amendoas') {
        correct++;
    }

    // Mostrar sucesso ou erro baseado nas respostas
    if (correct === 2) {
        score++;
        correctAnswers++;
        alert("Você acertou tudo! Ganhou 1 ponto!");
    } else {
        score -= 0.5;
        alert("Você errou! Eu ganhei 0,5 pontos.");
    }

    alert(`Fim do jogo! Você acertou ${correctAnswers} de 6 perguntas e tem ${score} pontos.`);
}
