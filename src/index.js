import navbar from "../components/navbar";

import "../styles/navbar.css";

import "../styles/recipe.css";

document.getElementById("navbar").innerHTML = navbar();

let submit = async () => {

    try{

    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    const res = await fetch(url);

    const data = await res.json();

    append(data.meals);

    }catch(err){
        console.log(err);
    }
};

let append = (data) => {

    document.getElementById("recipe").innerHTML = null;

    data.map((el) => {
      
    let recdiv = document.createElement("div");
    recdiv.setAttribute("class","recdiv");

    let title = document.createElement("h2");
    title.setAttribute("class","title");
    title.innerText = el.strMeal;

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class","imgdiv");

    let image = document.createElement("img");
    image.setAttribute("class","poster")
    image.src = el.strMealThumb;

    let instructions = document.createElement("h3");
    instructions.setAttribute("class","instructions");
    instructions.innerText = "Instructions: ";

    let inst = document.createElement("p");
    inst.innerText = el.strInstructions;

    let article = document.createElement("h3");
    article.setAttribute("class","article");
    article.innerText = "Article Link: ";

    let link = document.createElement("p");
    link.innerText = el.strSource;

    imgdiv.append(image);

    recdiv.append(title,imgdiv,instructions,inst,article,link)
    document.getElementById("recipe").append(recdiv);

    });
};

document.getElementById("submit").addEventListener("click",submit);


