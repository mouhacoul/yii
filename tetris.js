

function criaPixel(nome)
{
    var pixel1 = document.createElement('DIV');
    pixel1.setAttribute('id',nome);
    pixel1.className='pixel';
    pixel1.setAttribute('class','pixel');
    document.getElementById("conteudo").appendChild(pixel1);
    document.getElementById(nome).style.top = '0px';
    document.getElementById(nome).style.left = '100px';
    //document.getElementById(nome).style.backgroundColor = corPixel;
}


function movePixelBaixo(pixel)
{
    document.getElementById(pixel).style.top = parseInt(document.getElementById(pixel).style.top) + 20;
}


function movePixelFrente(pixel)
{
    document.getElementById(pixel).style.left = parseInt(document.getElementById(pixel).style.left) + 20;
}


function movePixelAtraz(pixel)
{
    document.getElementById(pixel).style.left = parseInt(document.getElementById(pixel).style.left) - 20;
}


function movePixelCima(pixel)
{
    document.getElementById(pixel).style.top = parseInt(document.getElementById(pixel).style.top) - 20;
}



quantPixel = 0;
corPixel = 'black';
temp1 = new Array(1);
temp2 = new Array(1);
temp3 = new Array(1);
temp4 = new Array(1);
tipoObj = "";
movimento = 1;


function criaO()
{
    quantPixel++;
    tipoObj = "O";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "80px";
    document.getElementById(temp1[0]).style.backgroundColor = "#A29999";




    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "0px";
    document.getElementById(temp2[0]).style.left = "100px";

    document.getElementById(temp2[0]).style.backgroundColor = "#A29999";

    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "20px";
    document.getElementById(temp3[0]).style.left = "80px";
    document.getElementById(temp3[0]).style.backgroundColor = "#A29999";


    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
    document.getElementById(temp4[0]).style.top = "20px";
    document.getElementById(temp4[0]).style.left = "100px";
    document.getElementById(temp4[0]).style.backgroundColor = "#A29999";

}


function criaS()
{
    quantPixel++;
    tipoObj = "S";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "100px";
    document.getElementById(temp1[0]).style.backgroundColor = "#3563C6";


    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "0px";
    document.getElementById(temp2[0]).style.left = "120px";
    document.getElementById(temp2[0]).style.backgroundColor = "#3563C6";


    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "20px";
    document.getElementById(temp3[0]).style.left = "100px";
    document.getElementById(temp3[0]).style.backgroundColor = "#3563C6";


    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
  


}


function criaZ()
{
    quantPixel++;
    tipoObj = "Z";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "80px";
    document.getElementById(temp1[0]).style.backgroundColor = "black";



    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "0px";
    document.getElementById(temp2[0]).style.left = "100px";
    document.getElementById(temp2[0]).style.backgroundColor = "black";

    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "20px";
    document.getElementById(temp3[0]).style.left = "100px";
    document.getElementById(temp3[0]).style.backgroundColor = "black";


    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
    document.getElementById(temp4[0]).style.top = "20px";
    document.getElementById(temp4[0]).style.left = "120px";
    document.getElementById(temp4[0]).style.backgroundColor = "black";

}


function criaI()
{
    quantPixel++;
    tipoObj = "I";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "100px";
    document.getElementById(temp1[0]).style.backgroundColor = "#2FF032";

    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "20px";
    document.getElementById(temp2[0]).style.left = "100px";
    document.getElementById(temp2[0]).style.backgroundColor = "#2FF032";

    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "40px";
    document.getElementById(temp3[0]).style.left = "100px";
    document.getElementById(temp3[0]).style.backgroundColor = "#2FF032";

    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
    document.getElementById(temp4[0]).style.top = "60px";
    document.getElementById(temp4[0]).style.left = "100px";
    document.getElementById(temp4[0]).style.backgroundColor = "#2FF032";
}


function criaT()
{
    quantPixel++;
    tipoObj = "T";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "100px";

    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "20px";
    document.getElementById(temp2[0]).style.left = "80px";

    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "20px";
    document.getElementById(temp3[0]).style.left = "100px";

    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
    document.getElementById(temp4[0]).style.top = "20px";
    document.getElementById(temp4[0]).style.left = "120px";
}


function criaL()
{
    quantPixel++;
    tipoObj = "L";
    temp1[0] = "p" + quantPixel;
    temp1[1] = criaPixel(temp1[0]);
    document.getElementById(temp1[0]).style.top = "0px";
    document.getElementById(temp1[0]).style.left = "100px";
    document.getElementById(temp1[0]).style.backgroundColor = "#086661";

    quantPixel++;
    temp2[0] = "p" + quantPixel;
    temp2[1] = criaPixel(temp2[0]);
    document.getElementById(temp2[0]).style.top = "20px";
    document.getElementById(temp2[0]).style.left = "100px";
      document.getElementById(temp2[0]).style.backgroundColor = "#086661";

    quantPixel++;
    temp3[0] = "p" + quantPixel;
    temp3[1] = criaPixel(temp3[0]);
    document.getElementById(temp3[0]).style.top = "40px";
    document.getElementById(temp3[0]).style.left = "100px";
      document.getElementById(temp3[0]).style.backgroundColor = "#086661";

    quantPixel++;
    temp4[0] = "p" + quantPixel;
    temp4[1] = criaPixel(temp4[0]);
    document.getElementById(temp4[0]).style.top = "40px";
    document.getElementById(temp4[0]).style.left = "120px";
      document.getElementById(temp4[0]).style.backgroundColor = "#086661";
}


function desceObj()
{
    movePixelBaixo(temp1[0]);
    movePixelBaixo(temp2[0]);
    movePixelBaixo(temp3[0]);
    movePixelBaixo(temp4[0]);
}

//Move para frente o Objeto Atual 20px
function moveFrenteObj()
{
    movePixelFrente(temp1[0]);
    movePixelFrente(temp2[0]);
    movePixelFrente(temp3[0]);
    movePixelFrente(temp4[0]);
}

//Move para atraz o Objeto Atua 20px
function moveAtrazObj()
{
    movePixelAtraz(temp1[0]);
    movePixelAtraz(temp2[0]);
    movePixelAtraz(temp3[0]);
    movePixelAtraz(temp4[0]);
}
//GNA  - GERADOR DE NUMEROS ALEATORIOS ////////////
function geraObjRandom()
{
    var num1 = parseInt(Math.random() * 6);
    switch (num1)
    {
        case 0:
            criaI();
            break;
        case 1:
            criaL();
            break;
        case 2:
            criaO();
            break;
        case 3:
            criaS();
            break;
        case 4:
            criaT();
            break;
        case 5:
            criaZ();
    }
}
// SUPER DETECTOR DE COLISAO ////////////////////////////////////////////////////////////////////////////////////

//Verifica Colisao de Giro
function verificaColPixel(nomePixel,tamanho,tipoMov)
{
    var Px = 0;
    var Py = 0;
    var XAlt = parseInt(document.getElementById(nomePixel).style.left);
    var YAlt = parseInt(document.getElementById(nomePixel).style.top);
    switch (tipoMov)
    {
        case "frente":
            XAlt += tamanho;
            break;
        case "atraz":
            XAlt -= tamanho;
            break;
        case "baixo":
            YAlt += tamanho;
            break;
        case "cima":
            YAlt -= tamanho;
    }
    if( (XAlt<0) || (XAlt>180) || (YAlt<0) || (YAlt>380) ) return true;
    for (b=1;b<(quantPixel-3);b++)
    {
        Px = parseInt(document.getElementById("p"+b).style.left);
        Py = parseInt(document.getElementById("p"+b).style.top);
        if( (Px == XAlt) && (Py == YAlt) ) return true;
    }
}

// Gira o Objeto I Atual
function giraI()
{
    switch (movimento)
    {
        case 1:
            if(verificaColPixel(temp2[0],20,"cima"))
                break;
            else if(verificaColPixel(temp2[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp3[0],40,"cima"))
                break;
            else if(verificaColPixel(temp3[0],20,"frente"))
                break;
            else if(verificaColPixel(temp4[0],60,"cima"))
                break;
            else if(verificaColPixel(temp4[0],40,"frente"))
                break;
            else
            {
            movePixelCima(temp2[0]);  //pixel 02
            movePixelAtraz(temp2[0]);
            movePixelCima(temp3[0]); //pixel 03
            movePixelCima(temp3[0]);
            movePixelFrente(temp3[0]);
            movePixelCima(temp4[0]); //pixel 04
            movePixelCima(temp4[0]);
            movePixelCima(temp4[0]);
            movePixelFrente(temp4[0]);
            movePixelFrente(temp4[0]);
            movimento = 2;
            break;
            }
        case 2:
            if(verificaColPixel(temp2[0],20,"baixo"))
                break;
            else if(verificaColPixel(temp2[0],20,"frente"))
                break;
            else if(verificaColPixel(temp3[0],40,"baixo"))
                break;
            else if(verificaColPixel(temp3[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp4[0],60,"baixo"))
                break;
            else if(verificaColPixel(temp4[0],40,"atraz"))
                break;
            else
            {
            movePixelBaixo(temp2[0]);
            movePixelFrente(temp2[0]);
            movePixelBaixo(temp3[0]);
            movePixelBaixo(temp3[0]);
            movePixelAtraz(temp3[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp4[0]);
            movePixelAtraz(temp4[0]);
            movePixelAtraz(temp4[0]);
            movimento = 1;
            break;
            }
    }
}

// Gira o Objeto L Atual
function giraL()
{
    switch (movimento)
    {
        case 1:
            if(verificaColPixel(temp1[0],40,"baixo"))
                break;
            else if(verificaColPixel(temp1[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp2[0],20,"frente"))
                break;
            else
            {
            movePixelBaixo(temp1[0]);
            movePixelBaixo(temp1[0]);
            movePixelAtraz(temp1[0]);
            movePixelFrente(temp2[0]);
            movimento = 2;
            break;
            }
        case 2:
            if(verificaColPixel(temp3[0],20,"frente"))
                break;
            else if(verificaColPixel(temp3[0],40,"cima"))
                break;
            else if(verificaColPixel(temp1[0],20,"frente"))
                break;
            else if(verificaColPixel(temp1[0],40,"cima"))
                break;
            else
            {
            movePixelFrente(temp3[0]);
            movePixelCima(temp3[0]);
            movePixelCima(temp3[0]);
            movePixelFrente(temp1[0]);
            movePixelCima(temp1[0]);
            movePixelCima(temp1[0]);
            movimento = 3;
            break;
            }
        case 3:
            if(verificaColPixel(temp1[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp1[0],40,"baixo"))
                break;
            else if(verificaColPixel(temp3[0],40,"atraz"))
                break;
            else if(verificaColPixel(temp3[0],20,"baixo"))
                break;
            else if(verificaColPixel(temp4[0],20,"cima"))
                break;
            else if(verificaColPixel(temp4[0],20,"atraz"))
                break;
            else
            {
            movePixelAtraz(temp1[0]);
            movePixelBaixo(temp1[0]);
            movePixelBaixo(temp1[0]);
            movePixelAtraz(temp3[0]);
            movePixelAtraz(temp3[0]);
            movePixelBaixo(temp3[0]);
            movePixelCima(temp4[0]);
            movePixelAtraz(temp4[0]);
            movimento = 4;
            break;
            }
        case 4:
            if(verificaColPixel(temp1[0],40,"cima"))
                break;
            else if(verificaColPixel(temp1[0],20,"frente"))
                break;
            else if(verificaColPixel(temp2[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp3[0],20,"frente"))
                break;
            else if(verificaColPixel(temp3[0],20,"baixo"))
                break;
            else if(verificaColPixel(temp4[0],20,"frente"))
                break;
            else if(verificaColPixel(temp4[0],20,"baixo"))
                break;
            {
            movePixelCima(temp1[0]);
            movePixelCima(temp1[0]);
            movePixelFrente(temp1[0]);
            movePixelAtraz(temp2[0]);
            movePixelFrente(temp3[0]);
            movePixelBaixo(temp3[0]);
            movePixelFrente(temp4[0]);
            movePixelBaixo(temp4[0]);
            movimento = 1;
            break;
            }
    }

}

//Gira o Obejto S Atual
function giraS()
{
    switch (movimento)
    {
        case 1:
            if(verificaColPixel(temp3[0],20,"frente"))
                break;
            else if(verificaColPixel(temp4[0],40,"cima"))
                break;
            else if(verificaColPixel(temp4[0],20,"frente"))
                break;
            else
            {
            movePixelFrente(temp3[0]);
            movePixelCima(temp4[0]);
            movePixelCima(temp4[0]);
            movePixelFrente(temp4[0]);
            movimento = 2;
            break;
            }
        case 2:
            if(verificaColPixel(temp3[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp4[0],40,"baixo"))
                break;
            else if(verificaColPixel(temp4[0],20,"atraz"))
                break;
            else
            {
            movePixelAtraz(temp3[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp4[0]);
            movePixelAtraz(temp4[0]);
            movimento = 1;
            }
    }
}

//Gira o Objeto Z Atual
function giraZ()
{
    switch (movimento)
    {
        case 1:
            if(verificaColPixel(temp1[0],40,"frente"))
                break;
            else if(verificaColPixel(temp4[0],40,"cima"))
                break;
            else
            {
            movePixelFrente(temp1[0]);
            movePixelFrente(temp1[0]);
            movePixelCima(temp4[0]);
            movePixelCima(temp4[0]);
            movimento = 2;
            break;
            }
        case 2:
            if(verificaColPixel(temp1[0],40,"atraz"))
                break;
            else if(verificaColPixel(temp4[0],40,"baixo"))
                break;
            else
            {
            movePixelAtraz(temp1[0]);
            movePixelAtraz(temp1[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp4[0]);
            movimento = 1;
            }
    }
}

// Gira o Objeto T Atual
function giraT()
{
    switch (movimento)
    {
        case 1:
            if(verificaColPixel(temp4[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp4[0],20,"baixo"))
                break;
            else
            {
            movePixelAtraz(temp4[0]);
            movePixelBaixo(temp4[0]);
            movimento = 2;
            break;
            }
        case 2:
            if(verificaColPixel(temp1[0],20,"frente"))
                break;
            else if(verificaColPixel(temp1[0],20,"baixo"))
                break;
            else
            {
            movePixelFrente(temp1[0]);
            movePixelBaixo(temp1[0]);
            movimento = 3;
            break;
            }
        case 3:
            if(verificaColPixel(temp2[0],20,"cima"))
                break;
            else if(verificaColPixel(temp2[0],20,"frente"))
                break;
            else
            {
            movePixelCima(temp2[0]);
            movePixelFrente(temp2[0]);
            movimento = 4;
            break;
            }
        case 4:
            if(verificaColPixel(temp1[0],20,"cima"))
                break;
            else if(verificaColPixel(temp1[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp2[0],20,"baixo"))
                break;
            else if(verificaColPixel(temp2[0],20,"atraz"))
                break;
            else if(verificaColPixel(temp4[0],20,"cima"))
                break;
            else if(verificaColPixel(temp4[0],20,"frente"))
                break;
            else
            {
            movePixelCima(temp1[0]);
            movePixelAtraz(temp1[0]);
            movePixelBaixo(temp2[0]);
            movePixelAtraz(temp2[0]);
            movePixelCima(temp4[0]);
            movePixelFrente(temp4[0]);
            movimento = 1;
            break;
            }
    }
}

// Girador do Objeto Atual
function giraObj()
{
    switch (tipoObj)
    {
        case "I":
            giraI();
            break;
        case "S":
            giraS();
            break;
        case "Z":
            giraZ();
            break;
        case "T":
            giraT();
            break;
        case "L":
            giraL();
            break;
    }
}

//Variaveis para a Captura Posicao Atual o Objeto
poy = new Array(4);
pox = new Array(4);
for(b=1;b<=4;b++)  // Atribui Zeros as matrizes
{
    poy[b] = 0;
    pox[b] = 0;
}

// Captura a Posicao do Objeto Atual
function captaPosObj()
{
    pox[1] = parseInt(document.getElementById(temp1[0]).style.left);
    pox[2] = parseInt(document.getElementById(temp2[0]).style.left);
    pox[3] = parseInt(document.getElementById(temp3[0]).style.left);
    pox[4] = parseInt(document.getElementById(temp4[0]).style.left);

    poy[1] = parseInt(document.getElementById(temp1[0]).style.top);
    poy[2] = parseInt(document.getElementById(temp2[0]).style.top);
    poy[3] = parseInt(document.getElementById(temp3[0]).style.top);
    poy[4] = parseInt(document.getElementById(temp4[0]).style.top);
    //window.alert(poy[1]+";"+poy[2]+";"+poy[3]+";"+poy[4]);
}

//verifica Colisao do Objeto com pixeis Abaixo
function verificaColBaixo()
{
    var Px = 0;
    var Py = 0;
    captaPosObj();
     for (c=1;c<=4;c++)
     {
     //window.alert("x: "+pox[c]+"; y: "+poy[c]);
     if(poy[c] == 380) return true;
     }
    for (b=1;b<(quantPixel-3);b++)
    {
        Px = parseInt(document.getElementById("p"+b).style.left);
        Py = parseInt(document.getElementById("p"+b).style.top);
        for (c=1;c<=4;c++)
        {
            //window.alert("x: "+pox[c]+"; y: "+poy[c]);
            if( (pox[c] == Px) && ((poy[c] + 20) == Py) ) return true;
        }
    }
}

//verifica Colisao do Objeto com pixeis Frente
function verificaColFrente()
{
    Px = 0;
    Py = 0;
    captaPosObj();
    for (c=1;c<=4;c++)
    {
        if(pox[c] == 180) return true;
    }
    for (c=1;c<(quantPixel-3);c++)
    {
        Px = parseInt(document.getElementById("p"+c).style.left);
        Py = parseInt(document.getElementById("p"+c).style.top);
        for (b=1;b<=4;b++)
        {
            if( (poy[b] == Py) && ((pox[b] + 20) == Px) ) return true;
        }
    }
}

//verifica Colisao do Objeto com pixeis Frente
function verificaColAtraz()
{
    Px = 0;
    Py = 0;
    captaPosObj();
    for (c=1;c<=4;c++)
    {
        if(pox[c] == 0) return true;
    }
    for (c=1;c<(quantPixel-3);c++)
    {
        Px = parseInt(document.getElementById("p"+c).style.left);
        Py = parseInt(document.getElementById("p"+c).style.top);
        for (b=1;b<=4;b++)
        {
            if( (poy[b] == Py) && ((pox[b] - 20) == Px) ) return true;
        }
    }
}

//Limita e detecta colisoes em eixo X
function limitaMoveFrente()
{
    if(!verificaColFrente())
        moveFrenteObj();
}

function limitaMoveAtraz()
{
    if(!verificaColAtraz())
        moveAtrazObj();
}

// DETECTOR DE LINHAS COMPLETAS //////////////////////////////////////////////////////////////////////

//desce linhas pixeis
function descePixeis(posit)
{
    var Px = 0;
    var Py = 0;
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 100;
    switch (parseInt(document.getElementById("score").innerHTML))
    {
        case 500:
            corPixel = "#00FF00";
            break;
        case 1000:
            corPixel = "#0000FF";
            break;
        case 1500:
            corPixel = "#FFFF00";
            break;
        case 2000:
            corPixel = "#00FFFF";
            break;
        case 2500:
            corPixel = "#FF00FF";
            break;
        case 3000:
            corPixel = "#C0C0C0";
            break;
        case 3500:
            corPixel = "#FFFFFF";
            break;
        case 4000:
            alert("VOCE GANHOU!!! PARABENS!!!");
            window.location.reload();
            break;
    }


    for (c=1;c<(quantPixel-3);c++)
    {
        Px = parseInt(document.getElementById("p"+c).style.left);
        Py = parseInt(document.getElementById("p"+c).style.top);
        //window.alert("x: "+Px+"; y: "+Py);
        if(Py == posit)
        {
        document.getElementById("p"+c).style.top = "400px";
        document.getElementById("p"+c).style.display = "none";
        }
        if( Py < posit ) movePixelBaixo("p"+c);
    }
}

//Detecta Linha Completa
function buscaLinhas()
{
    var totalX = 0;
    for (f=380;f>0;f-=20)
    {
        totalX = 0;
        for (c=1;c<(quantPixel-3);c++)
        {
        Py = parseInt(document.getElementById("p"+c).style.top);
        if(Py == 0) window.location.reload();
        if(Py == f) totalX++;
        }
        if(totalX == 10) descePixeis(f);
    }

}

// Funcao Final
function Play()
{
    buscaLinhas();
   if(!verificaColBaixo())
   {
        desceObj();
   }
   else
   {
        if(downVar) clearInterval(timer2);
        downVar = false;
        movimento = 1;
        geraObjRandom();
   }
}

////CONTROLE DE OBJETO PELO TECLADO /////////////////////////////////////////////////////////////////////
downVar = false;
function verifaTeclaPress(e)
{
    var codTecla;
    if(window.event)
        codTecla = window.event.keyCode;
    else
        if(e)
            codTecla = e.which;

        //verifica tecla
        switch (codTecla)
        {
            case 39:             // --->
                limitaMoveFrente();
                break;
            case 37:             // <---
                limitaMoveAtraz();
                break;
            case 38:             // UP
                giraObj();
                break;
            case 40:
                timer2 = setInterval("Play()",10);
                downVar = true;

        }
}
function verifaTeclaPress2(e)
{
    var codTecla;
    if(window.event)
        codTecla = window.event.keyCode;
    else
        if(e)
            codTecla = e.which;

        //verifica tecla
        switch (codTecla)
        {
            case 40:
                clearInterval(timer2);
                downVar = true;

        }
}
// CARREGA EVENTOS NO BOTOES /////////////////////////////////////////////////////////////////////////////////////
function redimen()
{
    tamanhoWin = document.body.clientWidth;
    tamanhoDisplay = document.getElementById("conteudo").clientWidth;
    tamanhobtPlay = document.getElementById("btPlay").clientWidth;
    document.getElementById("conteudo").style.left = parseInt(tamanhoWin / 2) - parseInt(tamanhoDisplay / 2);
    document.getElementById("pontos").style.left = parseInt(tamanhoWin / 2) + parseInt(tamanhoDisplay / 2) + 10;
    document.getElementById("btPlay").style.left = parseInt(tamanhoWin / 2) - parseInt(tamanhobtPlay / 2);
}

function carrega()
{
    document.getElementById("btPlay").onclick = function ()
                                                 {
                                                    geraObjRandom();
                                                    timer1 = setInterval("Play()",1000);
                                                    document.getElementById("btPlay").style.display="none";
                                                    document.onkeydown = verifaTeclaPress;
                                                    document.onkeyup = verifaTeclaPress2;
                                                 }
   redimen();
}
window.onload = carrega;
window.onresize = redimen;
