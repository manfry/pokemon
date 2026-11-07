    const pokemon = [
      { image: "images/197.png", name: "Umbreon" },
      { image: "images/059.png", name: "Arcanine" },
      { image: "images/094.png", name: "Gengar" },
      { image: "images/024.png", name: "Arbok" },
      { image: "images/008.png", name: "Wartortle" }
    ];

    let current = 0;
    const image = document.getElementById("pokemonImage");
    const input = document.getElementById("pokemonName");
    const feedback = document.getElementById("feedback");
    const counter = document.getElementById("counter");
    const percent = document.getElementById("percent");
    const progress = document.getElementById("progress");
    const progressFill = document.getElementById("progressFill");

    function updateView() {
      const number = current + 1;
      image.src = pokemon[current].image;
      image.alt = "Pokémon numero " + number + " da indovinare";
      counter.textContent = `Pokémon ${number} di ${pokemon.length}`;
      percent.textContent = `${Math.round(number / pokemon.length * 100)}%`;
      progressFill.style.width = `${number / pokemon.length * 100}%`;
      progress.setAttribute("aria-valuenow", number);
      input.value = "";
      input.focus();
    }

    document.getElementById("answerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = input.value.trim().toLocaleLowerCase("it");
      const expected = pokemon[current].name.toLocaleLowerCase("it");

      if (answer === expected) {
        current += 1;
        if (current === pokemon.length) {
          window.location.href = "enigma.html";
          return;
        }
        feedback.textContent = "Corretto! Prossimo Pokémon…";
        feedback.className = "feedback correct";
        updateView();
      } else {
        feedback.textContent = "Sbagliato. Riprova!";
        feedback.className = "feedback error";
        input.select();
      }
    });

    input.focus();