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
function checkAnswers1() {
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
function checkAnswers2() {
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

// Função para verificar as respostas do questionário da fase 7
function checkAnswers3() {
    const livro_jojo = document.querySelector('input[name="livro_jojo"]:checked');
    const livro_emy = document.querySelector('input[name="livro_emy"]:checked');

    if (!livro_jojo || !livro_emy) {
        alert("Por favor, selecione todas as respostas!");
        return;
    }

    let isCorrect = true;

    // Verificação da primeira questão
    if (livro_jojo.value !== "o perfume") {
        isCorrect = false;
    }

    // Verificação da segunda questão
    if (livro_emy.value !== "amen") {
        isCorrect = false;
    }

    if (isCorrect) {
        // Somar 1 ponto
        score += 1;
        alert("Você acertou! Ganhou 1 ponto!");
        goToArkanoid();
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
        alert("Você errou! Tente novamente.");
    }
}

// Função para ir para a fase do Arcade (Fase 8)
function goToArkanoid() {
    document.getElementById("seventhPhase").classList.add("hidden");
    document.getElementById("arkanoidPhase").classList.remove("hidden");
}

// Função do jogo Arkanoid
let canvas, ctx;
let ballRadius = 10;
let x, y;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX;
let rightPressed = false;
let leftPressed = false;
let bricks = [];
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

// Adicionando eventos de toque (touch events)
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("touchstart", touchStartHandler, false);
document.addEventListener("touchend", touchEndHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// Funções de toque (para dispositivos móveis)
function touchStartHandler(e) {
    let touch = e.touches[0];
    if (touch.clientX > canvas.width / 2) {
        rightPressed = true;
    } else {
        leftPressed = true;
    }
}

function touchEndHandler(e) {
    rightPressed = false;
    leftPressed = false;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            alert("GAME OVER!");
            resetGame();
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

function startGame() {
    document.getElementById("arkanoidPhase").classList.remove("hidden");
    canvas = document.getElementById("arkanoidCanvas");
    ctx = canvas.getContext("2d");
    x = canvas.width / 2;
    y = canvas.height - 30;
    paddleX = (canvas.width - paddleWidth) / 2;
    bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
    draw();
}

function resetGame() {
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 2;
    dy = -2;
    paddleX = (canvas.width - paddleWidth) / 2;
    bricks.forEach(function(column) {
        column.forEach(function(brick) {
            brick.status = 1;
        });
    });
}

