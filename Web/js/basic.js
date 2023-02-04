let lst = new Set();
function addIngredient() {
  let ingr = document.getElementById("myList");
  let sel_fruit = document.getElementById("mySelect");

  if(lst.has(sel_fruit.selectedIndex)==false){
    lst.add(sel_fruit.selectedIndex);
    let li = document.createElement("li");
    li.innerText = sel_fruit.options[sel_fruit.selectedIndex].text;
    ingr.appendChild(li);
  }
}

function deleteIngredient() {
  document.getElementById("myList").innerHTML = "";
  lst = new Set();
  var x = document.getElementById("all");
  x.style.display = "none";
}

function getResult(){
  var x = document.getElementById("all");
  x.style.display = "block";
  let recipes = findRecipe(lst);
  let food = document.getElementById("myFood");
  if (recipes.length == 0){
    food.innerHTML = "<p>Unable to cook :( Not enough ingredient!</p>";
    return;
  }
  food.innerHTML = "<p>Here are your recipe:</p>";
  recipes.forEach((item) => {
    food.innerHTML += '<li>' + item + '</li>';
  });
}


let ingredient = ['Caesar salad dressing', 'Coles cranberry sauce', 'Mexican spice', 'Pastrami', 'Pistachios', 'Sausages', 'Schnitzel', 'Sriracha', 'Tortilla', 'Tuna',
'allspice', 'apples', 'apricots', 'asparagus', 'avocado', 'baby capers', 'bacon', 'basil', 'bay leaves', 'beans', 'beef', 'bread', 'broccoli', 'butter', 'cabbage', 'capsicum', 'cardamom', 'carrot', 'cashews', 'celery', 'cheddar', 'chedder cheese', 'cheese', 'chervil', 'chicken', 'chicken Thigh', 'chicken breast', 'chickpeas', 'chilli', 'chipotle', 'chips', 'chives', 'ciabatta', 'cinnamon', 'coleslaw', 'cooking sake', 'cooking wine', 'coriander',
'corn', 'cornflour', 'crackers', 'cream', 'cucumber', 'cumin', 'curry', 'dill', 'dressing', 'edamame', 'egg', 'eschalot', 'fajita', 'fetta', 'fettuccine', 'fillets', 'fish', 'flakes', 'flour', 'fraiche', 'fresh chives', 'garam', 'garlic cloves', 'ginger', 'green shallots', 'gruyèrea', 'ham', 'herbs', 'honey', 'kecap manis', 'lamb', 'leek', 'lemon', 'lengthways', 'lettuce', 'lime', 'mayonnaise', 'milk', 'mint', 'miso', 'mozzarella', 'mushrooms',
'mustard', 'noodles', 'nuts', 'oil', 'olives', 'onion', 'oregano', 'oyster sauce', 'pak choy', 'paprika', 'parmesan', 'parsley', 'pasta', 'pasta sauce', 'pastry', 'peas', 'pecans', 'pepper', 'pineapple', 'plum', 'pork', 'potato', 'powder', 'prawns', 'prosciutto', 'rice', 'rocket leaves', 'rosemary'
, 'salad', 'salt', 'sauce', 'seasoning', 'seaweed', 'seeds', 'sesame', 'shallots', 'sourdough bread', 'soy sauce', 'spaghetti', 'spinach', 'steak', 'sticks', 'stock', 'sugar', 'sunflower seeds', 'thousand island dressing', 'thyme', 'toast', 'tomato', 'tonkatsu sauce', 'turmeric', 'vinegar', 'wine',
'wonton', 'yeast', 'yoghurt', 'zucchini', 'zucchini noodles'];

let ingredient_name = [['noodles', 'oil', 'powder', 'chicken', 'oil', 'ginger', 'garlic cloves', 'mushrooms', 'peas', 'chicken', 'soy sauce', 'oyster sauce', 'kecap manis', 
'beans', 'coriander', 'chilli', 'lime'], ['prosciutto', 'sourdough bread', 'butter', 'avocado', 'egg', 'parmesan', 'Caesar salad dressing', 'oil', 'fresh chives', 'salt'], 
['bread', 'cream', 'pork', 'beef', 'onion', 'egg', 'potato', 'allspice', 'oil', 'butter', 'flour', 'beef', 'sauce', 'Coles cranberry sauce', 'beans', 'potato', 'dill'], 
['egg', 'Mexican spice', 'zucchini', 'carrot', 'green shallots', 'peas', 'flour', 'coriander', 'chedder cheese', 'avocado', 'tomato', 'Sriracha'], ['miso', 'cooking sake', 
'tonkatsu sauce', 'oil', 'oil', 'onion', 'carrot', 'mushrooms', 'corn', 'rice', 'cabbage', 'edamame', 'ginger', 'seaweed', 'onion', 'seeds'], ['spaghetti', 'oil', 'bacon', 
'broccoli', 'asparagus', 'noodles', 'zucchini noodles', 'peas', 'egg', 'flour', 'parmesan', 'cream'], ['miso', 'cooking sake', 'tonkatsu sauce', 'oil', 'oil', 'onion', 'carrot', 
'mushrooms', 'corn', 'rice', 'cabbage', 'edamame', 'ginger', 'seaweed', 'onion', 'seeds'], ['pasta', 'prawns', 'cucumber', 'avocado', 'salad', 'chives', 'mint', 'dill', 'mayonnaise', 
'tomato', 'lemon', 'sauce'], ['pasta', 'corn', 'butter', 'flour', 'milk', 'Tuna', 'cheddar', 'lemon', 'chips', 'parmesan', 'shallots'], ['pasta', 'prawns', 'cucumber', 'avocado', 'salad', 
'chives', 'mint', 'dill', 'mayonnaise', 'tomato', 'lemon', 'sauce'], ['onion', 'garlic cloves', 'ginger', 'chilli', 'oil', 'curry', 'chicken', 'potato', 'stock', 'milk', 'rice', 'chilli'], 
['pecans', 'chicken', 'avocado', 'apples', 'sticks', 'rocket leaves', 'mayonnaise', 'oil', 'vinegar', 'chives', 'honey', 'pepper'], ['chicken', 'chickpeas', 'seasoning', 'tomato', 'spinach'], 
['oil', 'mushrooms', 'pork', 'garlic cloves', 'ginger', 'oyster sauce', 'spinach', 'rice', 'lettuce', 'shallots', 'sunflower seeds', 'shallots', 'mayonnaise'], ['oil', 'onion', 
'garlic cloves', 'rice', 'tomato', 'chicken', 'peas', 'parmesan', 'oil', 'basil'], ['cornflour', 'sugar', 'garlic cloves', 'sauce', 'lamb', 'oil', 'onion', 'lengthways', 'broccoli', 
'beans', 'cooking wine', 'onion', 'rice'], ['oil', 'pork', 'tomato', 'wine', 'pasta sauce', 'rosemary', 'stock', 'fettuccine', 'parsley', 'parmesan'], ['bread', 'milk', 'pork', 'shallots',
'ginger', 'garlic cloves', 'cornflour', 'egg', 'soy sauce', 'oil', 'onion', 'capsicum', 'capsicum', 'pineapple', 'tomato', 'vinegar', 'sugar', 'rice'], ['oil', 'steak', 'onion', 'mushrooms', 
'garlic cloves', 'paprika', 'sauce', 'tomato', 'beef', 'pasta', 'zucchini', 'cream', 'parsley'], ['cheese', 'Pastrami', 'coleslaw', 'thousand island dressing'], ['potato', 'peas', 'egg', 
'cheese', 'salad'], ['yeast', 'honey', 'oil', 'flour', 'flakes', 'tomato', 'oil', 'mozzarella', 'parmesan'], ['oil', 'butter', 'leek', 'garlic cloves', 'potato', 'stock', 'broccoli', 'peas', 
'asparagus', 'fraiche', 'parsley', 'crackers', 'cheese'], ['oil', 'chicken', 'capsicum', 'onion', 'garlic cloves', 'oregano', 'bay leaves', 'lemon', 'tomato', 'olives', 'fetta'], ['fettuccine', 
'Sausages', 'oil', 'parmesan', 'basil'], ['butter', 'onion', 'flour', 'milk', 'cream', 'potato', 'gruyèrea', 'parsley'], ['oil', 'onion', 'garlic cloves', 'cumin', 'coriander', 'paprika', 'beef', 
'chipotle', 'beans', 'lime', 'coriander', 'corn', 'cheese', 'pepper', 'cream', 'avocado', 'tomato', 'chilli'], ['flour', 'butter', 'egg', 'onion', 'bacon', 'cheese', 'cream', 'salad'], ['oil', 'onion', 
'chicken breast', 'garlic cloves', 'chicken', 'pasta', 'Pistachios', 'basil', 'parsley', 'lemon', 'cream', 'broccoli', 'spinach', 'cheese'], ['oil', 'chicken Thigh', 'leek', 'garlic cloves', 'thyme', 
'potato', 'sauce', 'peas', 'pastry', 'egg', 'thyme'], ['oil', 'onion', 'garlic cloves', 'carrot', 'celery', 'rosemary', 'lamb', 'flour', 'sauce', 'tomato', 'beef', 'potato', 'milk', 'butter'], 
['sauce', 'vinegar', 'oil', 'sugar', 'chicken', 'noodles', 'oil', 'onion', 'sesame', 'pak choy'], ['rice', 'oil', 'onion', 'bacon', 'wonton', 'peas', 'corn', 'sauce', 'egg'], ['carrot', 
'onion', 'celery', 'garlic cloves', 'oil', 'lamb', 'bay leaves', 'wine', 'tomato', 'sugar', 'pasta', 'parmesan', 'herbs'], ['oil', 'chicken', 'onion', 'capsicum', 'capsicum', 'corn', 'fajita', 
'chipotle', 'sauce', 'beans', 'avocado', 'Tortilla'], ['oil', 'garlic cloves', 'beef', 'sugar', 'fish', 'pepper', 'noodles', 'rice', 'coleslaw', 'mint', 'chilli', 'sauce'], ['noodles', 'lime', 'oil', 
'chilli', 'sauce', 'butter', 'chicken', 'carrot', 'cabbage', 'onion'], ['chicken', 'cheddar', 'flour', 'egg', 'Schnitzel', 'parmesan', 'oil', 'lettuce', 'tomato', 'cucumber', 'dressing', 'lemon'], ['spinach', 
'chicken', 'bread', 'onion', 'garlic cloves', 'egg', 'dill', 'lemon', 'fetta', 'cheese', 'pastry', 'butter', 'yoghurt', 'salad'], ['oil', 'onion', 'mushrooms', 'capsicum', 'garlic cloves', 'paprika', 'cumin',
'coriander', 'oregano', 'tomato', 'potato', 'zucchini', 'beans', 'corn', 'avocado', 'chilli', 'coriander', 'lime'], ['chicken', 'apricots', 'asparagus'], ['plum', 'sauce', 'oyster sauce', 'sesame', 'garlic cloves', 
'ginger', 'oil', 'beans', 'carrot', 'beef', 'onion', 'noodles', 'chilli'], ['butter', 'flour', 'milk', 'garlic cloves', 'bay leaves', 'ciabatta', 'mustard', 'ham', 'cheddar', 'salad'], ['oil', 'chicken', 'honey', 
'lemon', 'kecap manis', 'carrot', 'pak choy', 'rice'], ['yoghurt', 'lime', 'turmeric', 'garam', 'chilli', 'cumin', 'garlic cloves', 'ginger', 'chicken', 'cashews', 'butter', 'oil', 'onion', 'cardamom', 
'cinnamon', 'bay leaves', 'paprika', 'tomato', 'chicken', 'cream', 'rice', 'coriander'], ['noodles', 'oil', 'onion', 'garlic cloves', 'ginger', 'carrot', 'cabbage', 'sauce', 'pork', 'chilli'], ['potato', 
'oil', 'cornflour', 'fillets', 'lemon', 'egg', 'mustard', 'oil', 'sauce', 'baby capers', 'corn', 'eschalot', 'chervil', 'parsley', 'chives', 'flour'], ['chicken', 'salad', 'tomato', 'cucumber', 'capsicum', 
'nuts', 'parmesan', 'vinegar', 'oil', 'mustard'], ['potato', 'oil', 'salt', 'paprika', 'butter', 'leek', 'peas', 'beef', 'garlic cloves', 'tomato', 'sauce', 'cream', 'parsley'], ['egg', 'butter', 'fetta', 'cheese', 
'toast', 'tomato', 'olives', 'onion', 'parsley', 'vinegar'],['tomato','egg','oil','salt']];

let course_name = ['Healthier chicken chow mein', '17-minute caesar salad', 'Swedish meatballs', 'Mexican zucchini slice', 'Vegan Japanese fried rice', 
'Quick 5-a-day carbonara', 'Cheesy beef goulash bake', 'Prawn cocktail pasta salad', 'Tuna mornay with crunchy chip topping', 'Ready-in-a-flash tuna pasta', 
'Comfort chicken curry', 'Smoked chicken waldorf salad', 'Chicken and chickpea tray bake', 'Pork san choy bau salad', 'Speedy tuna risotto', 
'Mongolian lamb stir-fry', '17-minute one-pan spaghetti bolognaise', 'Sweet and sour pork meatballs', 'All-in-one-pan beef stroganoff', 'Reuben sandwich', 
'Potato and pea frittata', 'Tomato rainbow pizza', 'Crispy creamy vegetarian casserole', 'Easy Greek chicken tray bake', 'Italian-style sausage pasta', 
'Cheesy potato bake slice', 'Best-ever chilli nachos', 'Quiche Lorraine', 'One-pan creamy chicken pesto pasta bake', 'Chicken, pea and sweet potato pot pies',
 "Easy shepherd's pie", 'Teriyaki chicken and noodle stir-fry', 'Muffin-pan fried rice cups', 'Mid-week lamb ragu', 'Chicken fajita stir-fry', 'Beef mince rice paper rolls', 
 'Quick chicken noodle salad', 'Giant cheesy chicken schnitzel', 'Spanakopita meatloaf', 'Vegan chilli con ‘carne’', 'Apricot chicken kebabs', 'Beef mince noodle stir-fry', 
 'Giant croque monsieur', 'Honey lemon chicken', 'Butter chicken', 'Roast pork spring rolls', 'Fish and chips with tartare sauce', 'Chicken Kyiv with rocket, capsicum and pine nut salad', 
 'Steak diane', 'Two-cheese omelette with tomato salad','Tomato and scrambled eggs'];

 let food = ['<p>Healthier chicken chow mein<div><image src = "images/1.jpg" width = 360><font class = "notice"><li>noodles</li><li>oil</li><li>powder</li><li>chicken</li><li>oil</li><li>ginger</li><li>garlic cloves</li><li>mushrooms</li><li>peas</li><li>chicken</li><li>soy sauce</li><li>oyster sauce</li><li>ke\
cap manis</li><li>beans</li><li>coriander</li><li>chilli</li><li>lime</li></font></p>', '<p>17-minute caesar salad<div><image src = "images/2.jpg" wid\
th = 360><font class = "notice"><li>prosciutto</li><li>sourdough bread</li><li>butter</li><li>avocado</li><li>egg</li><li>parmesan</li><li>Caesar sala\
d dressing</li><li>oil</li><li>fresh chives</li><li>salt</li></font></p>', '<p>Swedish meatballs<div><image src = "images/3.jpg" width = 360><font cla\
ss = "notice"><li>bread</li><li>cream</li><li>pork</li><li>beef</li><li>onion</li><li>egg</li><li>potato</li><li>allspice</li><li>oil</li><li>butter</\
li><li>flour</li><li>beef</li><li>sauce</li><li>Coles cranberry sauce</li><li>beans</li><li>potato</li><li>dill</li></font></p>', '<p>Mexican zucchini\
slice<div><image src = "images/4.jpg" width = 360><font class = "notice"><li>egg</li><li>Mexican spice</li><li>zucchini</li><li>carrot</li><li>green\
shallots</li><li>peas</li><li>flour</li><li>coriander</li><li>chedder cheese</li><li>avocado</li><li>tomato</li><li>Sriracha</li></font></p>', '<p>Veg\
an Japanese fried rice<div><image src = "images/5.jpg" width = 360><font class = "notice"><li>miso</li><li>cooking sake</li><li>tonkatsu sauce</li><li\
>oil</li><li>oil</li><li>onion</li><li>carrot</li><li>mushrooms</li><li>corn</li><li>rice</li><li>cabbage</li><li>edamame</li><li>ginger</li><li>seawe\
ed</li><li>onion</li><li>seeds</li></font></p>', '<p>Quick 5-a-day carbonara<div><image src = "images/6.jpg" width = 360><font class = "notice"><li>sp\
aghetti</li><li>oil</li><li>bacon</li><li>broccoli</li><li>asparagus</li><li>noodles</li><li>zucchini noodles</li><li>peas</li><li>egg</li><li>flour</\
li><li>parmesan</li><li>cream</li></font></p>', '<p>Cheesy beef goulash bake<div><image src = "images/7.jpg" width = 360><font class = "notice"><li>mi\
so</li><li>cooking sake</li><li>tonkatsu sauce</li><li>oil</li><li>oil</li><li>onion</li><li>carrot</li><li>mushrooms</li><li>corn</li><li>rice</li><l\
i>cabbage</li><li>edamame</li><li>ginger</li><li>seaweed</li><li>onion</li><li>seeds</li></font></p>', '<p>Prawn cocktail pasta salad<div><image src =\
"images/8.jpg" width = 360><font class = "notice"><li>pasta</li><li>prawns</li><li>cucumber</li><li>avocado</li><li>salad</li><li>chives</li><li>mint\
</li><li>dill</li><li>mayonnaise</li><li>tomato</li><li>lemon</li><li>sauce</li></font></p>', '<p>Tuna mornay with crunchy chip topping<div><image src\
= "images/9.jpg" width = 360><font class = "notice"><li>pasta</li><li>corn</li><li>butter</li><li>flour</li><li>milk</li><li>Tuna</li><li>cheddar</li\
><li>lemon</li><li>chips</li><li>parmesan</li><li>shallots</li></font></p>', '<p>Ready-in-a-flash tuna pasta<div><image src = "images/10.jpg" width =\
360><font class = "notice"><li>pasta</li><li>prawns</li><li>cucumber</li><li>avocado</li><li>salad</li><li>chives</li><li>mint</li><li>dill</li><li>ma\
yonnaise</li><li>tomato</li><li>lemon</li><li>sauce</li></font></p>', '<p>Comfort chicken curry<div><image src = "images/11.jpg" width = 360><font cla\
ss = "notice"><li>onion</li><li>garlic cloves</li><li>ginger</li><li>chilli</li><li>oil</li><li>curry</li><li>chicken</li><li>potato</li><li>stock</li\
><li>milk</li><li>rice</li><li>chilli</li></font></p>', '<p>Smoked chicken waldorf salad<div><image src = "images/12.jpg" width = 360><font class = "n\
otice"><li>pecans</li><li>chicken</li><li>avocado</li><li>apples</li><li>sticks</li><li>rocket leaves</li><li>mayonnaise</li><li>oil</li><li>vinegar</\
li><li>chives</li><li>honey</li><li>pepper</li></font></p>', '<p>Chicken and chickpea tray bake<div><image src = "images/13.jpg" width = 360><font cla\
ss = "notice"><li>chicken</li><li>chickpeas</li><li>seasoning</li><li>tomato</li><li>spinach</li></font></p>', '<p>Pork san choy bau salad<div><image\
src = "images/14.jpg" width = 360><font class = "notice"><li>oil</li><li>mushrooms</li><li>pork</li><li>garlic cloves</li><li>ginger</li><li>oyster sa\
uce</li><li>spinach</li><li>rice</li><li>lettuce</li><li>shallots</li><li>sunflower seeds</li><li>shallots</li><li>mayonnaise</li></font></p>', '<p>Sp\
eedy tuna risotto<div><image src = "images/15.jpg" width = 360><font class = "notice"><li>oil</li><li>onion</li><li>garlic cloves</li><li>rice</li><li\
>tomato</li><li>chicken</li><li>peas</li><li>parmesan</li><li>oil</li><li>basil</li></font></p>', '<p>Mongolian lamb stir-fry<div><image src = "images\
/16.jpg" width = 360><font class = "notice"><li>cornflour</li><li>sugar</li><li>garlic cloves</li><li>sauce</li><li>lamb</li><li>oil</li><li>onion</li\
><li>lengthways</li><li>broccoli</li><li>beans</li><li>cooking wine</li><li>onion</li><li>rice</li></font></p>', '<p>17-minute one-pan spaghetti bolog\
naise<div><image src = "images/17.jpg" width = 360><font class = "notice"><li>oil</li><li>pork</li><li>tomato</li><li>wine</li><li>pasta sauce</li><li\
>rosemary</li><li>stock</li><li>fettuccine</li><li>parsley</li><li>parmesan</li></font></p>', '<p>Sweet and sour pork meatballs<div><image src = "imag\
es/18.jpg" width = 360><font class = "notice"><li>bread</li><li>milk</li><li>pork</li><li>shallots</li><li>ginger</li><li>garlic cloves</li><li>cornfl\
our</li><li>egg</li><li>soy sauce</li><li>oil</li><li>onion</li><li>capsicum</li><li>capsicum</li><li>pineapple</li><li>tomato</li><li>vinegar</li><li\
>sugar</li><li>rice</li></font></p>', '<p>All-in-one-pan beef stroganoff<div><image src = "images/19.jpg" width = 360><font class = "notice"><li>oil</\
li><li>steak</li><li>onion</li><li>mushrooms</li><li>garlic cloves</li><li>paprika</li><li>sauce</li><li>tomato</li><li>beef</li><li>pasta</li><li>zuc\
chini</li><li>cream</li><li>parsley</li></font></p>', '<p>Reuben sandwich<div><image src = "images/20.jpg" width = 360><font class = "notice"><li>chee\
se</li><li>Pastrami</li><li>coleslaw</li><li>thousand island dressing</li></font></p>', '<p>Potato and pea frittata<div><image src = "images/21.jpg" w\
idth = 360><font class = "notice"><li>potato</li><li>peas</li><li>egg</li><li>cheese</li><li>salad</li></font></p>', '<p>Tomato rainbow pizza<div><ima\
ge src = "images/22.jpg" width = 360><font class = "notice"><li>yeast</li><li>honey</li><li>oil</li><li>flour</li><li>flakes</li><li>tomato</li><li>oi\
l</li><li>mozzarella</li><li>parmesan</li></font></p>', '<p>Crispy creamy vegetarian casserole<div><image src = "images/23.jpg" width = 360><font clas\
s = "notice"><li>oil</li><li>butter</li><li>leek</li><li>garlic cloves</li><li>potato</li><li>stock</li><li>broccoli</li><li>peas</li><li>asparagus</l\
i><li>fraiche</li><li>parsley</li><li>crackers</li><li>cheese</li></font></p>', '<p>Easy Greek chicken tray bake<div><image src = "images/24.jpg" widt\
h = 360><font class = "notice"><li>oil</li><li>chicken</li><li>capsicum</li><li>onion</li><li>garlic cloves</li><li>oregano</li><li>bay leaves</li><li\
>lemon</li><li>tomato</li><li>olives</li><li>fetta</li></font></p>', '<p>Italian-style sausage pasta<div><image src = "images/25.jpg" width = 360><fon\
t class = "notice"><li>fettuccine</li><li>Sausages</li><li>oil</li><li>parmesan</li><li>basil</li></font></p>', '<p>Cheesy potato bake slice<div><imag\
e src = "images/26.jpg" width = 360><font class = "notice"><li>butter</li><li>onion</li><li>flour</li><li>milk</li><li>cream</li><li>potato</li><li>gr\
uyèrea</li><li>parsley</li></font></p>', '<p>Best-ever chilli nachos<div><image src = "images/27.jpg" width = 360><font class = "notice"><li>oil</li>\
<li>onion</li><li>garlic cloves</li><li>cumin</li><li>coriander</li><li>paprika</li><li>beef</li><li>chipotle</li><li>beans</li><li>lime</li><li>coria\
nder</li><li>corn</li><li>cheese</li><li>pepper</li><li>cream</li><li>avocado</li><li>tomato</li><li>chilli</li></font></p>', '<p>Quiche Lorraine<div>\
<image src = "images/28.jpg" width = 360><font class = "notice"><li>flour</li><li>butter</li><li>egg</li><li>onion</li><li>bacon</li><li>cheese</li><l\
i>cream</li><li>salad</li></font></p>', '<p>One-pan creamy chicken pesto pasta bake<div><image src = "images/29.jpg" width = 360><font class = "notice\
"><li>oil</li><li>onion</li><li>chicken breast</li><li>garlic cloves</li><li>chicken</li><li>pasta</li><li>Pistachios</li><li>basil</li><li>parsley</l\
i><li>lemon</li><li>cream</li><li>broccoli</li><li>spinach</li><li>cheese</li></font></p>', '<p>Chicken, pea and sweet potato pot pies<div><image src\
= "images/30.jpg" width = 360><font class = "notice"><li>oil</li><li>chicken Thigh</li><li>leek</li><li>garlic cloves</li><li>thyme</li><li>potato</li\
><li>sauce</li><li>peas</li><li>pastry</li><li>egg</li><li>thyme</li></font></p>', '<p>Easy shepherd\'s pie<div><image src = "images/31.jpg" width = 3\
60><font class = "notice"><li>oil</li><li>onion</li><li>garlic cloves</li><li>carrot</li><li>celery</li><li>rosemary</li><li>lamb</li><li>flour</li><l\
i>sauce</li><li>tomato</li><li>beef</li><li>potato</li><li>milk</li><li>butter</li></font></p>', '<p>Teriyaki chicken and noodle stir-fry<div><image s\
rc = "images/32.jpg" width = 360><font class = "notice"><li>sauce</li><li>vinegar</li><li>oil</li><li>sugar</li><li>chicken</li><li>noodles</li><li>oi\
l</li><li>onion</li><li>sesame</li><li>pak choy</li></font></p>', '<p>Muffin-pan fried rice cups<div><image src = "images/33.jpg" width = 360><font cl\
ass = "notice"><li>rice</li><li>oil</li><li>onion</li><li>bacon</li><li>wonton</li><li>peas</li><li>corn</li><li>sauce</li><li>egg</li></font></p>', '\
<p>Mid-week lamb ragu<div><image src = "images/34.jpg" width = 360><font class = "notice"><li>carrot</li><li>onion</li><li>celery</li><li>garlic clove\
s</li><li>oil</li><li>lamb</li><li>bay leaves</li><li>wine</li><li>tomato</li><li>sugar</li><li>pasta</li><li>parmesan</li><li>herbs</li></font></p>',
'<p>Chicken fajita stir-fry<div><image src = "images/35.jpg" width = 360><font class = "notice"><li>oil</li><li>chicken</li><li>onion</li><li>capsicu\
m</li><li>capsicum</li><li>corn</li><li>fajita</li><li>chipotle</li><li>sauce</li><li>beans</li><li>avocado</li><li>Tortilla</li></font></p>', '<p>Bee\
f mince rice paper rolls<div><image src = "images/36.jpg" width = 360><font class = "notice"><li>oil</li><li>garlic cloves</li><li>beef</li><li>sugar<\
/li><li>fish</li><li>pepper</li><li>noodles</li><li>rice</li><li>coleslaw</li><li>mint</li><li>chilli</li><li>sauce</li></font></p>', '<p>Quick chicke\
n noodle salad<div><image src = "images/37.jpg" width = 360><font class = "notice"><li>noodles</li><li>lime</li><li>oil</li><li>chilli</li><li>sauce</\
li><li>butter</li><li>chicken</li><li>carrot</li><li>cabbage</li><li>onion</li></font></p>', '<p>Giant cheesy chicken schnitzel<div><image src = "imag\
es/38.jpg" width = 360><font class = "notice"><li>chicken</li><li>cheddar</li><li>flour</li><li>egg</li><li>Schnitzel</li><li>parmesan</li><li>oil</li\
><li>lettuce</li><li>tomato</li><li>cucumber</li><li>dressing</li><li>lemon</li></font></p>', '<p>Spanakopita meatloaf<div><image src = "images/39.jpg\
" width = 360><font class = "notice"><li>spinach</li><li>chicken</li><li>bread</li><li>onion</li><li>garlic cloves</li><li>egg</li><li>dill</li><li>le\
mon</li><li>fetta</li><li>cheese</li><li>pastry</li><li>butter</li><li>yoghurt</li><li>salad</li></font></p>', '<p>Vegan chilli con ‘carne’<div><image\
src = "images/40.jpg" width = 360><font class = "notice"><li>oil</li><li>onion</li><li>mushrooms</li><li>capsicum</li><li>garlic cloves</li><li>papri\
ka</li><li>cumin</li><li>coriander</li><li>oregano</li><li>tomato</li><li>potato</li><li>zucchini</li><li>beans</li><li>corn</li><li>avocado</li><li>c\
hilli</li><li>coriander</li><li>lime</li></font></p>', '<p>Apricot chicken kebabs<div><image src = "images/41.jpg" width = 360><font class = "notice">\
<li>chicken</li><li>apricots</li><li>asparagus</li></font></p>', '<p>Beef mince noodle stir-fry<div><image src = "images/42.jpg" width = 360><font cla\
ss = "notice"><li>plum</li><li>sauce</li><li>oyster sauce</li><li>sesame</li><li>garlic cloves</li><li>ginger</li><li>oil</li><li>beans</li><li>carrot\
</li><li>beef</li><li>onion</li><li>noodles</li><li>chilli</li></font></p>', '<p>Giant croque monsieur<div><image src = "images/43.jpg" width = 360><f\
ont class = "notice"><li>butter</li><li>flour</li><li>milk</li><li>garlic cloves</li><li>bay leaves</li><li>ciabatta</li><li>mustard</li><li>ham</li><\
li>cheddar</li><li>salad</li></font></p>', '<p>Honey lemon chicken<div><image src = "images/44.jpg" width = 360><font class = "notice"><li>oil</li><li\
>chicken</li><li>honey</li><li>lemon</li><li>kecap manis</li><li>carrot</li><li>pak choy</li><li>rice</li></font></p>', '<p>Butter chicken<div><image\
src = "images/45.jpg" width = 360><font class = "notice"><li>yoghurt</li><li>lime</li><li>turmeric</li><li>garam</li><li>chilli</li><li>cumin</li><li>\
garlic cloves</li><li>ginger</li><li>chicken</li><li>cashews</li><li>butter</li><li>oil</li><li>onion</li><li>cardamom</li><li>cinnamon</li><li>bay le\
aves</li><li>paprika</li><li>tomato</li><li>chicken</li><li>cream</li><li>rice</li><li>coriander</li></font></p>', '<p>Roast pork spring rolls<div><im\
age src = "images/46.jpg" width = 360><font class = "notice"><li>noodles</li><li>oil</li><li>onion</li><li>garlic cloves</li><li>ginger</li><li>carrot\
</li><li>cabbage</li><li>sauce</li><li>pork</li><li>chilli</li></font></p>', '<p>Fish and chips with tartare sauce<div><image src = "images/47.jpg" wi\
dth = 360><font class = "notice"><li>potato</li><li>oil</li><li>cornflour</li><li>fillets</li><li>lemon</li><li>egg</li><li>mustard</li><li>oil</li><l\
i>sauce</li><li>baby capers</li><li>corn</li><li>eschalot</li><li>chervil</li><li>parsley</li><li>chives</li><li>flour</li></font></p>', '<p>Chicken K\
yiv with rocket, capsicum and pine nut salad<div><image src = "images/48.jpg" width = 360><font class = "notice"><li>chicken</li><li>salad</li><li>tom\
ato</li><li>cucumber</li><li>capsicum</li><li>nuts</li><li>parmesan</li><li>vinegar</li><li>oil</li><li>mustard</li></font></p>', '<p>Steak diane<div>\
<image src = "images/49.jpg" width = 360><font class = "notice"><li>potato</li><li>oil</li><li>salt</li><li>paprika</li><li>butter</li><li>leek</li><l\
i>peas</li><li>beef</li><li>garlic cloves</li><li>tomato</li><li>sauce</li><li>cream</li><li>parsley</li></font></p>', '<p>Two-cheese omelette with to\
mato salad<div><image src = "images/50.jpg" width = 360><font class = "notice"><li>egg</li><li>butter</li><li>fetta</li><li>cheese</li><li>toast</li><\
li>tomato</li><li>olives</li><li>onion</li><li>parsley</li><li>vinegar</li></font></p>', '<p>Tomato and scrambled eggs<div><image src = "images/51.jpg" width = 360><font class = "notice"><li>tomato</li><li>egg</li><li>oil</li><li>salt</li></font></p>'];

 function findRecipe() { //ingredient index list
  let ingredient_list = Array.from(lst)
  ingredient_list = ingredient_list.map(function(number){
    return ingredient[number];
  });
  const match_num_list = [];
  for (let i = 0; i < ingredient_name.length; i++) {
    let match = 0;
    for (const j of ingredient_list) {
      if (ingredient_name[i].includes(j)) {
        match++;
      }
    }
    match_num_list.push([
      (match / ingredient_name[i].length + match / ingredient_list.length),
      food[i],
      match / ingredient_name[i].length
    ]);
  }
  match_num_list.sort((a, b, c) => b[0] - a[0]);
  const res = [];
  for (const i of match_num_list.slice(0, 5)) {
    const [a, b, c] = i;
    if (c >= 0.25) {
      res.push(b);
    }
  }
  
  return res
}