// let main_str="12345612345612345313213";
// let tmp_main_str=main_str.split("");

// let one_count=0;
// tmp_main_str.forEach((item,index)=>{
//   if(item==="1") {
//     // Findout how many times "1" is there
//     one_count+=1;
//     //Replace all '1' into '9'
//     tmp_main_str[index]="9"
//   }
//   if(item==="6"){
//     //Remove all '6' from given string
//     delete tmp_main_str[index]
//   }
// })

// // main_str=  main_str.replaceAll("1","9")
// console.log(one_count)
// console.log(tmp_main_str.join(""))


// let main_str="12345612345612345313213";
// console.log([...main_str].filter((i)=>i=='1').length)
// console.log(main_str.replaceAll('1',9).replaceAll('6',''));



// let a=1;
// function Stop_Recursion_66(){
//   console.log(a)
//   if(a<66){
//     a++;
//     Stop_Recursion_66();
//   }else{
//     return;
//   }
// }
// Stop_Recursion_66();


let file_name="hhtp://www.xyz.xx/hello.f.gd.sg.dsg.gh.pdf";

let formated_file_name=file_name.split("/");

let get_filename_ext=formated_file_name[formated_file_name.length-1].split(".");

if(get_filename_ext.length>1){
  let ext=get_filename_ext.pop()
  console.log(`filename is - ${get_filename_ext.join(".")} , and extension is - ${ext}`)
}else{;
  console.log("Invalid url")
}








