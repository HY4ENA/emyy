// Variáveis de controle
let attempts = 0;
let score = 0;

// Função chamada ao clicar no botão "Sim"
function moveYesButton() {
    const yesBtn = document.getElementById("yesBtn");
    attempts++;

    if (attempts < 4) {
        // Move o botão "Sim" aleatoriamente até o 4º clique
        moveButton(yesBtn);
    } else {
        // Permitir o clique após 4 tentativas
        yesBtn.style.position = "static";  // Posiciona o botão de volta ao lugar
        yesBtn.disabled = false;           // Habilita o botão
        yesBtn.innerText = "Agora pode clicar!";

        // Transição para a segunda fase
        setTimeout(function() {
            document.getElementById("firstPhase").classList.add("hidden");
            document.getElementById("secondPhase").classList.remove("hidden");
        }, 1000);  // Atraso de 1 segundo para dar um efeito visual de transição
    }
}

// Função para mover o botão
function moveButton(button) {
    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Função chamada ao clicar no botão "Não"
function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    moveButton(noBtn);  // Faz o botão "Não" se mover
}

// Função para verificar o nome
function checkName(answer) {
    if (answer === 'sim') {
        document.getElementById("secondPhase").classList.add("hidden");
        document.getElementById("questionnaire").classList.remove("hidden");
    } else {
        document.getElementById("secondPhase").classList.add("hidden");
        document.getElementById("errorMessage").classList.remove("hidden");
    }
}

// Função para armazenar as respostas no localStorage
function storeAnswers() {
    const name = document.getElementById("name").value.toLowerCase();
    const food = document.getElementById("food").value.toLowerCase();
    const music = document.getElementById("music").value.toLowerCase();
    const animals = document.getElementById("animals").value.toLowerCase();

    // Armazenar as respostas no localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("food", food);
    localStorage.setItem("music", music);
    localStorage.setItem("animals", animals);

    // Verificação das respostas
    if (name === "mimilly" && food === "macarrao ao molho branco" && music === "yoyok" && animals === "rabito, meg, lorenzo, amora e zara") {
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("questionnaire").classList.add("hidden");
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
        document.getElementById("questionnaire").classList.add("hidden");
    }
}

// Função para ir para a fase 4
function goToFourthPhase() {
    document.getElementById("successMessage").classList.add("hidden");
    document.getElementById("fourthPhase").classList.remove("hidden");
}

// Função para ir para a fase 5
function goToFifthPhase() {
    document.getElementById("fourthPhase").classList.add("hidden");
    document.getElementById("fifthPhase").classList.remove("hidden");
}

// Função para verificar as respostas do questionário da fase 5
function checkAnswers() {
    const jojo = document.querySelector('input[name="jojo"]:checked');
    const emy = document.querySelector('input[name="emy"]:checked');

    if (!jojo || !emy) {
        alert("Por favor, selecione todas as respostas!");
        return;
    }

    let isCorrect = true;

    // Verificação da primeira questão
    if (jojo.value !== "roxo") {
        isCorrect = false;
    }

    // Verificação da segunda questão
    if (emy.value !== "verde") {
        isCorrect = false;
    }

    if (isCorrect) {
        // Somar 1 ponto
        score += 1;
        alert("Você acertou tudo! Ganhou 1 ponto!");
        goToSixthPhase();
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
        alert("Você errou! Tente novamente.");
    }
}
function goToSixthPhase() {
    document.getElementById("fifthPhase").classList.add("hidden");
    document.getElementById("sixthPhase").classList.remove("hidden");
}

// Função para verificar as respostas do questionário da fase 6
function checkAnswers() {
    const filme_jojo = document.querySelector('input[name="filme_jojo"]:checked');
    const filme_emy = document.querySelector('input[name="filme_emy"]:checked');

    if (!filme_jojo|| !filme_emy) {
        alert("Por favor, selecione todas as respostas!");
        return;
    }

    let isCorrect = true;

    // Verificação da primeira questão
    if (filme_jojo.value !== "interstellar") {
        isCorrect = false;
    }

    // Verificação da segunda questão
    if (filme_emy.value !== "sociedade dos poetas mortos") {
        isCorrect = false;
    }

    if (isCorrect) {
        // Somar 1 ponto
        score += 1;
        alert("Você acertou! Ganhou 1 ponto!");
        goToSeventhPhase();
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
        alert("Você errou! Tente novamente.");
    }
}
function goToSeventhPhase() {
    document.getElementById("sixthPhase").classList.add("hidden");
    document.getElementById("seventhPhase").classList.remove("hidden");
}
// Função para verificar as respostas do questionário da fase 6
function checkAnswers() {
    const livro_jojo = document.querySelector('input[name="livro_jojo"]:checked');
    const livro_emy = document.querySelector('input[name="livro_emy"]:checked');

    if (!livro_jojo|| !livro_emy) {
        alert("Por favor, selecione todas as respostas!");
        return;
    }

    let isCorrect = true;

    // Verificação da primeira questão
    if (livro_jojo.value !== "o perfume") {
        isCorrect = false;
    }

    // Verificação da segunda questão
    if (livro_emy.value !== "amendoas") {
        isCorrect = false;
    }

    if (isCorrect) {
        // Somar 1 ponto
        score += 1;
        alert("Você acertou! Ganhou 1 ponto!");
    }
}
