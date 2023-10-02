characterBars.forEach((characterBar) => {
    const name = characterBar.querySelector("h4").textContent;
    const paragraph = document.createElement("p");
    paragraph.textContent = `Name: ${name}`;
    characterBar.appendChild(paragraph);
});