const button = document.querySelector(".personal__top-button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const degree = document.querySelector("input[name = 'degree']:checked")?.value;
    const date = document.querySelector("#date").value;
    const task = document.querySelector("#task").value;
    const description = document.querySelector("#description").value;

    console.log(degree);

    if (!!name && !!degree && !!date && !!task && !!description) {
        const card = document.createElement("div");
        card.className = "data__bottom-card";

        const cardContent = document.createElement("div");
        cardContent.className = "data__bottom-card-content";


        const listCard = document.createElement("div");
        listCard.className = "data__bottom-card-content-list";

        const infoName = document.createElement("p");
        infoName.textContent = (`Name: ${name}`);

        const infoDegree = document.createElement("p");
        infoDegree.textContent = (`Degree: ${degree}`);

        const infoDate = document.createElement("p");
        infoDate.textContent = (`Date: ${date}`);

        const infoTask = document.createElement("p");
        infoTask.textContent = (`Task: ${task}`);

        const infoDescription = document.createElement("p");
        infoDescription.textContent = (`Description: ${description}`);

        listCard.appendChild(infoName);
        listCard.appendChild(infoDegree);
        listCard.appendChild(infoDate);
        listCard.appendChild(infoTask);
        listCard.appendChild(infoDescription);
        cardContent.appendChild(listCard);

        card.appendChild(cardContent);

        const buttonBlock = document.createElement("div");
        buttonBlock.className = "data__bottom-card-button";

        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.className = "data__bottom-card-buttons-button";

        const buttonRemowe = document.createElement("button");
        buttonRemowe.textContent = "Remowe";
        buttonRemowe.className = "data__bottom-card-buttons-button bottom-card--button__red";

        buttonBlock.appendChild(buttonEdit);
        buttonBlock.appendChild(buttonRemowe);
        card.appendChild(buttonBlock);

        const finalBlock = document.querySelector(".data__personal-bottom");
        finalBlock.appendChild(card);


        buttonRemowe.addEventListener("click", ()=>{
            card.remove();
        });
    };
}); 