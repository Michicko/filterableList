const searchInput = document.querySelector(".search-input");
const ul = document.querySelector(".collection-list");
const items = ul.querySelectorAll("li");

const filterList = (e) => {
	const input = e.target.value.toUpperCase();

	for (let i = 0; i < items.length; i++) {
		let item = items[i];

        // check if word exist from the start
		if (
			item.outerText.toUpperCase().indexOf(input) > -1 &&
			item.outerText[0].toUpperCase() == input[0]
		) {
			item.style.display = "";
		} else {
			item.style.display = "none";
		}

        // if input is empty return to default
        if (input === '') {
            item.style.display = "block";
        }
	}
};

searchInput.addEventListener("keyup", filterList);
