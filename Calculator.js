let mathProblem = "";

document.addEventListener('click', (event) => {
    let itemThatWasCLick = event.target;

    if (itemThatWasCLick.matches('button')) {
        if (itemThatWasCLick.dataset.number !== undefined) {
            mathProblem += itemThatWasCLick.dataset.number;
        } else {
            if (itemThatWasCLick.dataset.operation === "ce") {
                clearEverything();
                return;
            } else if (itemThatWasCLick.dataset.operation !== "=") {
                mathProblem += itemThatWasCLick.dataset.operation;
            } else {
                updateAnswer();
            }
        }
        updateCurrentProblem(mathProblem);
    }
});

function clearEverything() {
    document.getElementById("equation").textContent = "";
    mathProblem = "";
}

function updateCurrentProblem(current) {
    document.getElementById("equation").textContent = current;
}

function updateAnswer() {
    document.getElementById("solution").textContent = eval(mathProblem);
    clearEverything();
}
