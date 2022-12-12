///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
require("dotenv").config()
const mongoose = require("./connection")
const Menu = require("./menu")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// Make sure code is not run till connected
mongoose.connection.on("open", () => {

//seed code

    // array of starter fruits
    const startMenu = [
          { name: "Beef Wellington", image:"https://blog.atlantisthepalm.com/wp-content/uploads/2020/05/gordon-ramsay-beef-wellington-recipe-atlantis-dubai.jpg", price: 34, description:"Fillet steak with mushroom pate, wrapped in puff pastry. Served with a generous heap of idaho potato and rainbow carrots.", allergens: "dairy, egg"  },
          { name: "Mushroom Risotto", image:"https://www.simplyrecipes.com/thmb/SRAi5Uh_AGNgq84stLgXlpcmrOw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mushroom-Risotto-LEAD-8-97bfe04179ac417e9599d9f30d6cc801.JPG", price: 26, description:"Seriously creamy and delicious truffle mushroom risotto features dried porcini mushrooms and is finished with truffle oil.", allergens: "dairy, egg"  },
          { name: "Duck Confit", image:"https://assets.bonappetit.com/photos/57ad30531b33404414975499/4:3/w_1999,h_1499,c_limit/glazed-duck-confit-with-olive-relish-and-sauce-verte.jpg", price: 32, description:"The most succulent and juicy duck confit ever. Go duck yourself if you don't think this is yummy.", allergens: "none"  },
          { name: "Snails", image:"https://snippetsofparis.com/wp-content/uploads/2020/05/IMG_0551-escargots.jpg", price: 16, description:"Hey you. Do you want to save the world from global warming? How about starting by eating snails.", allergens: "snail mucus"  },
          { name: "Miso Crusted Salmon", image:"https://healthyfitnessmeals.com/wp-content/uploads/2022/01/Miso-Glazed-Salmon-4.jpg", price: 29, description:"Having digestion issues and flatulence? No fret. This miso salmon will help you with your vacation constipation while put a smile on your face.", allergens: "none"},
          { name: "Vegan Foie Gras", image:"https://www.seriouseats.com/thmb/fTwamcK-Doqv4_w3Y_GCiLlntRo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__12__20121213-seared-foie-food-lab-16-e9ba8e93076e4ed6ae8e97c5c716efc4.jpg", price: 28, description:"Craving the richness of fatty duck liver but doesn't want to torture ducks? We got you. Our duck liver is made of mysterious blend of mushrooms, tofu and herbs ensure to satiate your cravings for foie gras. Comes with a side of strawberry rhubarb sauce and fresh basket of baguette to teleport you to the French country side.", allergens: "none"  }
        ]

    
    // Delete all fruits
    Menu.deleteMany({}, (err, data) => {
        // Seed Starter Fruits
        Menu.create(startMenu,(err, data) => {
            // send created fruits as response to confirm creation
            console.log(data);
          }
        );
      });
})