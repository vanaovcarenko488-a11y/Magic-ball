document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.className = "container";
    const title = document.createElement("h1");
    title.textContent = "Магічна Куля";
    container.appendChild(title);
    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "questionInput";
    input.placeholder = "Я буду багатим?";
    inputGroup.appendChild(input);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    inputGroup.appendChild(errorDiv);
    container.appendChild(inputGroup);
    const button = document.createElement("button");
    button.textContent = "Запитати кулю";
    container.appendChild(button);
    const ballWrapper = document.createElement("div");
    ballWrapper.className = "ball-wrapper";
    const magicBallImg = document.createElement("img");
    magicBallImg.className = "magic-ball-img";
    magicBallImg.src = "https://www.shutterstock.com/shutterstock/videos/7716550/thumb/1.jpg?ip=x480"; 
    magicBallImg.alt = "Магічна куля";
    ballWrapper.appendChild(magicBallImg);
    container.appendChild(ballWrapper);
    const predictionOutput = document.createElement("div");
    predictionOutput.className = "prediction-output";
    predictionOutput.textContent = "";
    container.appendChild(predictionOutput);
    document.body.appendChild(container);
    const answers = [
        "Перспективи хороші", "Так", "Ні", "Вельми сумнівно", "Я не зрозумів питання"
    ];

    let isAnimating = false;

    input.addEventListener("input", () => {
        errorDiv.textContent = "";
    });
    const askBall = () => {
        if (isAnimating) return;
        const question = input.value.trim();
        if (!question) {
            errorDiv.textContent = "Будь ласка, спочатку введіть ваше запитання!";
            return;
        }
        if (question.length < 5) {
            errorDiv.textContent = "Запитання надто коротке (мінімум 5 символів)!";
            return;
        }
        if (!question.includes("?")) {
            errorDiv.textContent = "Речення обов'язково має містити знак питання (?)!";
            return;
        }
        errorDiv.textContent = "";
        isAnimating = true;
        predictionOutput.classList.remove("show");
        magicBallImg.classList.add("shake");
        setTimeout(() => {
            magicBallImg.classList.remove("shake");
            const randomIdx = Math.floor(Math.random() * answers.length);
            predictionOutput.textContent = answers[randomIdx];
            predictionOutput.classList.add("show");
            isAnimating = false;
        }, 500); 
    };
    button.addEventListener("click", askBall);
    magicBallImg.addEventListener("click", askBall);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") askBall();
    });
});