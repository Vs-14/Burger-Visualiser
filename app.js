var items = [] //list to store the toppings

const p_btn = document.querySelector('.p-btn')
p_btn.addEventListener('click',function(){ //alerts the user about their purchase
    const msg = 'You have selected ' + items + ' as the toppings for your burger\nThanks for purchasing!'
    alert(msg)
})

const t_add_btns = document.querySelector('.t_add') //gets the div that is parent of all topping add btns
t_add_btns.addEventListener('click',function(e){
    tname = e.target.innerText //gets the name of the topping
    if(items.includes(tname)){

    }
    else{ //if topping not present in list adds to list and places img between the buns
        var newimg = document.createElement('img')
        newimg.src = 'images/' + tname + '.jpg'
        newimg.id = tname
        var parentDiv = document.getElementsByClassName("bun-imgs")[0] //gets the parent div
        var topbun = document.getElementsByClassName('bun')[0] //gets the topbun
        parentDiv.insertBefore(newimg,topbun.nextElementSibling) //inserts the topping between the buns
        items.push(tname) //adds topping to the list
        update_price()
    }
})

const t_rem_btns = document.querySelector('.t_rem') //gets the div that is parent of topping remove btns
t_rem_btns.addEventListener('click',function(e){
    tname = e.target.innerText
    if(items.includes(tname)){ //if topping is included in list removes from list and remove the image
        var img = document.getElementById(tname)
        var parent = img.parentNode
        parent.removeChild(img)

        idx = items.indexOf(tname)
        items.splice(idx,1)
        update_price()
    }
    else{

    }
})

function update_price(){ //goes through each topping in the list and updates the price
    var price = 2
    const vegis = ['Tomato','Lettuce','Onion','Pickle']
    const sauce = ['Ketchup','Mustard','Mayo']
    for(i=0;i<items.length;i++){
        if(items[i] == 'Cheese'){
            price += 0.75
        }
        else if(items[i] == 'Hamburger'){
            price += 2
        }
        else if(vegis.includes(items[i])){
            price += 0.5
        }
        else if(sauce.includes(items[i])){
            price += 0.25
        }
    }
    var price_dis = document.querySelector('.price')
    price_dis.innerText = `Total: $${price}`
}