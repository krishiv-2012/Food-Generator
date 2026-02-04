const snacks = [
  "Pasta", "Fries", "Upma", "Fried Idli", "Maggie", "Frankie",
  "Sandwich", "Parathe", "Salad", "Fruits", "Idli Sambar"
];

const lunch = [
  "Noodles", "Fried Rice", "Dal with Rice", "Curd Rice", "Dosa",
  "Burger", "Kadhi Chawal", "Rajma Chawal", "Pav Bhaji"
];

const sabzi = [
  "Aloo Gobi", "Paneer Butter Masala", "Bhindi", "Mix Veg", "Chole"
];

function spin(category) {
  let items = [];

  if (category === "snacks") items = snacks;
  else if (category === "lunch") items = lunch;
  else if (category === "sabzi") items = sabzi;
  else {
    document.getElementById("result").innerText = "❌ Unknown category";
    return;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  const food = items[randomIndex];

  document.getElementById("result").innerText =
    "🎡 Result: " + food;
}
