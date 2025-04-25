let count=5
for(let i=1;i<=count;i++){
    let pat="";
    for(let j=0;j<i;j++){
        pat+="*"
    }
    console.log(pat);
}




// let count=5
// for(let i=count;i>0;i--){
//     let pat="";
//     for(let j=0;j<i;j++){
//         pat+="*"
//     }
//     console.log(pat);
// }



// let count=5
// for(let i=1;i<=count;i++){
//     let pat="";
//     for(let j=1;j<=count-i;j++){
//         pat+=" "
//     }
//     for(let st=1;st<=i;st++){
//         pat+="*"
//     }
//     console.log(pat);
// }



// let count=5
// for(let i=count;i>0;i--){
//     let pat="";
//     for(let sp=1;sp<=count-i;sp++){
//         pat+=" "
//     }
//     for(let j=0;j<i;j++){
//         pat+="*"
//     }
//     console.log(pat);
// }

// let count = 5;
// for (let i = 1; i <= count; i++) {
//     let pat = "";
//     for (let j = 1; j <= i; j++) {
//         pat+=`${i}`
//     }
//     console.log(pat)
// }




// let count = 5;
// let tmp_cnt=1;
// let row=1;
// while(true){
//     let pat="";
//     if(tmp_cnt>count){
//         break
//     }
//     for(let i=1;i<=row;i++){
//         tmp_cnt==10?pat+="0":pat+=`${tmp_cnt}`
//         tmp_cnt++;
//     }
//     row++;
//     console.log(pat)
// }



// let count=9;
// let tmp_cal=1;
// let flag=true;
// for(i=1;i<=count;i++){
//     if(flag){
//         let pat="";
//         for(let sp=1;sp<=((count-tmp_cal)/2);sp++){
//             pat+=" ";
//         }
//         for(let st=1;st<=tmp_cal;st++){
//             pat+="*"
//         }
//         tmp_cal+=2;
//         console.log(pat)
//         if(tmp_cal==count){
//             flag=false
//             let pat=""
//             for(let i=1;i<=count;i++){
//                 pat+="*"
//             }
//             console.log(pat)
//         }

//     }else{
//         tmp_cal=tmp_cal-2;
//         let pat="";
//         for(let sp=1;sp<=((count-tmp_cal)/2);sp++){
//             pat+=" ";
//         }
//         for(let st=1;st<=tmp_cal;st++){
//             pat+="*"
//         }
//         console.log(pat)
//     }
// }


// function DiamondShape(){
//     let count=5;
//     function TopDownPattern(){
//         let pat="";
//         for(let i=1;i<=count+2;i++){
//             pat+="*";
//         }
//         console.log(pat);
//     } 
//     TopDownPattern();
//     let tmp_cal=1;
//     let flag=true;
//     for(i=1;i<=count-1;i++){
//         if(flag){
//             let pat="";
//             let tmp_pat="";
//             for(let sp=1;sp<=((count-tmp_cal)/2)+1;sp++){
//                 tmp_pat+="*";
//             }
//             pat+=tmp_pat;
//             for(let st=1;st<=tmp_cal;st++){
//                 pat+=" "
//             }
//             pat+=tmp_pat;
//             tmp_cal+=2;
//             console.log(pat)
//             if(tmp_cal==count){
//                 flag=false
//                 let pat=""
//                 for(let i=1;i<=count+2;i++){
//                     i===1 || i===count+2?pat+="*":pat+=" ";
//                 }
//                 console.log(pat)
//             }
            
//         }else{
//             tmp_cal=tmp_cal-2;
//             let pat="";
//             let tmp_pat="";
//             for(let sp=1;sp<=((count-tmp_cal)/2)+1;sp++){
//                 tmp_pat+="*";
//             }
//             pat+=tmp_pat;
//             for(let st=1;st<=tmp_cal;st++){
//                 pat+=" "
//             }
//             pat+=tmp_pat;
//             console.log(pat)
//         }
//     }
//     TopDownPattern();
// }
// DiamondShape()




// let data=["name","sahil","gender","Male","tech","RN","Extra",{}]
// let data_obj={}
// let tmp_cal=(data.length/2)
// for(let i=1;i<=(tmp_cal*2);i=i+2){
//     data_obj[data[i-1]]=data[i]
// }
// console.log(data_obj)




const data = [
    { name: "Hello", value: 1 },
    { name: "world", value: 2 },
    { name: "Hello", value: 1 },
    { name: "JS", value: 3 },
    { name: "RN", value: 4 },
    { name: "JS", value: 3 },
    { name: "RN", value: 4 },
    { name: "JjS", value: 3 },
  ];

let names=[]
for(let name of data){
    if(!names.includes(name.name)){
        names.push(name.name)
    }
}
console.log(names)




// let data=[
//     {
//         "name": "Alice Johnson",
//         "id": "A123",
//         "age": 30,
//         "gender": "female"
//     },
//     {
//         "name": "Bob Smith",
//         "id": "B456",
//         "age": 25,
//         "gender": "male"
//     },
//     {
//         "name": "Charlie Williams",
//         "id": "C789",
//         "age": 42,
//         "gender": "male"
//     },
//     {
//         "name": "Diana Brown",
//         "id": "D101",
//         "age": 28,
//         "gender": "female"
//     },
//     {
//         "name": "Ethan Davis",
//         "id": "E112",
//         "age": 35,
//         "gender": "male"
//     },
//     {
//         "name": "Fiona Miller",
//         "id": "F131",
//         "age": 29,
//         "gender": "female"
//     },
//     {
//         "name": "George Wilson",
//         "id": "G141",
//         "age": 48,
//         "gender": "male"
//     },
//     {
//         "name": "Hannah Moore",
//         "id": "H151",
//         "age": 31,
//         "gender": "female"
//     },
//     {
//         "name": "Ian Taylor",
//         "id": "I161",
//         "age": 26,
//         "gender": "male"
//     },
//     {
//         "name": "Julia Anderson",
//         "id": "J171",
//         "age": 33,
//         "gender": "female"
//     }
// ]
// let id_name=data.map((item)=>{
//     return {
//         id:item.id,
//         name:item.name
//     }
// })
// let id_age=data.map((item)=>{
//     return {
//         id:item.id,
//         age:item.age
//     }
// })

// let male_id_name=[]
// let thirty_Year_old_id_name=[]
// let user_less_thirty_Year_old_id_name=[]
// let female_thirty_Year_old_id_name=[]
// data.forEach((item)=>{
//     if(item.gender==="male"){
//         male_id_name.push({
//             id:item.id,
//             name:item.name,
//             age:item.age,
//         })
//     }

//     if(item.age>30){
//         thirty_Year_old_id_name.push({
//             id:item.id,
//             name:item.name,
//             age:item.age
//         })
//         if(item.gender==="female"){
//             female_thirty_Year_old_id_name.push(item)
//         }
//     }else{
//         user_less_thirty_Year_old_id_name.push(item)
//     }
// })

// console.log(male_id_name)
// console.log(thirty_Year_old_id_name)
// console.log(female_thirty_Year_old_id_name)
// console.log(user_less_thirty_Year_old_id_name)




// let string = 'hello world Bhavik';
// let ch = 0;
// let tmp_pat=""
// let inteval=setInterval(() => {
//     tmp_pat+=string[ch]
//     console.log(string[ch])

//     if(tmp_pat.includes("world")){
//         clearInterval(inteval)
//     }

//     ch++;
// }, 1000)

// setTimeout(() => {
//     console.log(string)
// }, 2000);


// let string = 'xvvxvvvvvxxvvvvxvvvxvvvvvvv';
// let output=[]
// let pat="";
// [...string].forEach((item,i)=>{
//     pat=`${string[i]}${string[i+1]}`
//     if(pat==="xv"){
//         output.push(i)
//     }
// })
// console.log(output);


// let date = '2024-03-01'
// console.log("Year = "+new Date(date).getFullYear())
// console.log("Month = "+new Date(date).getMonth()+1)
// console.log("Date = "+new Date(date).getDate())
// console.log(new Date(date).getTime())
// console.log(`${new Date(date).getDate()}-${new Date(date).getMonth() + 1}-${new Date(date).getFullYear()}`)
// console.log(`${new Date(date).getDate()}/${new Date(date).getMonth() + 1}`)


// function formatTime(timeStr) {
//     let [hour, minute] = timeStr.split(':').map(Number);
 
//     const am_pm = hour >= 12 ? 'PM' : 'AM';
//     hour = hour % 12 || 12; 
//     let formatted_Hour = hour.toString().padStart(2, '0');
//     let formatted_Minute = minute.toString().padStart(2, '0');

//     return `${formatted_Hour}:${formatted_Minute} ${am_pm}`;
// }

// let time = '23:59';
// let time2 = '0  :2';

// console.log(formatTime(time));  
// console.log(formatTime(time2));