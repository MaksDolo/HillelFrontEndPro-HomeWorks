"use strict"

class VotingApp {
    constructor(options = 5) {
        this.options = options;
        this.counts = new Array(this.options).fill(0);
        this.smileys = ['😊', '😄', '😁', '😆', '😃'].slice(0, this.options);
    }
    displayResults() {
        console.log(this.smileys.join(' '));
        console.log(this.counts.join(' '));
    }
    vote(option) {
        if (option >= 1 && option <= this.options) {
            this.counts[option - 1]++;
        } else {
            console.log("Некоректная опция");
        }
    }
}

const votingApp = new VotingApp();
while (true) {
    votingApp.displayResults();
    const vote = prompt(`Введтите вашу оценку (1-${votingApp.options}):`);
    if (vote === null) {
        break;
    }
    const parsedVote = parseInt(vote);
    if (!isNaN(parsedVote)) {
        votingApp.vote(parsedVote);
    } else {
        console.log("Некоректное значение.");
    }
}