import burger from "../assets/images/burger.jpg"
import chicken_fries from "../assets/images/chicken_fries.png"
import pancake from "../assets/images/pancake.png"
import pasta from "../assets/images/pasta.png"
import pizza from "../assets/images/pizza.png"
import waffle from "../assets/images/waffle.png"
import cakes from "../assets/images/cakes.png"
import noodles from "../assets/images/noodles.png"

import authentic_pad_thai from "../assets/images/authentic_pad_thai.jpg"
import beef_tacos from "../assets/images/beef_tacos.jfif"
import butter_chicken from "../assets/images/butter_chicken.jfif"
import caesar_salad from "../assets/images/caesar_salad.jfif"
import Chicken_Tikka_Masala from "../assets/images/Chicken_Tikka_Masala.jpg"
import choco_lava_cake from "../assets/images/choco_lava_cake.jfif"
import dim_sum_platter from "../assets/images/dim_sum_platter.jpg"
import falafel_wrap from "../assets/images/falafel_wrap.jfif"
import fish_chips from "../assets/images/fish_chips.jfif"
import greek_salad from "../assets/images/greek_salad.jfif"
import penne_arabiata from "../assets/images/penne_arabiata.jfif"
import pho from "../assets/images/pho.jfif"
import sushi_platter from "../assets/images/sushi_platter.jfif"
import margheretta_pizza from "../assets/images/margheretta_pizza.jpg"
import Spaghetti_Carbonara from "../assets/images/Spaghetti_Carbonara.jpg"
import pancake_3 from "../assets/images/pancake_3.jfif"
import pancake_4 from "../assets/images/pancake_4.jfif"
import Pancake_2 from "../assets/images/Pancake_2.jpg"
import creamy from "../assets/images/creamy.webp"
import skillet_chicken from "../assets/images/skillet_chicken.webp"
import red_sauce from "../assets/images/red_sauce.jfif"
import noodles_3 from "../assets/images/noodles_3.webp"
import red_velvet  from "../assets/images/red_velvet.jfif"
import black_forest from "../assets/images/black_forest.webp"
import bacon_burger from "../assets/images/bacon_burger.jfif"
import chicken_burger from "../assets/images/chicken_burger.jfif"
import smash_burger from "../assets/images/smash_burger.jpg"
import waffles_2 from "../assets/images/waffles_2.jfif"
import belgian_waffle from "../assets/images/belgian_waffle.jfif"
import blueWaffle from "../assets/images/blueWaffle.jpg"
import pepperoni from "../assets/images/pepperoni.jfif"
import mozzarella from "../assets/images/mozzarella.jpg"
import salad_2 from "../assets/images/salad_2.jfif"
import profile_pic from "../assets/images/profile_pic.webp"
import log_out from "../assets/images/log_out.webp";
import shop_bag from "../assets/images/shop_bag.webp"
import Parcel from "../assets/images/Parcel.png"




 export const menu_list=[
    {
        menu_name: "Burgers",
        menu_image: burger
    },
    {
        menu_name: "Chicken-Fries",
        menu_image: chicken_fries
    },
    {
        menu_name: "Pancakes",
        menu_image:pancake
    },
    {
        menu_name: "Pastas",
        menu_image: pasta
    },
    {
        menu_name: "Pizzas",
        menu_image: pizza
    },
    {
        menu_name: "Waffles",
        menu_image: waffle
    },
    {
        menu_name: "Cakes",
        menu_image: cakes
    },
    {
        menu_name: "Noodles",
        menu_image: noodles
    },
]

export const food_list = [
    {
      _id: 1,

quantity : 0,      name: 'Margheretta Pizza',
      image: margheretta_pizza,
      price: '399',
      description: 'A classic pizza topped with fresh mozzarella, tomatoes, and basil leaves.',
      category: 'Pizzas'
    },
    {
      _id: 2,

quantity : 0,      name: 'Chicken Tikka Masala',
      image: Chicken_Tikka_Masala,
      price: '499',
      description: 'Grilled chicken simmered in a rich tomato-based curry with Indian spices.',
      category: 'Chicken-Fries'
    },
    {
      _id: 3,

quantity : 0,      name: 'Sushi Platter',
      image: sushi_platter,
      price: '999',
      description: 'An assortment of fresh sushi, including nigiri, sashimi, and rolls.',
      category: 'Japanese'
    },
    {
      _id: 4,

quantity : 0,      name: 'Caesar Salad',
      image: caesar_salad,
      price: '299',
      description: 'Crisp romaine lettuce, croutons, and Parmesan cheese, tossed in Caesar dressing.',
      category: 'Salad'
    },
    {
      _id: 5,

quantity : 0,      name: 'Pad Thai',
      image: authentic_pad_thai ,
      price: '349',
      description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and a tangy tamarind sauce.',
      category: 'Noodles'
    },
    {
      _id: 6,

quantity : 0,      name: 'Beef Tacos',
      image: beef_tacos,
      price: '279',
      description: 'Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.',
      category: 'Mexican'
    },
    {
      _id: 7,

quantity : 0,      name: 'Pho',
      image: pho,
      price: '599',
      description: 'A traditional Vietnamese soup with rice noodles, beef, herbs, and broth.',
      category: 'Pasta'
    },
    {
      _id: 8,

quantity : 0,      name: 'Chocolate Lava Cake',
      image: choco_lava_cake,
      price: '199',
      description: 'A warm, gooey chocolate cake with a molten center, served with vanilla ice cream.',
      category: 'Cakes'
    },
    {
        _id: 9,

        quantity : 0,
        name: 'Butter Chicken',
        image: butter_chicken,
        price: '549',
        description: 'A creamy tomato-based curry with tender pieces of chicken, served with naan.',
        category: 'Chicken-Fries'
      },
      {
        _id: 10,
        quantity : 0,
        name: 'Falafel Wrap',
        image: falafel_wrap,
        price: '249',
        description: 'Crispy falafel balls wrapped in pita bread with lettuce, tomato, and tahini sauce.',
        category: 'Middle Eastern'
      },
      {
        _id: 11,
        quantity : 0,
        name: 'Spaghetti Carbonara',
        image: Spaghetti_Carbonara,
        price: '399',
        description: 'Classic Italian pasta with pancetta, egg, Parmesan, and black pepper.',
        category: 'Noodles'
      },
      {
        _id: 12,
        quantity : 0,
        name: 'Fish and Chips',
        image: fish_chips,
        price: '349',
        description: 'Crispy battered fish fillets served with golden fries and tartar sauce.',
        category: 'British'
      },
      {
        _id: 13,
        quantity : 0,
        name: 'Dim Sum Platter',
        image: dim_sum_platter,
        price: '599',
        description: 'An assortment of steamed dumplings with various fillings, served with dipping sauces.',
        category: 'Chinese'
      },
      {
        _id: 14,
        quantity : 0,
        name: 'Greek Salad',
        image: greek_salad,
        price: '249',
        description: 'A refreshing salad with cucumber, tomatoes, olives, feta cheese, and olive oil.',
        category: 'Salad'
      },
      {
        _id: 15,
        quantity : 0,
        name: 'Penne Arrabbiata',
        image: penne_arabiata,
        price: '349',
        description: 'Penne pasta tossed in a spicy tomato sauce with garlic and red chili flakes.',
        category: 'Chicken-Fries'
      },
      {
        _id: 16,
        quantity : 0,
        name: 'Banana Pancakes',
        image: pancake_3,
        price: '249',
        description: 'Fluffy pancakes filled with fresh bananas, served with a drizzle of maple syrup.',
        category: 'Pancakes'
      },
      {
        _id: 17,
        quantity : 0,
        name: 'Chocolate-Pancakes',
        image: pancake_4,
        price: '229',
        description: 'Pancakes infused with chocolate and a hint of cinnamon, topped with honey.',
        category: 'Pancakes'
      },
      {
        _id: 18,
        quantity : 0,
        name: 'Berry-Pancakes',
        image: Pancake_2, 
        price: '269',
        description: 'Pancakes loaded with Cherries, served with whipped cream and chocolate syrup.',
        category: 'Pancakes'

      },
      {
        _id: 19,
        quantity : 0,
        name: 'Red-Sauce-Pasta',
        image: red_sauce, 
        price: '449',
        description: 'Creamy Alfredo sauce served over tender fettuccine noodles, topped with Parmesan cheese.',
        category: 'Pastas'
      },
      {_id: 20,
      name: 'Skillet-Chicken',
      image: skillet_chicken, 
      price: '499',
      description: 'Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection with melted cheese.',
      category: 'Pastas'
      },
      {
        _id: 21,
        quantity : 0,
        name: 'Creamy-Pasta',
        image: creamy, 
        price: '399',
        description: 'Pasta tossed in a vibrant basil pesto sauce, garnished with pine nuts and Parmesan.',
        category: 'Pastas'
      },
      {
        _id: 22,
        quantity : 0,
        name: 'Creamy-Pasta',
        image: noodles_3, 
        price: '199',
        description: 'Noodles tossed in a vibrant basil pesto sauce, garnished with pine nuts and Parmesan.',
        category: 'Noodles'
      },
      {
        _id: 23,
        quantity : 0,
        name: 'Red Velvet Cake',
        image:red_velvet ,
        price: '299',
        description: 'A rich and moist red velvet cake with layers of cream cheese frosting.',
        category: 'Cakes'
      },
      {
        _id: 24,
        quantity : 0,
        name: 'Black Forest Cake',
        image: black_forest, 
        price: '349',
        description: 'A decadent chocolate cake layered with cherries, whipped cream, and chocolate shavings.',
        category: 'Cakes'
      },
      {
        _id: 25,
        quantity : 0,
        name: 'Chicken Burger',
        image: chicken_burger, 
        price: '199',
        description: 'A juicy chicken patty with lettuce, tomato, and mayo in a toasted bun.',
        category: 'Burgers'
      },
      {
        _id: 26,
        quantity : 0,
        name: 'Bacon Burger',
        image: bacon_burger, 
        price: '249',
        description: 'A beef patty topped with crispy bacon, cheddar cheese, and BBQ sauce.',
        category: 'Burgers'
      },
      {
        _id: 27,
        quantity : 0,
        name: 'Smash Burger',
        image: smash_burger, 
        price: '229',
        description: 'A smashed beef patty with caramelized onions, pickles, and special sauce in a soft bun.',
        category: 'Burgers'
      },
      {
        _id: 28,
        quantity : 0,
        name: 'Blueberry Waffle',
        image: blueWaffle, 
        price: '179',
        description: 'A crispy waffle topped with fresh blueberries and whipped cream.',
        category: 'Waffles'
      },
      {
        _id: 29,
        quantity : 0,
        name: 'Belgian Waffle',
        image: belgian_waffle, 
        price: '199',
        description: 'A classic Belgian waffle served with maple syrup and butter.',
        category: 'Waffles'
      },
      {
        _id: 30,
        quantity : 0,
        name: 'Chocolate Waffle',
        image: waffles_2,
        price: '199',
        description: 'A delicious waffle drizzled with chocolate sauce and topped with chocolate chips.',
        category: 'Waffles'
      },
      {
        _id: 31,
        quantity : 0,
        name: 'Pepperoni Pizza',
        image: pepperoni, 
        price: '399',
        description: 'A classic pizza topped with pepperoni slices and mozzarella cheese.',
        category: 'Pizzas'
      },
      {
        _id: 32,
        quantity : 0,
        name: 'Mozzarella Pizza',
        image: mozzarella, 
        price: '359',
        description: 'A delicious pizza topped with fresh mozzarella cheese and basil.',
        category: 'Pizzas'
      },
      {
        _id: 33,
        quantity : 0,
        name: 'Salad',
        image: salad_2, 
        price: '129',
        description: 'A green punch for your light apettite so that you stick to your diet',
        category: 'Salad'
      }
      
  ];
  

  export const assets={
    profile_pic,
    shop_bag,
    log_out,
    Parcel
  }