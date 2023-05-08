function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function NRZL(bits){
    var result = [];
    for(var i = 0; i < bits.length; i++){
      let symbol = '----';
      if (parseInt(bits[i].value) == 1) symbol = '▔▔';
      if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i-1].value) == 0) symbol = '|▔▔';
      if (parseInt(bits[i].value) == 0) symbol = '___';
      if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i-1].value) == 1) symbol = '|___';
      result.push(symbol);
    }
    return result;
  }

  
  function NRZM(bits){
    var result = [];
    level = 0;
    for(var i = 0; i< bits.length; i++){
      let symbol = '----';
      if(parseInt(bits[i].value) == 1 && level == 0){
        symbol = '|▔▔';
        level = 1;
      }else if(parseInt(bits[i].value) == 1 && level == 1){
        symbol = '|___';
        level = 0;
      }else if(parseInt(bits[i].value) == 0 && level == 0){
        symbol = '____';
      }else if(parseInt(bits[i].value) == 0 && level == 1){
        symbol = '▔▔';
      }
      result.push(symbol);
    }
    return result;
  }

  function NRZS(bits){
    var result = [];
    level = 0;
    for(var i = 0; i<bits.length; i++){
      let symbol = '----';
      if(parseInt(bits[i].value) == 0 && level == 0){
        symbol = '|▔▔';
        level = 1;
      }else if(parseInt(bits[i].value) == 0 && level == 1){
        symbol = '|___';
        level = 0;
      }else if(parseInt(bits[i].value) == 1 && level == 0){
        symbol = '____';
      }else if(parseInt(bits[i].value) == 1 && level == 1){
        symbol = '▔▔';
      }
      result.push(symbol);
    }
    return result;
  }
  function RZ(bits){
    var result = [];
    for(var i = 0; i<bits.length; i++){
      let symbol = '----';
      if(parseInt(bits[i].value) == 0) symbol = '____';
      if(parseInt(bits[i].value) == 1) symbol = '__|▔|';
      result.push(symbol);
    }
    return result;
  }
  function BL(bits){
    var result = [];
    for(var i = 0; i<bits.length; i++){
      let symbol = '----';
      if(parseInt(bits[i].value) == 0) symbol = '__|▔';
      if(parseInt(bits[i].value) == 1) symbol = '▔|__';
      if(parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i-1].value) == 0) symbol = '|__|▔';
      if(parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i-1].value) == 1) symbol = '|▔|__';
      result.push(symbol);
    }
    return result;
  }
  function BS(bits){
    var result = [];
    level = 0;
    for(var i = 0; i<bits.length; i++){
      let symbol = '----';
      if(parseInt(bits[i].value) == 0 && level == 0){
        symbol = '|▔|__';
      }
      else if(parseInt(bits[i].value) == 0 && level == 1){
        symbol = '|__|▔';
      }
      else if(parseInt(bits[i].value) == 1 && level == 0){
        symbol = '|▔▔';
        level = 1;
      }
      else if(parseInt(bits[i].value) == 1 && level == 1){
        symbol = '|____';
        level = 0;
      }
      result.push(symbol);
    }
    return result;
  }
 


