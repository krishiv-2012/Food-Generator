const snacks = [
    "Pasta", "Fries", "Upma", "Fried Idli", "sandwich", "Maggie", "Frankie", "Sandwich", "fries", "Parathe", "Upma","Salad", "Fruits", "Idli Sambar", "Sandwich", 
];
const lunch = [ 
    "Noodles", "Sandwich", "Fried Rice", "Dal with rice", "frankie", "Curd Rice", "Dosa", "Burger", "Idli Sambar", "Kadhi Chawal", "Rajma Chawal", "Pav Bhaji "
];
const sabzi = [
  "Aloo Gobi", "Paneer Butter Masala", "Bhindi", "Mix Veg", "Chole"
];

function spin(category) {
  let items;

  if (category === "snacks") {
    items = snacks;
  } else if (category === "lunch") {
    items = lunch;
  } else if (category === "sabzi") {
    items = sabzi;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  document.getElementById("result").innerText =
    "🎡 Result: " + items[randomIndex];
}
