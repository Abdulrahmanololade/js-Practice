// let phoneBrand = ['Samsung', 'Iphone', 'Pixel', 'Nothing', 'Xiaomi', 'Techno']

// document.getElementById("demo1").innerHTML = phoneBrand;

// document.getElementById("demo2").innerHTML = phoneBrand[2];



// const phone = {
//     brandName: 'Iphonex',
//     color: 'Golden',
//     owner: 'Muri',
// }

// document.getElementById("demo3").innerHTML = phone.owner +' ' + 'is the owner of the' + ' ' + phone.brandName + ' ' + 'that was stolen';



// const person = {
//     firstName: 'Raji',
//     lastName: 'Murtadho',
//     gender: ' mf Gay',
//     alert:function(){
//         return this.firstName + ' ' + this.lastName
// }
//     city: 'Lagos',
// }





// number 1
const person = {
    firstName: "Grace",
    lastName: "Ajayi",
    alert:function(){
        return this.lastName
    }
};
 alert(person.alert());


// number 2

const person1 = {
    firstName: "Olumide",
    lastName: "Atere",
    country: "Nigeria",
}

document.getElementById("demo1").innerHTML = person1.firstName + ' ' + person1.lastName + ' ' + ' is from' + ' ' + person1.country

// number 3

const person2 = {
    name: "John",
    age: 50,
}

document.getElementById("demo2").innerHTML = 'age =' + ' ' + person2.age

// number 4

const cars = ['Saab', 'Volvo', 'BMW'];

document.getElementById("demo3").innerHTML = cars[1];

// number 5

const car = ["Volvo", "Jeep", "Mercedes"]

alert(car.length )




const parameters = {
    userid: "your registered number",
    pass: "xyFfj4%djf@22",
    phone: "+2349064390415",
    user_ref: "user defined reference",
    network: ""
}


function displayApiLink() {
    const ApiLink = "#"

    let userid = 'Omotayo';
    let pass = 'iuvhsvi';
    let network = '10';
    let phone = '09150821405';
    let user_ref = 'optional';
    let amount = '1000';

    ApiLink = ApiLink.replace ("#", userid)    
    ApiLink = ApiLink.replace ("#", pass)    
    ApiLink = ApiLink.replace ("#", network)    
    ApiLink = ApiLink.replace ("#", phone)    
    ApiLink = ApiLink.replace ("#", user_ref)    
    ApiLink = ApiLink.replace ("#", amount0)    

}