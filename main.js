function microondas (segundos, comida){
    const pipocaTime = 10;
    const brigadeiroTime = 8;
    const feijaoTime = 12;
    const carneTime = 15;

   
    if(comida==="pipoca" && segundos===pipocaTime){
        return console.log("Prato pronto, bom apetite!");
    } else if(comida==="pipoca" && segundos>=pipocaTime*3){
        return console.log("Kabum");
    }else if(comida==="pipoca" && segundos>=pipocaTime*2){
        return console.log("a comida queimou");
    }else if(comida==="pipoca" && segundos<pipocaTime){
        return console.log("tempo insuficiente");
    }

    if(comida==="brigadeiro" && segundos===brigadeiroTime){ 
        return console.log("Prato pronto, bom apetite!");
    } else if(comida==="brigadeiro" && segundos>=brigadeiroTime*3){
        return console.log("Kabum");
    }else if(comida==="brigadeiro" && segundos>=brigadeiroTime*2){
        return console.log("a comida queimou");
    }else if(comida==="brigadeiro" && segundos<brigadeiroTime){
        return console.log("tempo insuficiente");
    }

    if(comida==="feijao" && segundos===feijaoTime){
        return console.log("Prato pronto, bom apetite!");
    } else if(comida==="feijao" && segundos>=feijaoTime*3){
        return console.log("Kabum");
    }else if(comida==="feijao" && segundos>=feijaoTime*2){
        return console.log("a comida queimou");
    }else if(comida==="feijao" && segundos<feijaoTime){
        return console.log("tempo insuficiente");
    }

    if(comida==="carne" && segundos===carneTime){
        return console.log("Prato pronto, bom apetite!");
    } else if(comida==="carne" && segundos>=carneTime*3){
        return console.log("Kabum");
    }else if(comida==="carne" && segundos>=carneTime*2){
        return console.log("a comida queimou");
    }else if(comida==="carne" && segundos<carneTime){
        return console.log("tempo insuficiente");
    }else{return ''}
    
}

microondas(5, "carne");