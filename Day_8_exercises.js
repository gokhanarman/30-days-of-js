// LEVEL-1
// 1. Create an empty object called dog
///const dog ={}

// 2. Print the the dog object on the console
///console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog ={
    name : 'Johnyy',
    legs : 'tall',
    color : 'gold',
    age : 2,
    bark_properties() {
        return woof_woof
    }
}
console.log(dog)

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark_properties)

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'golden'
dog.getDogInfo = function() {
    let name1 = this.name
    let legs1 = this.legs
    let color1 = this.color
    let age1 = this.age
}

console.log(dog)
console.log(dog.getDogInfo)

// LEVEL-2
/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
// 1. Find the person who has many skills in the users object.
const skillsLengthArray = [] 
for (let val in users){     
    if (typeof users[val] === "object"){          
        skillsLengthArray.push(users[val].skills.length)
    }
}
let maxSkillsLength = Math.max.apply(null, skillsLengthArray);
let whichIndex = skillsLengthArray.indexOf(maxSkillsLength)
let keysOfUsers = Object.keys(users)
let userOfMostSkills = keysOfUsers[whichIndex]
console.log(`${userOfMostSkills} have most skills in users with ${maxSkillsLength} skills`)

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
const isLoggedInArray = []
const pointsArray = []
for(let val in users){
    if(typeof users[val] === 'object'){
        pointsArray.push(users[val].points)
    }
}
let counts = 0
console.log(pointsArray)
for(let i = 0;i<pointsArray.length;i++){
    if(pointsArray[i] == 50){
        counts = counts + 1
    }
}

for(let i in users){
    if (typeof users[i] === "object"){
        isLoggedInArray.push(users[i].isLoggedIn)
    }
}
console.log(isLoggedInArray)
let loggedInCounts = 0
for(let i = 0; i < isLoggedInArray.length;i++){
    if(isLoggedInArray[i] === true){       
        loggedInCounts = loggedInCounts + 1
    }
}
console.log(`${counts} adet 50 puanli kullanici vardir ve ${pointsArray.length} adet toplam kullanici vardir. Bu kullanicilardan ${loggedInCounts} kadar kullanici giris yapmistir.`)

// 3. Find people who are MERN stack developer from the users object
const mernStacks = ['Express', 'MongoDB', 'Node', 'React']
const skillsArray = []

for(let val in users){
    if (typeof users[val] === "object"){          
        skillsArray.push(users[val].skills)
    }
}

let indexForUsers = []
for(let i = 0;i<skillsArray.length;i++){   
    let mernCount = 0    
    for(let j = 0; j<mernStacks.length;j++){
        if(skillsArray[i].includes(mernStacks[j]) == true){
            mernCount = mernCount + 1
            if(mernCount == 4){
                console.log(skillsArray[i],i)
                indexForUsers.push(i)

            }
        }
    }
}
let keysUsers = Object.keys(users)
let mernStacksDevelopers = ''
for(let k = 0;k<indexForUsers.length;k++){
    mernStacksDevelopers += keysUsers[indexForUsers[k]]   
    if(k != indexForUsers.length - 1){
        mernStacksDevelopers += ' and '
    }

}
console.log('MERN Stack Developers:', mernStacksDevelopers)

// 4. Set your name in the users object without modifying the original users object
let newUsers = Object.assign({}, users)
const myInfos = {
    email: 'gokhanarman89@gmail.com',
    skills: ['JavaScript', 'Python', 'Machine Learning', 'Image Processing'],
    age: 33,
    isLoggedIn: false,
    points: 40
}  
newUsers.Gokhan = myInfos
console.log(newUsers)
console.log(users)

// 5. Get all keys or properties of users object
let firstKeys = Object.keys(users)
let keysOfUsersWithFor = []
const secondKeys = []
const thirdKeys = []

for (let val in users){
    secondKeys.push(users[val])
    keysOfUsersWithFor.push(val)
    
}
console.log("This is object keys:", keysOfUsersWithFor)
console.log("Properties", secondKeys)
for(let i = 0;i < secondKeys.length;i++){
    thirdKeys.push(Object.keys(secondKeys[i]))
}
console.log("This is keys of properties", thirdKeys)



// 6. Get all the values of users object
const forthValues = []

for(let i = 0; i < secondKeys.length;i++){
    forthValues.push(Object.values(secondKeys[i]))
}
console.log("This is values of properties", forthValues)

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = {}
countries.countryName = 'Germany'
countries.capital = 'Berlin'
countries.populations = 815000000
countries.languages = 'German'

console.log(countries)
*/

// LEVEL-3
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//    Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName : 'Gökhan',
    lastName : 'Arman',
    incomes : {
        totalIncome : 10000,        
        addIncome : 2000,
    },
    expenses : {
        totalExpense : 8000,
        addExpense : 1000
    }
}

// 2. Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

function signUp(username1,email1,password1){   
let usersLength = users.length
const usernameArray = []
const emailArray = []
for (let i = 0;i < usersLength;i++){
    usernameArray.push(users[i].username)
    emailArray.push(users[i].email)
}
console.log(usernameArray)
console.log("email:",emailArray)
console.log(username1)

object = {
    _id: '',
    username: '',
    email: '',
    password: '',
    createdAt:'',
    isLoggedIn: false
}

result = '';
let characters ='abcdefghijklmnopqrstuvwxyz0123456789';
for(let i = 0;i < 6;i++){
    let randomNumber = Math.floor(Math.random() * characters.length)        
    result += characters.charAt(randomNumber)
}
let _id1 = result

const now = new Date()
let day = now.getDate()
let month = now.getMonth()
let year = now.getFullYear()
let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()

day < 10 ? day = '0'+ day : day = day
month < 10 ? month = '0' + month : month = month
hour < 10 ? hour = '0' + hour : hour = hour
minute < 10 ? minute = '0' + minute : minute = minute
second < 10 ? second = '0' + second : second = second
let humanableCalender = day + '/' + month + '/' + year + ' ' + hour + ':' + minute

let binary = '01'
binaryResult = ''
for(let i = 0; i < 1; i++){
    let randomNumber2 = Math.floor(Math.random() * binary.length)
    binaryResult += binary.charAt(randomNumber2)
}
if(binaryResult == '0'){
    isLoggedIn1 = false
}else{
    isLoggedIn1 = true
}
object._id = _id1
object.username = username1
object.email = email1
object.password = password1
object.createdAt = humanableCalender
object.isLoggedIn = isLoggedIn1

let pushla = true
let countsOfUsernameAndEmails = 0
for(let i = 0;i < usernameArray.length;i++){
    if(usernameArray[i] != username1 && emailArray[i] != email1){
        countsOfUsernameAndEmails = countsOfUsernameAndEmails + 1       
    }
}
if(users.length == countsOfUsernameAndEmails){
    users.push(object)
}

}
signUp('ggarman','gokhanarman89@gmail.com',121212)
signUp('ggarman2','gokhanarmanpr@gmail.com',131313)
console.log(users)

// b. Create a function called signIn which allows user to sign in to the application
function signIn(){

}

// 2. The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]


function rateProduct(){
let productsRatings = []
let productsName = []
for(let i = 0;i<products.length;i++){
    productsRatings.push(products[i].ratings)
    productsName.push(products[i].name)
}
console.log(productsRatings)
for(let i = 0;i < productsRatings.length;i++){
    console.log(productsName[i],productsRatings[i])
    }
}
rateProduct()
/*
function averageRating(){
let productsRatings = []
let productsName = []
for(let i = 0;i<products.length;i++){
    productsRatings.push(products[i].ratings)
    productsName.push(products[i].name)

}
//console.log(productsRatings)
let ratingsOfProducts = []
let sumRates = 0
let averageRates = 0
for(let i = 0;i < productsRatings.length;i++){ 
    ratingsOfProducts.push(productsRatings[i])   
    for(k in productsRatings[i]){
        //console.log(productsName[i], productsRatings[i][k].rate)
        if(productsName[i] == products[i].name){
            sumRates = sumRates + productsRatings[i][k].rate
            //console.log(productsName[i], sumRates)
            averageRates = sumRates / ratingsOfProducts.length
            console.log(productsName[i], averageRates)

        }
    }
    }
    //console.log(ratingsOfProducts)
for (let i = 0; i < ratingsOfProducts.length;i++){
    //console.log(ratingsOfProducts[i].length)
}
}
averageRating()
*/
function average(){
    let mobilePhone = products[0]
    let laptop = products[1]
    let tv = products[2]    
    let sumMobilePhoneRate = 0
    let sumLaptopRate = 0
    let sumTvRate = 0
    let averageMobilePhoneRate = 0
    let averageLaptopRate = 0
    let averageTvRate = 0
    for(let i = 0; i < mobilePhone.ratings.length;i++){
        sumMobilePhoneRate += mobilePhone.ratings[i].rate

    }
    console.log(sumMobilePhoneRate)
    for(let i = 0; i < laptop.ratings.length;i++){
        sumLaptopRate += laptop.ratings[i].rate
    }
    console.log(sumLaptopRate)
    for(let i = 0; i < tv.ratings.length;i++){
        sumTvRate += tv.ratings[i].rate
    }
    console.log(sumTvRate)
    averageMobilePhoneRate = sumMobilePhoneRate / mobilePhone.ratings.length
    averageLaptopRate = sumLaptopRate / laptop.ratings.length 
    averageTvRate = sumTvRate / tv.ratings.length

    console.log("Mobile Phone Average Rate:", averageMobilePhoneRate)
    console.log("Laptop Average Rate:", averageLaptopRate)
    console.log("TV Average Rate:", averageTvRate)
}

average()

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(){

}
