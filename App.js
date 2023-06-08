const userInput = document.querySelector(".wordInput");
const toggleBtn = document.querySelector("#toggleButton");
const searchBtn = document.querySelector(".search");
const historyWrapper = document.querySelector(".historyWrapper");
const definitionText = document.querySelector(".definitionText");
const searchSection = document.querySelector("#section-1");

searchBtn.addEventListener("click", function () {
	const input = userInput.value;

	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
		.then((res) => res.json())
		.then((output) => {
			for (let data of output) {
				historyWrapper.textContent = "";

				const definition = data["meanings"][0]["definitions"][0]["definition"];

				definitionText.textContent = definition;

				const textData = {
					key: input,
					value: definition,
				};

				const localData = JSON.parse(localStorage.getItem("words"));

				if (localData && localData.length > 0) {
					// .some is used to store unique objects in local storage.
					if (localData.some((el) => el.key === textData.key)) {
						removeObjectFromArray(localData, textData);
					}
					localData.push(textData);
					localStorage.setItem("words", JSON.stringify(localData));
				} else {
					localStorage.setItem("words", JSON.stringify([textData]));
				}
			}
		})
		.catch(() => {
			document.querySelector(".definitionText").textContent = "NOT A WORD";
		});
});

toggleBtn.addEventListener("click", function () {
	if (toggleBtn.textContent === "HISTORY") {
		document.querySelector("#section-2").style.display = "block";
		searchSection.style.display = "none";
		toggleBtn.textContent = "SEARCH";

		const localData = JSON.parse(localStorage.getItem("words"));

		definitionText.textContent = "";
		historyWrapper.textContent = "";

		const heading = document.createElement("h2");
		heading.textContent = "History";

		historyWrapper.append(heading);

		if (localData && localData.length > 0) {
			for (let data of localData) {
				const div = document.createElement("div");
				const deleteIcon = document.createElement("img");
				deleteIcon.src = "assets/delete-1487-svgrepo-com.svg";
				const para = document.createElement("p");
				para.textContent = `${data["key"]} : ${data["value"]}`;
				div.append(para);
				div.append(deleteIcon);
				historyWrapper.append(div);
			}
		}
	} else if (toggleBtn.textContent == "SEARCH") {
		toggleBtn.textContent = "HISTORY";
		document.querySelector("#section-2").style.display = "none";
		searchSection.style.display = "flex";
	}
});

historyWrapper.addEventListener("click", function (event) {
	if (event.target.tagName === "IMG") {
		const div = event.target.parentNode; // Get the parent <div> element
		const para = div.querySelector("p"); // Get the <p> element within the <div>
		const key = para.textContent.split(" : ")[0]; // Extract the key from the <p> text content

		div.remove();

		const localData = JSON.parse(localStorage.getItem("words"));
		const updatedData = localData.filter((data) => data.key !== key);
		localStorage.setItem("words", JSON.stringify(updatedData));
	}
});

function removeObjectFromArray(arr, obj) {
	const findIndex = arr.findIndex((a) => a.key === obj.key);
	findIndex !== -1 && arr.splice(findIndex, 1);
}
