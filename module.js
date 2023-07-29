import { initializeSettings } from "./settings.js";
Hooks.once("init", function () {
  initializeSettings();
});


Hooks.on("getVehicleBaseActorSheetHeaderButtons",(sheet, buttons)=>{
  console.log(sheet,buttons);
    const target = (sheet.actor);
      console.log(target);
      buttons.unshift({
          class: 'trade-button',
          label: 'Trade',
          icon: 'fa-solid fa-credit-card',
          onclick: () => {
              main(target);
          }
      });
  });

 async function main(target){

var crew= target.system.crewMembers;
    new Dialog({
      title: "Planetary Trade",
      content: "",
      buttons: {
        buttonA: {
          label: "Buy",
          callback: () => {
            buildBuy(crew, target);
          }
        },
        no: {
          label: "Sell",
          callback: () => {
            buildSell(crew, target);
          }
        }
      },
        default: 'buttonA',
    }).render(true)

  }

  async function buildConfirm(price, cargo, amount, target, space){
    new Dialog({
      title: "Confirm",
      content: "You managed to negotiate of "+price+" for each ton of "+cargo.cargo+". With "+amount+" tons thats a total price of "+ +price * +amount +" credits. Is it a deal?",
      buttons: {
        buttonA: {
          label: "Deal",
          callback:(html)=>{
            if(target.system.creditPool< price*amount){
              ui.notifications.error("Insufficient Funds");
              return
            }
            var curCargo = target.system.cargoCarried;
            console.log(curCargo);
var tempCargo = {
  name: cargo.cargo, 
  value: cargo.baseCost, 
  max: amount
};   
if (curCargo.length<1) {
  curCargo =[];
}
curCargo.push(tempCargo);     

var curTonnage = target.system.cargo.value;
var finalDeduction = price*amount;
var cP = target.system.creditPool;
var newMoney = cP - finalDeduction;
var newTonnage = +curTonnage - +space;
updateCargo(curCargo, target, newMoney, newTonnage);
          }
        }
      }
    }).render(true);
  }

  async function buildSaleConfirm(price, cargo, amount, target, cargoFile, space){
    new Dialog({
      title: "Confirm",
      content: "You managed to negotiate of "+price+" for each ton of "+cargo.cargo+". With "+amount+" tons thats a total price of "+ +price * +amount +" credits. Is it a deal?",
      buttons: {
        buttonA: {
          label: "Deal",
          callback:(html)=>{
            var curCargo = target.system.cargoCarried;
            var curTonnage = target.system.cargo.value;
            var index = curCargo.indexOf(cargoFile);
            var x = curCargo.splice(index, 1);
            console.log(x);
            console.log(index);
var finalAddition = price*amount;
var cP = target.system.creditPool;
var newMoney = cP + finalAddition;
var newTonnage = +curTonnage + +space;
updateCargo(curCargo, target, newMoney, newTonnage);
          }
        }
      }
    }).render(true);
  }

  async function updateCargo(newCargo, target, newCash, tonnage){
    target.update({'system.cargoCarried': newCargo});
    target.update({'system.cargo.value': tonnage});
    target.update({'system.creditPool': newCash});
  }

  async function buildBuy(crew, target){
  var cargo = await game.settings.get('tradelord','tradegoodsStore');
  var tagStore = await game.settings.get('tradelord','tagStore');
  var worlds = game.settings.get('tradelord','worldStore');
  console.log(cargo);
    var crewNames =[];
    for (let i = 0; i < crew.length; i++) {
      const element = crew[i];
      var actor = game.actors.get(element);
      var name = actor.name;
      crewNames.push(name);
    }

  var myContent = `
          <div class="form-group">
            <label for="Buyer">Who is negotiating?</label>
            <select name="Buyer">`
  
  for (var i = 0; i < crewNames.length; i++){
    myContent += `
                  <option value="${crewNames[i]}">${crewNames[i]}</option>`
  };
  
  myContent += `
            </select>
          </div> <div>
          What are you buying?
          <select name="cargo">`
   for (var c = 0; c < cargo.length; c++){
            myContent += `
                          <option value="${cargo[c].cargo}">${cargo[c].cargo}</option>`
          };  
        myContent += `</select>
          </div>
          <div>
          <label for="tonnage">How much?:</label>
          <input type="number" name="amount">
          </div>
          <div>
          <label for="World">Economy:</label>
          <select name="world">
          `
          for (var t = 0; t < worlds.length; t++){
            myContent += `
                          <option value="${worlds[t].name}">${worlds[t].name}</option>`
          };  

          myContent +=`

          </select>
          </div>
          `
      
          

    new Dialog({
      title: "Planetary Trade",
      content: myContent,
      buttons: {
        buttonA: {
          label: "Roll!",
          callback: async(html) => {
            let buyer = html.find('[name="Buyer"]').val();
            let selectedCargo = html.find('[name="cargo"]').val();
            let amount = html.find('[name="amount"]').val();
            let worldPicked = html.find('[name="world"]').val();
            var world = worlds.find(o=> o.name === worldPicked);
            console.log(world);
            var actor = game.actors.getName(buyer);
            console.log(actor);
            var skill = actor.items._source.find( s=> s.name === "Trade");
            var rank = skill.system.rank;
            var attr = actor.system.stats.cha.bonus;
            console.log(skill);
            var cargoObj = cargo.find(o=> o.cargo === selectedCargo);
            //set mod
            var rollMod = 0;
            if(cargoObj.tag.includes('Compact')){
              var space = amount/10;
            } else if (cargoObj.tag.includes('Bulky')){
              var space = amount*10;
            } else {
              var space = amount;
            }
if (target.system.cargo.value < space) {
  ui.notifications.error("You don't have room for that much. Max amount is: "+ target.system.cargo.value +"");
  buildBuy(crew, target, space);
  return;
}  
          var tagstemp = Object.values(world.tags);
          var worldTags = [];
          tagstemp.forEach(element => {
            var tagsHelp = Object.keys(element);
            worldTags.push(tagsHelp[0])
          });
            for (let int = 0; int < tagstemp.length; int++) {
              var tagFinal = worldTags[int];
              console.log(worldTags);
              console.log(tagFinal);
              if(cargoObj.tag.includes(tagFinal)){
                console.log(world.tags);
               var mod = world.tags[int][tagFinal];
               console.log("Mod: ",mod);
               var newNum = parseInt(mod);
                  rollMod += newNum; 
              }
            }
            var friction = parseInt(world.friction);
            rollMod += friction;
            let roll = await new Roll("(3d6-(@skill+@attr))+@mods",{skill: rank, attr: attr, mods: rollMod});
            await roll.toMessage();
           //conpare to table
            var priceMod = 0
            console.log(roll._total);
            console.log(roll);
            switch (roll._total) {
              case 1:
                priceMod = 0.9;
                break;
              case 2:
                priceMod = 0.9;
                break;
              case 3:
                priceMod = 0.7;
                break;
                case 4:
                  priceMod = 0.6;
                  break;
                  case 5:
                    priceMod = 0.5; 
                    break;
                    case 6:
                      priceMod = 0.4;
                      break;
                      case 7:
                        priceMod = 0.3;
                        break;
                        case 8:
                          priceMod = 0.2; 
                          break;
                          case 9:
                            priceMod = 0.1;
                            break;
                            case 10:
                              priceMod = 0;
                              break;
                              case 11:
                                priceMod = 0;
                                break;
                                case 12:
                                  priceMod = 0.1;
                                  break;
                                  case 13:
                                    priceMod = 0.2;
                                    break;
                                    case 14:
                                      priceMod = 0.4;
                                      break;
                                      case 15:
                                        priceMod = 0.6;
                                        break;
                                        case 16:
                                          priceMod = 0.8;
                                          break;
                                          case 17:
                                            priceMod = 1;
                                            break;
                                            case 18:
                                              priceMod = 1.5;
                                              break;
                                              case 19 || 20 || 21:
                                                priceMod = 2;
                                                break;
            }
            var cost = cargoObj.baseCost;
            var change = cost*priceMod;
           if (roll._total < 10) {
            var finalPrice = +cost - +change;
           } else {
            var finalPrice = +cost + +change;
           }
console.log(finalPrice);
buildConfirm(finalPrice,cargoObj,amount, target, space);
          }
        }
      },
        default: 'buttonA',
    }).render(true)



  }

  async function buildSell(crew, target){
    var cargo = await game.settings.get('tradelord','tradegoodsStore');
    var tagStore = await game.settings.get('tradelord','tagStore');
    var worlds = game.settings.get('tradelord','worldStore');
    var shipCargo = target.system.cargoCarried;
    var crewNames =[];
    for (let i = 0; i < crew.length; i++) {
      const element = crew[i];
      var actor = game.actors.get(element);
      var name = actor.name;
      crewNames.push(name);
    }

  var myContent = `
          <div class="form-group">
            <label for="Buyer">Who is negotiating?</label>
            <select name="Buyer">`
  
  for (var i = 0; i < crewNames.length; i++){
    myContent += `
                  <option value="${crewNames[i]}">${crewNames[i]}</option>`
  };
  
  myContent += `
            </select>
          </div> <div>
          What are you buying?
          <select name="cargo">`
   for (var c = 0; c < shipCargo.length; c++){
            myContent += `
                          <option value="${shipCargo[c].name}">${shipCargo[c].name}</option>`
          };  
        myContent += `</select>
          </div>
          <div>
          <label for="World">Economy:</label>
          <select name="world">
          `
          for (var t = 0; t < worlds.length; t++){
            myContent += `
                          <option value="${worlds[t].name}">${worlds[t].name}</option>`
          };  

          myContent +=`

          </select>
          </div>
          `
      
          

    new Dialog({
      title: "Planetary Trade",
      content: myContent,
      buttons: {
        buttonA: {
          label: "Roll!",
          callback: async(html) => {
            let buyer = html.find('[name="Buyer"]').val();
            let selectedCargo = html.find('[name="cargo"]').val();
            let selectedWorld = html.find('[name="world"]').val();
            var world = worlds.find(w=>w.name === selectedWorld)
            console.log(world);
            var actor = game.actors.getName(buyer);
            var skill = actor.items._source.find( s=> s.name === "Trade");
            var rank = skill.system.rank;
            var attr = actor.system.stats.cha.bonus;
            console.log(skill);
            var cargoObj = cargo.find(o=> o.cargo === selectedCargo);
            var cargoFile = target.system.cargoCarried.find(f=>f.name === selectedCargo);
            var amount = cargoFile.max;
            if(cargoObj.tag.includes('Compact')){
              var space = amount/10;
            } else if (cargoObj.tag.includes('Bulky')){
              var space = amount*10;
            } else {
              var space = amount;
            }
            //set mod
            var rollMod = 0;
            //tag checking
            var tagstemp = Object.values(world.tags);
            var worldTags = [];
            tagstemp.forEach(element => {
              var tagsHelp = Object.keys(element);
              worldTags.push(tagsHelp[0])
            });
              for (let int = 0; int < tagstemp.length; int++) {
                var tagFinal = worldTags[int];
                console.log(worldTags);
                console.log(tagFinal);
                if(cargoObj.tag.includes(tagFinal)){
                  console.log(world.tags);
                 var mod = world.tags[int][tagFinal];
                 console.log("Mod: ",mod);
                 var newNum = parseInt(mod);
                    rollMod += newNum; 
                }
              }
                        var friction = parseInt(world.friction);
                        rollMod += friction;
            let roll = await new Roll("(3d6+(@skill+@attr))+@mods",{skill: rank, attr: attr, mods: rollMod});
            await roll.toMessage();
           //conpare to table
            var priceMod = 0
            console.log(roll._total);
            console.log(roll);
            switch (roll._total) {
              case 1:
                priceMod = 0.9;
                break;
              case 2:
                priceMod = 0.9;
                break;
              case 3:
                priceMod = 0.7;
                break;
                case 4:
                  priceMod = 0.6;
                  break;
                  case 5:
                    priceMod = 0.5; 
                    break;
                    case 6:
                      priceMod = 0.4;
                      break;
                      case 7:
                        priceMod = 0.3;
                        break;
                        case 8:
                          priceMod = 0.2; 
                          break;
                          case 9:
                            priceMod = 0.1;
                            break;
                            case 10:
                              priceMod = 0;
                              break;
                              case 11:
                                priceMod = 0;
                                break;
                                case 12:
                                  priceMod = 0.1;
                                  break;
                                  case 13:
                                    priceMod = 0.2;
                                    break;
                                    case 14:
                                      priceMod = 0.4;
                                      break;
                                      case 15:
                                        priceMod = 0.6;
                                        break;
                                        case 16:
                                          priceMod = 0.8;
                                          break;
                                          case 17:
                                            priceMod = 1;
                                            break;
                                            case 18:
                                              priceMod = 1.5;
                                              break;
                                              case 19 || 20 || 21:
                                                priceMod = 2;
                                                break;
            }
            var cost = cargoObj.baseCost;
            var change = cost*priceMod;
           if (roll._total < 10) {
            var finalPrice = +cost - +change;
           } else {
            var finalPrice = +cost + +change;
           }
console.log(finalPrice);
buildSaleConfirm(finalPrice,cargoObj,amount, target, cargoFile, space);
          }
        }
      },
        default: 'buttonA',
    }).render(true)



  }