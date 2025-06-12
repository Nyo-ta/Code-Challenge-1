function calculateChaiIngredients(){
    const input = prompt("Enter number of cups of chai");
    const numberOfCups = Number(input)
// standard amount for each cup multiplied by the number of cups input 
    const water = 200 * numberOfCups
    const milk = 50 *numberOfCups
    const teaLeaves = 1 * numberOfCups
    const sugar = 2 * numberOfCups
    //result of output
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}    