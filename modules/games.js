"use strict";

import { create_page, markup, slug, tag } from "./common.js";

import { game_colection } from "./db/games.js";

export function games() {
  create_page(
    "jogos",
    "Jogos",
    tag(
      "p",
      {},
      markup(
        `Desde de pequeno eu tenho contato com jogos, é seguro dizer que eles tiveram influência na minha personalidade e também me deram diversos ensinamentos, fora, obviamente, a diversão proporcionada por eles.

Essa é a minha atual coleção de jogos, do meu Nintendo Switch.`,
      ),
    ),
  );

  document.getElementById("jogos").appendChild(
    tag("div", {
      "id": "game_library",
      "style": "display: flex; flex-wrap: wrap; justify-content: center",
    }),
  );

  let game_counter = 0;
  for (const game of game_colection) {
    game_counter = game_counter + 1;
    console.log(game_counter);
    document.getElementById("game_library").appendChild(
      tag(
        "div",
        {
          "style": `margin: 5px;`,
        },
        tag("img", {
          "loading": "lazy",
          "class": "game",
          "alt": slug(String(game.title)),
          "title": String(game.title),
          "src": `/assets/img/games/${game.cover}`,
          "style": `animation: slide-down 800ms both; animation-delay: ${
            1 * game_counter
          }00ms`,
        }),
      ),
    );
  }

  document.getElementById("game_library").appendChild(
    tag(
      "p",
      {
        "style": `
          padding: 6px 3px;
          border-radius: 5px;
          background-color: var(--bg-0);
        `,
      },
      "Total de jogos: ",
      tag(
        "span",
        {
          "style": `
            padding: 2px 5px;
            border-radius: 5px;
            background-color: rgba(var(--purple_rgb), .2);
            color: var(--purple);
          `,
        },
        `${game_colection.length}`,
      ),
    ),
  );
}

export default games;
