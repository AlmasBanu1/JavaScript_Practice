let cities = [

    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai"

];

let cityFound = cities.includes("Bangalore");
if(cityFound){
    console.log("City Found");         // true
}else{
    console.log("City Not Found");     // false
}