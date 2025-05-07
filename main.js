let people = [
    {
        name: "Sara",
        age: "33",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
        name: "Mohammed",
        age: "23",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        name: "Nour",
        age: "30",
        img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        name: "Ali",
        age: "53",
        img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
]

console.log(people.map(person => person.img))

people.map(person => {
    let card = document.createElement('div');
    card.style.border = "2px solid black";
    card.style.width = "400px";
    card.style.margin = "auto";
    card.style.marginBottom = "2rem";
    card.style.paddingTop = "2rem";
    card.style.textAlign = "center";


    let pImg = document.createElement("img");
    let name = document.createElement("h2");
    let age = document.createElement("h3");
    pImg.src = person.img;
    pImg.style.width = "300px";
    name.innerText = `Name: ${person.name}`;
    age.innerText = `Age: ${person.age}`;
    card.appendChild(pImg);
    card.appendChild(name);
    card.appendChild(age);
    document.body.appendChild(card);
})