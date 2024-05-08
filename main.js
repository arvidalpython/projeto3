$(document).ready(function(){ //inicializador do jQuery, para executar todo o conteúdo q estiver aqui dentro apenas após todo o conteúdo ser carregado


    $('#telefone').mask('(00) 00000-0000', {
        // placeholder: '__/__/____'
    }) //Para chamar a função da máscara do telefone que pertence ao plugin jquery.mask.min.js. Como o plugin está sendo utilizado para telefone, deve ser representado pelo "0", se for letra é representado pelo "S". Essa mesma máscara pode ser usada p/ data basta colocar "00/00/0000".

    //se tivesse que usar essa máscara do telefone com a variação do celular, que tem mais dígitos seria o caso de solucionar com um if ternário:
    //onde a variável celular seria tirada de um button radio
    //let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000'
    //$('#telefone').mask(mascara) 
 

})