var Altura = new Array(15);

for( let i = 0 ; i < 15; i++ ) {

    Altura[ i ]  =  160 + 2 * i;


}

//  Indice 0 sao homens  indice  1 sao muheres

let Genero = [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

let MaiorMulher = 0;
let MaiorHomem =  0;

for( let i = 0 ; i < 15; i++ )  {

    if ( Genero[ i ] == 0 )  {

        if ( Altura[i] > MaiorMulher ) {

            MaiorMulher = Altura[i];
        }
        
    }

    else  {

        if ( Altura[i] > MaiorHomem ) {

            MaiorHomem = Altura[i];
        }

    }
   
}

console.log( MaiorHomem );
console.log( MaiorMulher )