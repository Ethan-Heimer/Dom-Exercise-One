class Person{
    constructor(name, imageURL){
        this.name = name;
        this.imageURL = imageURL; 
    }
}

const people = [new Person("Ada Lovelace", "https://www.eu-startups.com/wp-content/uploads/2019/10/ada-lovelace.png"),
                new Person("Alan Turing", "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"),
                new Person("Charles Baddage", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/800px-Charles_Babbage_-_1860.jpg"),
                new Person("Steve Jobs", "https://s.yimg.com/uu/api/res/1.2/yLirdFgMPMj8RmbIZikPMA--~B/Zmk9ZmlsbDtoPTc5Nzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://www.blogcdn.com/www.engadget.com/media/2011/10/steve-jobs.jpg.cf.jpg"),
                new Person("Bill Gates", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg"), 
                new Person("Elon Musk", "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?resize=1200:*")]

const imageContainer = document.getElementById("images");
people.forEach(currentPerson => imageContainer.appendChild(constructDomElement(currentPerson)));

function constructDomElement(person){
    let container = document.createElement("div");
    let image = document.createElement("img");
    let caption = document.createTextNode(person.name);

    container.className = "portrate";
    image.className = "image";
    caption.className = "caption";

    image.src = person.imageURL; 

    container.appendChild(image);
    container.appendChild(caption); 

    return container; 
}