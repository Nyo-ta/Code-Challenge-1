function calculateBodaFare(){
    const baseFare = 50
    const chargePerKilometer = 15;
    const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    const distanceInKm = Number(input)
    //total amount formula 
    const totalFare = baseFare + (distanceInKm * chargePerKilometer);
    //output of the results
    console.log(`Uko kwote? Io ni ${distanceInKm}km`)
    console.log(`Ukikalia Pikipiki:KES${baseFare}`)
    console.log(`total itakuja KES${totalFare}`);
    console.log("kalia twende mkubwa!");
}