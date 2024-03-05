"use strict"

document.addEventListener("DOMContentLoaded", function () {
            const options = ['1', '2', '3', '4', '5'];
            const results = {};
            options.forEach(option => {
                results[option] = 0;
            });
            function updateResults() {
                const resultsDiv = document.getElementById("result");
                resultsDiv.innerHTML = "";
                for (const [option, count] of Object.entries(results)) {
                    const optionDiv = document.createElement("div");
                    optionDiv.textContent = `${option}: ${count}`;
                    resultsDiv.appendChild(optionDiv);
                }
            }
            function vote(option) {
                results[option]++;
                updateResults();
            }
            const optionsDiv = document.getElementById("vote");
            options.forEach((option, index) => {
                const optionButton = document.createElement("button");
                optionButton.textContent = option;
                optionButton.addEventListener("click", () => {
                    vote(option);
                });
                optionsDiv.appendChild(optionButton);
            });
            updateResults();
        });