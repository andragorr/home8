// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше



// const numbers = [ 1, 3, 34, 231, 435, 543, 98, 11, 60, 654, 983, 543, 765, 123, 456, 789, 988, 555, 888, 200];

// let sort = numbers.sort((a,b) => {
//     return a - b
// });
// console.log(sort);

// let sort1 = numbers.sort((a,b) => {
//     return b - a
// });

// console.log(sort1);


// let filter = numbers.filter(value => value % 3 === 0)

// console.log(filter)

// let filter1 = numbers.filter(value => value % 10 === 0)

// console.log(filter1)

// numbers.forEach(value => {
//     console.log(numbers);
// })

// let map = numbers.map(value => {

// });

// console.log(numbers);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце


// const arr = [ 'anna', 'qwerty', 'zxcvb', 'film', 'mumia', 'car', 'flat' , 'ponni', 'house', 'melody', 'magazine' , 'blue', 'red', 'money', 'kennedy'];

// let arr1 = arr.sort((a,b) => {
//  if(a > b){
//      return 1
//  } 
//  return -1
// });
// console.log(arr1);

// let arr2 = arr.sort((a,b) => {
//     if(a > b){
//         return -1
//     } 
//     return 1
//    });
//    console.log(arr2);

// arr.forEach(value => {
//     if (value.length > 4) {
//         return
//     }
//     console.log(value);
// })


// arr.map(value => {
//     return value + '!'
// })
// console.log(arr);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), 
// та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором


// let users = [ {name: 'vasya', age: 31, status: false}, 
//             {name: 'petya', age: 30, status: true}, 
//             {name: 'kolya', age: 29, status: true}, 
//             {name: 'olya', age: 28, status: false}, 
//             {name: 'max', age: 30, status: true}, 
//             {name: 'anya', age: 31, status: false}, 
//             {name: 'oleg', age: 28, status: false}, 
//             {name: 'andrey', age: 29, status: true}, 
//             {name: 'masha', age: 30, status: true}, 
//             {name: 'olya', age: 31, status: false}, 
//             {name: 'max', age: 31, status: true} 
//         ];

// users.sort ( (a , b) => a.age - b.age)
// console.log(users);

// users.sort ( (a , b) => b.age - a.age)
// console.log(users);

// users.sort ( (a , b) => b.name.length - a.name.length)
// console.log(users);

// users.sort ( (a , b) => a.name.length - b.name.length)
// console.log(users);

// let myArray = JSON.parse(JSON.stringify(users));

// let newUsers = myArray.map((user,index) => {
//     user.id = index 
//     return user
// });

// console.log(newUsers);


// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(a,b, callback) {
//     return callback(a,b);

// }
// let result = calculator(10,20,(a,b) =>  {
//     return a + b;
// });

// console.log(result);

// function calculator(a,b, c, callback) {
//         return callback(a,b,c);
    
//     }
//     let result = calculator(10,20,30,(a,b,c) =>  {
//         return a + b + c;
//     });
    
//     console.log(result);


// let cars = [ 
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
// ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв


// let filter = cars.filter(item => item.volume > 3 )
// let filter = cars.filter(item => item.volume = 2 )
// let filter = cars.filter(item => item.producer === 'mercedes')
// let filter = cars.filter(item => item.producer === 'mercedes' && item.volume >= 3)
// let filter = cars.filter(item => item.producer === 'subaru' && item.volume >= 3)
// let filter = cars.filter(item => item.power > 300)
// let filter = cars.filter(item => item.power > 300 && item.producer === 'subaru')
// let filter = cars.filter(item => item.engine.startsWith('ej'))
// let filter = cars.filter(item => item.engine.startsWith('ej') && item.producer === 'subaru' && item.power > 300)
// let filter = cars.filter(item => item.producer === 'mercedes' && item.volume <= 3)
// let filter = cars.filter(item => item.power > 250 && item.volume >= 2)
// let filter = cars.filter(item => item.power > 250 && item.producer === 'bmw')
// console.log(filter);

// - взять слдующий массив
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный



// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 2, name: 'petya', age: 30, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//     {id: 4, name: 'olya', age: 28, status: false, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//     {id: 5, name: 'max', age: 30, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//     {id: 6, name: 'anya', age: 31, status: false, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//     {id: 7, name: 'oleg', age: 28, status: false, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//     {id: 8, name: 'andrey', age: 29, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//     {id: 9, name: 'masha', age: 30, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//     {id: 10, name: 'olya', age: 31, status: false, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 11, name: 'max', age: 31, status: true, address: 
//     {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// let sort = usersWithAddress.sort((a,b) => {
//     if ( a < b) {
//         return -1;
//     }
//     return 1
//     });
// let sort = usersWithAddress.sort((a,b) => {
//     if ( a < b) {
//         return 1;
//     }
//     return -1
//     });

// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.age < b.age) {
//         return -1;
//     }
//     return 1
//     });
// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.age < b.age) {
//         return 1;
//     }
//     return -1
//     });

// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.name < b.name) {
//         return -1
//     }
//     return 1
//     });
// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.name < b.name) {
//         return 1
//     }
//     return -1
//     });

// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.address.street < b.address.street) {
//         return -1
//     }
//     return 1
//     });


// let sort = usersWithAddress.sort((a,b) => {
//     if ( a.address.number < b.address.number) {
//         return -1
//     }
//     return 1
//     });

// let filter = usersWithAddress.filter(item => item.age <= 30)

// let filter = usersWithAddress.filter(item => item.status === false && item.age <= 30)

// let filter = usersWithAddress.filter(item => item.address.number % 2 === 0)

// console.log(filter);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let cars = [{ model: 'proda' , volume: 2.3, price: 3080, year: 2010, owner: { name:'Igor' , age: 24, skills: 10 }},
// { model: 'wrx' , volume: 1.5, price: 3500, year: 2015, owner: { name:'taras' , age: 24, skills: 5 }},
// { model: 'legacy' , volume: 1.7, price: 3000, year: 2014, owner: { name:'serhii' , age: 20, skills: 7 }},
// { model: 'tribeca' , volume: 2.0, price: 3080, year: 2018, owner: { name:'ira' , age: 21, skills: 8 }},
// { model: 'impreza' , volume: 1.4, price: 4000, year: 2000, owner: { name:'kolia' , age: 27, skills: 9 }},
// { model: 'outback' , volume: 3.0, price: 6805, year: 2009, owner: { name:'tania' , age: 26, skills: 2 }},
// { model: 'prado' , volume: 2.5 , price: 7538, year: 2005, owner: { name:'stepan' , age: 23, skills: 1 }}];

// // const filter = cars.filter((value,index) => {
// //  if (index < cars.length / 2)
// //  return value;
// // })
// // console.log(filter);

// // const filter = cars.map(value => {
// //     value.volume += 0.1;
// //     value.price *= 1.5;
// //     return value
// // });

// cars.map(value => {
//     if (owner.skills <= 5 && owner.age >= 25){
//         return owner.skills +=1;
//     }
//     return value
// })

// console.log(cars);















