function component(){

    const content = document.createElement('div')
    const headline = document.createElement('h1');
    const copy = document.createElement('div');
    const img = document.createElement('img');

    headline.innerHTML = "Odins Cafe"
    copy.innerHTML = "Indulge in a captivating cafe experience at Odin's Cafe, where we blend the art of coffee with a touch of Norse mythology. Step into a realm of warmth, flavors, and ambiance that will transport you to another world."
    img.src = "/src/restaurant.jpg"

    content.appendChild(headline)
    content.appendChild(copy)
    content.appendChild(img)


    return content

}

document.querySelector("#content").appendChild(component())