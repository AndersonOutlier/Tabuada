let displayId = document.getElementById('displayId');
let magicScreenId = document.getElementById('magicScreenId');

function calcular (number){
    if(magicScreenId.classList.contains('setMagicScreenVisible')){
        magicScreenId.classList.remove('setMagicScreenVisible');
        magicScreenId.classList.add('setMagicScreenInvisible');
        
    }


    let elementosComClasseMarcador = document.querySelectorAll('.marcador')
    if(elementosComClasseMarcador.length>0){        
        // se há elementos com a classe .marcador apagar todos eles
        var contadorMarcador = 0;
        while(contadorMarcador<=10){
            elementosComClasseMarcador[contadorMarcador].remove();
            contadorMarcador++;
        }

    }else{
        // se não há elementos com a classe elementosComClasseMarcador
        
    }

    
    

    

    // mostra tabuada do zero
     
    let sequence = 0 
    let contador = 0  

    let myInterval = setInterval(function(){
        let linha = document.createElement('div');
        // linha.style.height = '42px';
        
        linha.style.margin = '1px';
        linha.style.display = 'flex',
        linha.style.alignItems = 'center';
        linha.style.justifyContent = 'center';        
        linha.style.color = 'white';
        linha.style.fontWeight = 'bold';
        linha.classList.add('marcador');
        
        linha.style.borderBottom = 'dotted 1px gray';
        linha.classList.add('lineClass');
        
        
        // linha.innerHTML = `${number} x ${sequence} = ${number*sequence}`;        

        displayId.appendChild(linha);

               

        // ========================================================

        let square1 = document.createElement('div');
        square1.style.height = '42px';
        square1.style.width = '60px';
        // square1.style.backgroundColor = 'red';
        square1.innerHTML = number;
        square1.style.display = 'flex';
        square1.style.alignItems  ='center';
        square1.style.justifyContent = 'center';
        linha.appendChild(square1);

        let square2 = document.createElement('div');
        square2.style.height = '42px';
        square2.style.width = '40px';
        // square2.style.backgroundColor = 'blue';
        square2.innerHTML = 'x';
        square2.style.display = 'flex';
        square2.style.alignItems = 'center';
        square2.style.justifyContent = 'center';
        linha.appendChild(square2);

        let square3 = document.createElement('div');
        square3.style.height = '42px';
        square3.style.width = '60px';
        // square3.style.backgroundColor = 'yellow';
        square3.innerHTML = contador;
        square3.style.display = 'flex';
        square3.style.alignItems = 'center';
        square3.style.justifyContent = 'center';
        linha.appendChild(square3);

        let square4 = document.createElement('div');
        square4.style.height = '42px';
        square4.style.width = '40px';
        // square4.style.backgroundColor = 'green';
        square4.innerHTML = '=';
        square4.style.display = 'flex';
        square4.style.alignItems = 'center';
        square4.style.justifyContent = 'center';
        linha.appendChild(square4);

        let square5 = document.createElement('div');
        square5.style.height = '42px';
        square5.style.width = '60px';
        // square5.style.backgroundColor = 'black';
        square5.innerHTML = number*sequence;
        square5.style.display = 'flex';
        square5.style.alignItems = 'center';
        square5.style.justifyContent = 'center';
        linha.appendChild(square5);

        // =================================================================
        contador++;
        sequence++;

        if(contador===11){
            clearInterval(myInterval);
        }
        
    },100)

    contador = 0;
    sequence = 0;
    
}


let btnMagic = document.getElementById('btnMagic');
btnMagic.addEventListener('click',function(){
    let elementosComClasseMarcador = document.querySelectorAll('.marcador')
    if(elementosComClasseMarcador.length>0){        
        // se há elementos com a classe .marcador apagar todos eles
        var contadorMarcador = 0;
        while(contadorMarcador<=10){
            elementosComClasseMarcador[contadorMarcador].remove();
            contadorMarcador++;
        }

    }else{
        // se não há elementos com a classe elementosComClasseMarcador
        
    }


    // se tem a classe invisible, tira e poe visible
    if(magicScreenId.classList.contains('setMagicScreenInvisible')){
        magicScreenId.classList.remove('setMagicScreenInvisible');
        magicScreenId.classList.add('setMagicScreenVisible');       


        return;

        


    }

    if(magicScreenId.classList.contains('setMagicScreenVisible')){
        magicScreenId.classList.remove('setMagicScreenVisible');
        magicScreenId.classList.add('setMagicScreenInvisible');
        return;
    }
    

    

})










