var items = []

function pay(){
    let msg = 'You have selected ' + items + ' as the toppings for your burger\nThanks for purchase!'
    alert(msg)
    rem_all()
}

function t_add() {
    if(items.includes('Tomato')){ //if topping already present do nothing

    }
    else{
        var newImage = document.createElement("img") //creates new img element
        newImage.src = "images/Tomato.jpg" //setting up the attributes
        newImage.className = "topping"
        newImage.id = 'Tomato'
        
        var buns = document.getElementsByClassName("bun") //gets both the bun elements
        var topBun = buns[0] // to get the top bun
        document.body.insertBefore(newImage, topBun.nextSibling) //inserts the topping between the top bun and bottom bun
        items.push('Tomato') //topping name added to list to prevent repeated additions

        update_price()
    }
}

function l_add() {
    if(items.includes('Lettuce')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Lettuce.jpg"
        newImage.className = "topping"
        newImage.id = 'Lettuce'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Lettuce')

        update_price()
    }
}

function o_add() {
    if(items.includes('Onion')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Onion.jpg"
        newImage.className = "topping"
        newImage.id = 'Onion'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Onion')

        update_price()
    }
}

function p_add() {
    if(items.includes('Pickle')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Pickle.jpg"
        newImage.className = "topping"
        newImage.id = 'Pickle'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Pickle')

        update_price()
    }
}

function c_add() {
    if(items.includes('Cheese')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Cheese.jpg"
        newImage.className = "topping"
        newImage.id = 'Cheese'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Cheese')

        update_price()
    }
}

function h_add() {
    if(items.includes('Hamburger')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Hamburger.jpg"
        newImage.className = "topping"
        newImage.id = 'Hamburger'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Hamburger')

        update_price()
    }
}


function k_add() {
    if(items.includes('Ketchup')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Ketchup.jpg"
        newImage.className = "topping"
        newImage.id = 'Ketchup'

        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Ketchup')

        update_price()
    }
}

function m_add() {
    if(items.includes('Mustard')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Mustard.jpg"
        newImage.className = "topping"
        newImage.id = 'Mustard'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Mustard')

        update_price()
    }
}

function mayo_add() {
    if(items.includes('Mayo')){

    }
    else{
        var newImage = document.createElement("img")
        newImage.src = "images/Mayo.jpg"
        newImage.className = "topping"
        newImage.id = 'Mayo'
        
        var buns = document.getElementsByClassName("bun")
        var topBun = buns[0]
        document.body.insertBefore(newImage, topBun.nextSibling)
        items.push('Mayo')

        update_price()
    }
}

function update_price() { //fxn goes through each item in list of all items and calcs the total price
    price = 2 //base price
    sauces = ['Ketchup','Mustard','Mayo']
    vegis = ['Tomato','Lettuce','Onion','Pickle']
    for(var i=0; i < items.length; i++){
        t = items[i]
        if(t == 'Hamburger'){
            price += 2
        }
        else if(t == 'Cheese'){
            price += 0.75
        }
        else if(sauces.includes(t)){
            price += 0.25
        }
        else if(vegis.includes(t)){
            price += 0.5
        }
    }
    const priceDisplay = document.querySelector('.price'); //gets the price element
    priceDisplay.textContent = `Total: $${price}`; //updates the price
}

function t_rem() {
    if(items.includes('Tomato')){
        var image = document.getElementById("Tomato");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Tomato')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function l_rem() {
    if(items.includes('Lettuce')){
        var image = document.getElementById("Lettuce");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Lettuce')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function o_rem() {
    if(items.includes('Onion')){
        var image = document.getElementById("Onion");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Onion')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function p_rem() {
    if(items.includes('Pickle')){
        var image = document.getElementById("Pickle");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Pickle')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function c_rem() {
    if(items.includes('Cheese')){
        var image = document.getElementById("Cheese");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Cheese')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function h_rem() {
    if(items.includes('Hamburger')){
        var image = document.getElementById("Hamburger");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Hamburger')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function k_rem() {
    if(items.includes('Ketchup')){
        var image = document.getElementById("Ketchup");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Ketchup')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function m_rem() {
    if(items.includes('Mustard')){
        var image = document.getElementById("Mustard");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Mustard')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function mayo_rem() {
    if(items.includes('Mayo')){
        var image = document.getElementById("Mayo");
        var parent = image.parentNode;
        parent.removeChild(image);

        idx = items.indexOf('Mayo')
        items.splice(idx,1)

        update_price()
        
    }
    else{

    }
}

function rem_all(){ //fxn to remove all toppings at the end
    h_rem()
    k_rem()
    l_rem()
    t_rem()
    p_rem()
    m_rem()
    mayo_rem()
    o_rem()
    c_rem()
}