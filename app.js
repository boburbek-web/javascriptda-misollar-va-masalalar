// ======================== Task 1 START ========================

// =========================== TIPLAR BO'LIMI START=====================


// =========================== 1 =================================
//  Uzunligi L berilgan . Undagi to'liq  metrlar sonini aniqlovchi pragrammani tuzing

// let L = +prompt("Uzunligini kiriting necha sm");
// let metr =L/100;
// console.log("To'liq metr soni: " + metr);


// =========================== 2 =================================
// Og'irligi M kg berilgan .Uning to'liq tonna sonini aniqlovchi programma tuzing 1t=1000kg

// let M = +prompt("Og'irligi necha kg"); 
// let tonna =M / 1000;
// console.log("To'liq tonna soni: " + tonna);



// =========================== 3 =================================
// A va B musbat sonlar (A>B) A kesmada B kesmani necha marta joylash mumkin

// let A = +prompt("Kesmada A (musbat son) kiriting"); 
// let B = +prompt("// Kesmada B (musbat son) kiriting");   
// let n = Math.floor(A/B); 
// console.log("A kesmada B kesmani " + n + " marta joylashtirish mumkin");


// =========================== 4 =================================
// Ikki xonali son berilgan uning o'nliklar xonasidagi va birliklar xonasidagi sonlarni aniqlang

// let son = +prompt("2 xonali son kiriting");
// let onliklar = Math.floor(son / 10);
// let birliklar = son % 10;
// console.log("O'nliklar xonasidagi son: " + onliklar);
// console.log("Birliklar xonasidagi son: " + birliklar);


// =========================== 5 =================================
// Ikki xonali son berilgan uning raqamlar yig'indisini topuvchi programma tuzing

// let son = +prompt('2 xonali son kiriting'); 
// let onliklar = Math.floor(son / 10);
// let birliklar = son % 10;
// let yigindi = onliklar + birliklar;
// console.log("Raqamlar yig'indisi: " + yigindi);

// =========================== 6 =================================
// Ikki xonali son berilgan uning raqamlar ko'paytmasini topuvchi programma tuzing

// let son = +prompt('2 xonali son kiriting'); 
// let onliklar = Math.floor(son / 10);
// let birliklar = son % 10;
// let yigindi = onliklar * birliklar;
// console.log("Raqamlar yig'indisi: " + yigindi);


// =========================== 7 =================================
// 999dan katta son berilgan bo'lib butun olib va qoldiqli bo'lish operatsiyasidan foydalanib yuzlarni topuvchi dasturni toping

// let son = +prompt("999 dan katta son kiriting:");
// let butunQism = Math.floor(son / 100);
// let qoldiq = son % 100; 
// let yuzlar = Math.floor(butunQism % 10); 
// console.log("Berilgan sonning yuzlari: " + yuzlar);


// =========================== 8 =================================
// Kun boshidan n sekund o'tdi kun boshidan necha minut, soat o'tganligini  aniqlang


//let n =+prompt("Kun boshidan necha sekund o'tdi"); 
//let minut = Math.floor(n / 60); 
//let soat = Math.floor(n / 3600); 
//console.log("Kun boshidan " + n + " sekund o'tdi");
//console.log("Bundan " + minut + " minut o'tgan");
//console.log("Bundan " + soat + " soat o'tgan");

// =========================== TIPLAR BO'LIMI  END=====================
// ======================== Task 1 END========================


// ======================== Task 2 START========================

// =========================== MANTIQIY AMALLAR  START(if else)=====================

// =========================== 1 =================================
// A butun son berilgan jumlani rostlikka tekshiring: A son musbat

// let A=+prompt("Butun son kiriting")
// if (A > 0) {
//     console.log("A son musbat");
//   } else {
//     console.log("A son manfiy");
//   }
  

// =========================== 2 =================================
// A butun son berilgan jumlani rostlikka tekshiring: A son toq
// let A=+prompt("Toq son kiriting")

// if (A % 2 ===1) {
//     console.log("A son toq");
//   } else {
//     console.log("A son juft");
//   }
  
  
// =========================== 3 =================================
// A butun son berilgan jumlani rostlikka tekshiring: A son juft

// if (A % 2 === 0) {
//     console.log("A son juft");
//   } else {
//     console.log("A son toq");
//   }
  

// =========================== 4 =================================
// Ikkita butun son berilgan Jumlani rostlikka tekshiring

// let son1 = +prompt("Birinchi sonni kiriting: ");
// let son2 = +prompt("Ikkinchi sonni kiriting: ");
// if (son1 > 0 && son2 > 0) {
//   console.log("Natija rost");
// } else {
//   console.log("Natija noto'g'ri");
// }


// =========================== 5 =================================
// 3 ta son berilgan a, b, c  a bdan katta b cdan katta rostlikni tekshiring

// let a = +prompt("A sonni kiriting: ");
// let b = +prompt("B sonni kiriting: ");
// let c = +prompt("C sonni kiriting: ");

// if (a > b && b > c) {
//   console.log("Natija rost");
// } else {
//   console.log("Natija noto'g'ri");
// }


// =========================== 6 =================================
//  a, b, c sonlar berilgan b son a va c sonlar orasida yotadi
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// if (b > a && b < c || b < a && b > c) {
//   console.log("b soni a va c sonlari orasida joylashgan");
// } else {
//   console.log("b soni a va c sonlari orasida joylashmagan");
// }


// =========================== 7 =================================
// a, b son berilgan sonlarni toq songa tekshiring

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");

// if (a % 2 !== 0 && b % 2 !== 0) {
//   console.log("Berilgan sonlar toq sonlarga teng");
// } else {
//   console.log("Berilgan sonlar toq sonlarga teng emas");
// }


// =========================== 8 =================================
// a,b, c, d sonlar berilghan barchasi musbatga tekshiring

// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = +prompt("c ni kiriting:");
// let d = +prompt("d ni kiriting:");
// if (a > 0 && b > 0 && c > 0 && d > 0) {
//   console.log("Barcha sonlar musbat");
// } else {
//   console.log("Barcha sonlar musbat emas");
// }


// =========================== 9 =================================
// a,b, c sonlar berilgan kamida  2tasi musbat musbatga tekshiring

// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
//   console.log("Kamida ikkita son musbat");
// } else {
//   console.log("bir son manfiy yoki 0");
// }

// =========================== 10 =================================
// Hafta kunlar berilgan raqamga qarab hafta kunlarini tekshiring

// let hafta = +prompt("1-7 oralig'ida bir son kiriting");
// if (hafta === 1) {
//   console.log("Dushanba");
// } else if (hafta === 2) {
//   console.log("Seshanba");
// } else if (hafta === 3) {
//   console.log("Chorshanba");
// } else if (hafta === 4) {
//   console.log("Payshanba");
// } else if (hafta === 5) {
//   console.log("Juma");
// } else if (hafta === 6) {
//   console.log("Shanba");
// } else if (hafta === 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Noto'g'ri son kiritdingiz!");
// }


// =========================== 11 =================================
// telefon no'mer orqali qaysi kompaniya ekanligini tekshiring

// let telephoneCode = +prompt("Telefon no'mer kodinggizni kiriting");
// if (telephoneCode === "90") {
//   console.log("Beeline");
// } else if (telephoneCode ==="91") {
//     console.log("Beeline");
// } else if (telephoneCode === "92") {
//     console.log("Beeline");
// } else if (telephoneCode === "93") {
//   console.log("Ucell");
// } else if (telephoneCode === "94") {
//   console.log("Ucell");
// } else if (telephoneCode === "97") {
//   console.log("Mobiuz");
// } else if (telephoneCode === "88") {
//     console.log("Mobiuz");
// } else if (telephoneCode === "98") {
//     console.log("Perfectum Mobile");
// } else if (telephoneCode === "33") {
//     console.log("Humans");
// }  else {
//   console.log("Noto'g'ri");
// }


// =========================== 12 =================================
// Butun son berilgan  agar son musbat bulsa bittaga oshiring aks holda bittaga kamaytiring

// let son = +prompt("Butun son kiriting:");
// if (son > 0) {
//   son += 1;
// } else {
//   son -= 1;
// }
// console.log("Natija:", son);


// =========================== 13 =================================
// Butun son berilgan  agar son musbat bulsa 3ga oshiring aks holda 2taga kamaytiring

// let son = +prompt("Sonni kiriting:");
// if (son > 0) {
//   son += 3;
// } else {
//   son -= 2;
// }
// alert(`Natija: ${son}`);



// =========================== 14 =================================
// Ikkita butun son berilgan kattasini aniqlovchi dastur tuzing

// let a =+prompt("Birinchi sonni kiriting:");
// let b =+prompt("Ikkinchi sonni kiriting:");
// if (a > b) {
//   console.log("Katta son: " + a);
// } else if (a < b) {
//   console.log("Katta son: " + b);
// } else {
//   console.log("Sonlar teng");
// }

// =========================== 15 =================================
// 3ta butun son  berilgan  eng kattasini aniqlovchi dastur tuzing

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let c = +prompt("Uchinchi sonni kiriting:");

// if (a >= b && a >= c) {
//   console.log(a + " eng katta son");
// } else if (b >= a && b >= c) {
//   console.log(b + " eng katta son");
// } else {
//   console.log(c + " eng katta son");
// }


// =========================== 16  =================================
// 3ta  son  berilgan  eng kichigini aniqlovchi dastur tuzing

// let a = +prompt("1-sonni kiriting:");
// let b = +prompt("2-sonni kiriting:");
// let c = +prompt("3-sonni kiriting:");
// if (a < b && a < c) {
//   console.log(a + " eng kichik son");
// } else if (b < a && b < c) {
//   console.log(b + " eng kichik son");
// } else {
//   console.log(c + " eng kichik son");
// }


// =========================== 17  =================================
// Jinsga qarab rasm chiqaruvchi dastur tuzing

// const card=document.querySelector('.card')
// let jins=+prompt("Jinsingizni kiriting: Ayol bulsangiz 1ni kiriting Erkak bulsangiz 2ni kiriting ")
// if(jins==1){
//     card.innerHTML =`
//     <img src="./img/Ayol.jpg">
//     `
// }
// else if(jins==2){
//     card.innerHTML =`
//     <img src="./img/Erkak.jpg">
//     `
// }
// else{
//     card.innerHTML =`<h1>Bunaqa jins yuq</h1>`

// }


// =========================== 18  =================================
// Bahoga qarab stipendiya chiqaruvchi dastur tiuzing

// let baho = +prompt("Bahoni kiriting:");
// let stipend = "";
// if (baho >= 5) {
//   stipend = "Alo";
// } else if (baho >= 4) {
//   stipend = "Yaxshi";
// } else if (baho >= 3) {
//   stipend = "Qoniqarli";
// } else {
//   stipend = "Yomon";
// }
// alert(`Sizning stipendiyangiz: ${stipend}`);


// =========================== 19  =================================
// Butun son berilgan shu songa qarab toq musbat , toq manfiy, juft musbat , juft musbatni chiqaruvchi dastur tuzing

// let number = +prompt("Butun son kiriting: ");

// if (number > 0) {
//   if (number % 2 == 0) {
//     console.log("Juft musbat");
//   } else {
//     console.log("Toq musbat");
//   }
// }
//  else if (number < 0) {
//   if (number % 2 == 0) {
//     console.log("Juft manfiy");
//   } else {
//     console.log("Toq manfiy");
//   }
// } else {
//   console.log("Son nolga teng");
// }


// =========================== 20  =================================
// yiliga qarab yoshini chiqaruvchi dastur tuzing

// const birthYear = prompt("Tug'ilgan yilingizni kiriting:");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;
// console.log(`Sizning yoshingiz: ${age}`);



// =========================== 21  =================================
// 3ta butun son berilgan jumlani rostlikka tekshiring A<=B<=C
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// let C = parseInt(prompt("C sonini kiriting:"));

// if(A<=B && B<=C) {
//   console.log("Javob: Rost");
// } else {
//   console.log("Javob: Xato");
// }



// =========================== 22  =================================
// 2ta son berilgan 2 sondan faqat bittasi toq son hisoblanadi


// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");

// if (a % 2 === 1 && b % 2 === 0) {
//   console.log(`Faqat ${a} toq son hisoblanadi.`);
// } else if (a % 2 === 0 && b % 2 === 1) {
//   console.log(`Faqat ${b} toq son hisoblanadi.`);
// } else {
//   console.log("Hech qaysi son toq emas.");
// }


// =========================== 23  =================================
// a,b.c sonlar berilgan har biri musbat rostlikka tekshiring

// let a = prompt("a ni kiriting");
// let b = prompt("b ni kiriting");
// let c = prompt("c ni kiriting");

// if (a > 0 && b > 0 && c > 0) {
//   console.log("Har bir son musbat");
// } else {
//   console.log("Kamida biri manfiy");
// }


// =========================== 24  =================================
// a,b.c sonlardan  biri musbat rostlikka tekshiring
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// let c = prompt("c ni kiriting:");

// if (a > 0 || b > 0 || c > 0) {
//   console.log("Biror bir son musbat!");
// } else {
//   console.log("Hech qaysi son musbat emas!");
// }



// =========================== 25  =================================

// Shartiga to'grisi tushunmadim 



// =========================== 26  =================================
// 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan dastur tuzing

// let num = prompt("3 xonali son kiriting:");
// let digits = [num[0], num[1], num[2]];

// if (digits[0] < digits[1] && digits[1] < digits[2]) {
//   console.log("Raqamlari ketma-ket o'sib boruvchi.");
// } else {
//   console.log("Raqamlari ketma-ket o'sib boruvchi emas.");
// }



// =========================== 27  =================================
// komputer nomiga qarab komputer summasini chiqaruvchi dastur tuzing

// const brand = prompt("Kompyuter nomini kiriting: "); 
// let summa; 
// switch (brand.toLowerCase()) {
//   case "lenova":
//     summa = 5400000;
//     break;
//   case "hp":
//     summa = 7000000;
//     break;
//   case "apple":
//     summa = 180000;
//     break;
//   case "acer":
//     summa = 10000000;
//     break;
//   default:
//     alert("Noto'g'ri kompyuter nomi kiritildi!");
// }
// if (summa) {
//   alert(`"${brand}" kompyuterining summasi: ${summa} so'm`);
// }


// =========================== 28  =================================
// sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing for da

// ISHLAY OLMADIM 


// =========================== MANTIQIY AMALLAR  END(if else) =====================
// ======================== Task 2 END========================


// ======================== Task 3 START========================
// ======================== SWITCH START========================

// ============================= 1 ==============================
// 1-7 gacha butun son beerilgan kiritilgan songa mos ravishta hafta kunini so'zlarda ifodalovchi dastur tuzing

// let hafta = +prompt("1-7 oralig'ida bir son kiriting");
// switch (hafta) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba");
//     break;
//   case 4:
//     alert("Payshanba");
//     break;
//   case 5:
//     alert("Juma");
//     break;
//   case 6:
//     alert("Shanba");
//     break;
//   case 7:
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Noto'g'ri son kiritdingiz!");
//     break;
// }


// ============================= 2 ==============================

// K butun son beriilgan Bahoni natijasini chiqaruvchi dastur tuzing.1-yomon ,2-qoniqarsiz, 3-qoniqarli, 4-yaxshi , 5-a'lo

// let baholanganBaho = +prompt("Kurs ishtirokchisining bahosini kiriting (1-5 oralig'ida)");
// let baholanganNatija = "";
// switch (baholanganBaho) {
//   case 1:
//     baholanganNatija = "Yomon";
//     break;
//   case 2:
//     baholanganNatija = "Qoniqarsiz";
//     break;
//   case 3:
//     baholanganNatija = "Qoniqarli";
//     break;
//   case 4:
//     baholanganNatija = "Yaxshi";
//     break;
//   case 5:
//     baholanganNatija = "A'lo";
//     break;
//   default:
//     baholanganNatija = "Noto'g'ri baholangan son kiritdingiz!";
//     break;
// }

// console.log(`Sizning kiritgan baholangan natijangiz: ${baholanganNatija}`);



// ============================= 3 ==============================
// Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi dastur tuzing


// let oy = +prompt("Oy raqamini kiriting:");
// switch (oy) {
//   case 1:
//   case 2:
//   case 12:
//     alert("Qish fasli");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Bahor fasli");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Yoz fasli");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Kuz fasli");
//     break;
//   default:
//     alert("Noto'g'ri oy raqami kiritildi");
// }



// ============================= 4 ==============================
// Oy raqami berilgan shu oyda necha kun borligini chiqaruvchi dastur tuzing

// let oy = +prompt("Oy raqamini kiriting:");
// switch (oy) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     alert("31 kun bor");
//     break;
//   case 4:
//   case 6:
//     alert("30 kun bor");
//     break;
//   case 2:
//     alert("28 kun bor");
//     break;
//   default:
//     alert("Noto'g'ri oy raqami kiritildi");
// }


// ============================= 5 ==============================
// a,b sonlar berilgan c amal ham berilgan  a va b sonlar ustida amal bajaruvchi dastur tuzing 


// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = prompt("Amalni tanlang (+,-,*,/):");
// let natija;

// switch(c) {
//   case "+":
//     natija = a + b;
//     break;
//   case "-":
//     natija = a - b;
//     break;
//   case "*":
//     natija = a * b;
//     break;
//   case "/":
//     natija = a / b;
//     break;
//   default:
//     console.log("Noto'g'ri amalni kiritdingiz!");
// }

// console.log(`Natija: ${natija}`);



// ============================= 6 ==============================
// Bahoga qarab stipendiya aniqlovchi dastur tuzing

// let baho = +prompt("Bahoni kiriting: ");
// let stipendiya = 0;

// switch (baho) {
//   case 5:
//     stipendiya = 1200000;
//     break;
//   case 4:
//     stipendiya = 800000;
//     break;
//   case 3:
//     stipendiya = 600000;
//     break;
//   case 2:
//   case 1:
//     console.log("Afsuski, sizga stipendiya yo'q!");
//     break;
//   default:
//     console.log("Noto'g'ri baholar kiritildi!");
//     break;
// }

// if (stipendiya > 0) {
//   console.log(`Sizning stipendiya miqdoringiz: ${stipendiya} so'm`);
// }


// ======================== SWITCH END========================
// ======================== Task 3 END========================



// ======================== Task 4 Start======================== 
// ========================= FOR START ========================


// ============================== 1 =============================
// k va n butun son K ni  n marta chiqaruvchi dastur tuzing

// const n = +prompt("n ni kiriting: ");
// const K = prompt("K ni kiriting: ");
// let result = "";
// for (let i = 0; i < n; i++) {
//   result += K + " ";
// }
// console.log(result.trim());

// ============================== 2 =============================
// a,b sonlar berilgan a b dan katta a va b o'rtasidagi  butun sonlarni chiqaruvchui dastur tuzing a va b o'zi ham chiqsin

// const a =+prompt("a ni kiriting: ");
// const b =+prompt("b ni kiriting: ");

// for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//   console.log(i);
// }


// ============================== 3 =============================
// a,b sonlar berilgan a b dan katta a va b o'rtasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin


// const a =+prompt("a ni kiriting: ");
// const b =+prompt("b ni kiriting: ");

// for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
//   console.log(i);
// }


// ============================== 4 =============================
// 1 kg konfet 10000 sum berilgan 1kgdan 10kggacha barchasini chiqaruvchi dastur tuzing 

// const konfetNarxi = 10000; 

// for (let kg = 1; kg <= 10; kg++) {
//   let narx = konfetNarxi * kg;
//   console.log(kg + " kg konfet narxi: " + narx);
// }


// ============================== 5 =============================
// 1 kg konfet 10000 sum berilgan 0.1kgdan 1kggacha  bo'gan konfet narxini toping


// const narx1Kg = 10000; 
// for (let kg = 0.1; kg <= 1; kg += 0.1) {
//   let narx = narx1Kg * kg;
//   console.log(kg + " kg konfet narxi: " + narx + " so'm");
// }


// ============================== 6 =============================
// 1kg konfet 10000 so'm berilgan 1.2kg , 1.4,1.6,1.8,2 kg konfet narxini toping

// const narx1Kg = 10000;
// const miqdorlar = [1.2, 1.4, 1.6, 1.8, 2];
// for (let i = 0; i < miqdorlar.length; i++) {
//   let miqdor = miqdorlar[i];
//   let narx = (miqdor / 1) * narx1Kg;
//   console.log(miqdor + " kg konfet narxi: " + narx + " so'm");
// }

// ============================== 7 =============================
// a,b sonlar berilgan a b dan katta a va b o'rtasidagi  butun sonlarni yig'indisini chiqaruvchi dastur tuzing 


// let a =+prompt("a ni kiriting: ");
// let b =+prompt("b ni kiriting: ");
// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// let sum = 0;
// for (let i = a + 1; i < b; i++) {
//   sum += i;
// }

// console.log(a + " va " + b + " orasidagi butun sonlar yig'indisi: " + sum);


// ============================== 8 =============================
// a,b sonlar berilgan a b dan katta a va b o'rtasidagi  butun sonlarni ko'paytmasini chiqaruvchi dastur tuzing 


// let a =+prompt("a ni kiriting: ");
// let b =+prompt("b ni kiriting: ");

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// let product = 1;
// for (let i = a + 1; i < b; i++) {
//   product *= i;
// }

// console.log(a + " va " + b + " orasidagi butun sonlar ko'paytmasi: " + product);


// ============================== 9 =============================
// a,b sonlar berilgan a b dan katta a va b o'rtasidagi  butun sonlarni kvadratlarini yigindisini chiqaruvchi dastur tuzing 

// let a =+prompt("a ni kiriting:");
// let b =+prompt("b ni kiriting:");
// let sum = 0;

// for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
//   sum += i * i;
// }

// console.log("Butun sonlarining kvadratlari yig'indisi:", sum);


// ============================== 10 =============================
// n son berilgan  quyidagi yigindini hisoblang. S=1/1+1/2+....+1/n


// let n = +prompt("Son kiriting:");
// let sum = 0;
// for(let i = 1; i <= n; i++) {
//   sum += 1/i;
// }
// console.log("Yig'indisi:", sum);


// ============================== 11 =============================
// n son berilgan  shu sonlar ichidan toqlarini kursatuvchi dastur tuzing

// let n = +prompt("Son kiriting:");
// let oddNumbers = "";
// for(let i = 1; i <= n; i += 2) {
//   oddNumbers += i + " ";
// }
// console.log("Toqlari:", oddNumbers);


// ============================== 12 =============================
// n son berilgan  shu sonlar ichidan juftlarini kursatuvchi dastur tuzing


// let n = +prompt("n ni kiriting:");
// let result = "";
// for(let i = 1; i <= n; i++) {
//   if(i % 2 === 0) {
//     result += i + " ";
//   }
// }
// console.log("Juft sonlar: " + result);


// ============================== 13 =============================
// n son berilgan  shu sonlar ichidan faqat murakkab sonlarini aniqlovchi dastur tuzing

// let n = +prompt("n ni kiriting:");
// let result = "";
// for(let i = 2; i <= n; i++) {
//   let isComposite = false;
//   for(let j = 2; j < i; j++) {
//     if(i % j === 0) {
//       isComposite = true;
//       break;
//     }
//   }
//   if(isComposite) {
//     result += i + " ";
//   }
// }
// console.log("Murakkab sonlar: " + result);


// ============================== 14 =============================
// n son berilgan  shu sonlar ichidan juft va toq sonlarni kvadratini aniqlang

// let n = +prompt("n sonini kiriting:");
// let juft_kvadrat = 0;
// let toq_kvadrat = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     juft_kvadrat += i ** 2;
//   } else {
//     toq_kvadrat += i ** 2;
//   }
// }

// console.log(`Juft sonlarining kvadratlari yig'indisi: ${juft_kvadrat}`);
// console.log(`Toq sonlarining kvadratlari yig'indisi: ${toq_kvadrat}`);



// ============================== 15 =============================
// n son berilgan  n sonidan kamayish tartibida son chiqsin


// let n = +prompt("n sonini kiriting:");
// let result = "";
// for (let i = n; i >= 1; i--) {
//   result += i + " ";
// }
// alert(result);



// ============================== 16 =============================
// n soni berilgan  0 va n sonlar orasidagi 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing

// let n = +prompt("n sonini kiriting");
// let result = "";

// for (let i = 1; i <= n; i++) {
//   if (i % 5 !== 0) {
//     result += i + ", ";
//   }
// }

// console.log(result);



// ============================== 17 =============================
// n butun son berilgan n gacha butun sonlarni ko'paytmasini chiqaruvchi dastur tuzing

// let n = +prompt("n soni kiritin:");
// let kopaytma = 1;

// for (let i = 1; i <= n; i++) {
//   kopaytma *= i;
// }

// alert(`1 dan ${n} gacha butun sonlar ko'paytmasi = ${kopaytma}`);


// ============================== 18 =============================








// ========================= FOR END =========================
// ======================== Task 4 END======================== 
