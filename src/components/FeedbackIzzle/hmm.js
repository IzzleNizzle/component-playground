const $feedbackIzzle = document.querySelector(".feedbackizzle");
const $emojis = document.querySelectorAll(".feedback-choices div");
const $typeInput = document.querySelector(".feedbackizzle div.typed-input");
const emojiChoices = ["happy", "meh", "mad"];
const userData = {
    feedback: "",
    comment: "",
    contact: ""
};

$feedbackIzzle.addEventListener("click", () => {
    $feedbackIzzle.classList.toggle("expand");
});

$typeInput.addEventListener("click", e => {
    e.stopPropagation();
});

document.getElementById("feedbackizzle").addEventListener("click", () => {
    $typeInput.classList.add("hidden");
    $feedbackIzzle.classList.remove("stage-2", "expand");

    document.querySelector("div.thoughts span.first").classList.add("hidden");
    document.querySelector("div.thoughts span.second").classList.remove("hidden");
    $feedbackIzzle.classList.add("done");

    userData.comment = document.getElementById("feedbackizzle-text").value;
    userData.contact = document.getElementById("feedbackizzle-contact").value;
    sendData(userData);
});

$emojis.forEach((div, ind) => {
    div.setAttribute("data-emoji", emojiChoices[ind]);
    div.addEventListener("click", function (e) {
        e.stopPropagation();
        $feedbackIzzle.classList.add("stage-2");
        $typeInput.classList.remove("hidden");

        userData.feedback = this.getAttribute("data-emoji");
    });
});

function sendData(inp) {
    fetch(`https://intense-atoll-16720.herokuapp.com/api/feedbacks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inp)
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (res) {
            console.log(res);
        });
}
