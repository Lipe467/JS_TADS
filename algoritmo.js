//i = 0;

//for(i=0; i<100; i++){
//if (i % 2 == 0)
//console.log(i)
//}

//arr = [1,2,3];
//soma =0 ;
//for(i=0; i<3; i++){
   // console.log(arr[i]);
   // soma += arr[i];
    
  //  }
  //  console.log("soma " + soma);


 // arr2 = [1,4,5,-6,-7];


  //for(i=0; i<3; i++){     
    //if (arr2[i] > 0){
     //console.log(arr2[i]);
       //}
    //}


   // arr3 = [1,4,67,8,9]
    ////  for(i=0; i<5; i++){    

    // console.log(arr3[i] * 2);
    //   }
    
        async function soma(a,b) {

            result= a + b;
                if (result % 2 != 0) throw Error ("Erro!")
            return result;
        }
        soma(2, 2).then(res => {

            console.log("Valor é par")
        
        }).catch(err => {
        
            console.log("Valor é impar")
        
        })