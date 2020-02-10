const endpoint = "https://gist.githubusercontent.com/kdupass/692ca7d156bd76f49fe94e0e8f90baf3/raw/bf6dcb3ec3762199df9cbc8f04af50c8df55a5a1/test.json";

const items = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => items.push(...data));

findMatches = (wordToMatch, items) =>
  items.filter(place => {
    // 이 곳에서 검색어와 매치 되는 지를 확인해야 합니다
    const regex = new RegExp(wordToMatch, "gi");
    return place.itemid.match(regex) || place.Name.match(regex);
  });

numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

displayMatches = e => {
  const word = e.target.value;
  const matchArray = findMatches(word, items);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(word, "gi");
      const idName = place.itemid.replace(
        regex,
        `<span class="hl">${word}</span>`
      );
      const itemName = place.Name.replace(
        regex,
        `<span class="hl">${word}</span>`
      );
      return `
        <li>
            <span class="name">${idName}, ${itemName}</span>
            <span class="bind">${numberWithCommas(
              place.bind
            )}</span>
        </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
};

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
