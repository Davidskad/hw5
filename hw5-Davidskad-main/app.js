console.log("Hello world!");

function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    // Check if any fields are empty
    if (p1Health === null || p1Armor === null || p1DPS === null ||
        p2Health === null || p2Armor === null || p2DPS === null) {
        alert("Please fill out all input fields before continuing.");
        return;
    }

    let p1EffectiveHealth = p1Health + p1Armor * 2;
    let p2EffectiveHealth = p2Health + p2Armor * 2;

    const p1TimeToDefeatP2 = p2EffectiveHealth / p1DPS;
    const p2TimeToDefeatP1 = p1EffectiveHealth / p2DPS;

    let result;
    let battleLength;

    if (Math.abs(p1TimeToDefeatP2 - p2TimeToDefeatP1) <= 0.1) {
        result = "It's a draw!";
        battleLength = p1TimeToDefeatP2;
    } else if (p1TimeToDefeatP2 < p2TimeToDefeatP1) {
        result = "Player 1 wins!";
        battleLength = p1TimeToDefeatP2;
    } else {
        result = "Player 2 wins!";
        battleLength = p2TimeToDefeatP1;
    }

    // Round battle length to 2 decimal places 
    battleLength = Math.round(battleLength * 100) / 100;

    alert(`${result}\nBattle length: ${battleLength} seconds`);
}