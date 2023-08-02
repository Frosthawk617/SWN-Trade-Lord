const quickClass = [
    {
        class: "Expert-Smart",
        attributes: [
            10,
            12,
            11,
            14,
            7,
            9
        ],
        hp: "1d6",
        ab:0
    },
    {
        class: "Expert-Smooth",
        attributes: [
            7,
            9,
            10,
            12,
            11,
            14
        ],
        hp: "1d6",
        ab:0
    },
    {
        class: "Expert-Nimble",
        attributes: [
            10,
            14,
            12,
            11,
            9,
            7
        ],
        hp: "1d6",
        ab:0
    },
    {
        class: "Warrior-Melee",
        attributes: [
            14,
            9,
            12,
            7,
            10,
            11
        ],
        hp: "1d6+2",
        ab:1
    },
    {
        class: "Warrior-Ranged",
        attributes: [
            9,
            14,
            12,
            10,
            7,
            11
        ],
        hp: "1d6+2",
        ab:1
    },
    {
        class: "Warrior-Leader",
        attributes: [
            7,
            10,
            9,
            11,
            12,
            14
        ],
        hp: "1d6+2",
        ab:1
    },
    {
        class: "Psychic-Seer",
        attributes: [
            9,
            11,
            12,
            10,
            14,
            17
        ],
        hp: "1d6",
        ab:0
    },
    {
        class: "Psychic-Adept",
        attributes: [
            12,
            10,
            14,
            9,
            11,
            7
        ],
        hp: "1d6+1",
        ab:0
    }
]

const quickBackground = [
    {
        background: "Barbarian",
        skills: [
            'Survive',
            'Notice',
            'Any Combat'
        ]
    },
    {
        background: "Clergy",
        skills: [
            'Talk',
            'Perform',
            'Know'
        ]
    },
    {
        background: "Courtesan",
        skills: [
            'Perform',
            'Notice',
            'Connect'
        ]
    },
    {
        background: "Criminal",
        skills: [
            'Connect',
            'Sneak',
            'Talk'
        ]
    },
    {
        background: "Dilettante",
        skills: [
            'Connect',
            'Know',
            'Talk'
        ]
    },
    {
        background: "Entertainer",
        skills: [
            'Perform',
            'Talk',
            'Connect'
        ]
    },
    {
        background: "Merchant",
        skills: [
            'Trade',
            'Talk',
            'Connect'
        ]
    },
    {
        background: "Noble",
        skills: [
            'Lead',
            'Connect',
            'Administer'
        ]
    },
    {
        background: "Official",
        skills: [
            'Administer',
            'Talk',
            'Connect'
        ]
    },
    {
        background: "Peasant",
        skills: [
            'Exert',
            'Sneak',
            'Survive'
        ]
    },
    {
        background: "Physician",
        skills: [
            'Heal',
            'Know',
            'Notice'
        ]
    },
    {
        background: "Pilot",
        skills: [
            'Pilot',
            'Fix',
            'Shoot or Trade'
        ]
    },
    {
        background: "Politician",
        skills: [
            'Talk',
            'Lead',
            'Connect'
        ]
    },
    {
        background: "Scholar",
        skills: [
            'Know',
            'Administer',
            'Connect'
        ]
    },
    {
        background: "Soldier",
        skills: [
            'Any Combat',
            'Exert',
            'Survive'
        ]
    },
    {
        background: "Spacer",
        skills: [
            'Fix',
            'Pilot',
            'Program'
        ]
    },
    {
        background: "Technician",
        skills: [
            'Fix',
            'Notice',
            'Exert'
        ]
    },
    {
        background: "Thug",
        skills: [
            'Any Combat',
            'Talk',
            'Connect'
        ]
    },
    {
        background: "Vagabond",
        skills: [
            'Notice',
            'Sneak',
            'Survive'
        ]
    },
    {
        background: "Worker",
        skills: [
            'Connect',
            'Exert',
            'Work'
        ]
    }
]

const quickFoci = [
    {class: "Expert-Smart",
    foci: [
        {
            foci_1: "Specialist/Fix",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Hacker",
            foci_2: "Tinker"
        },
        {
            foci_1: "Specialist/Know",
            foci_2: "Tinker"
        },
        {
            foci_1: "Specialist/Fix",
            foci_2: "Tinker"
        },
        {
            foci_1: "Healer",
            foci_2: "Ironhide"
        },
        {
            foci_1: "Specialist/Fix",
            foci_2: "Hacker"
        }
    ]},
    {class: "Expert-Smooth",
    foci: [
        {
            foci_1: "Diplomat",
            foci_2: "Connected"
        },
        {
            foci_1: "Specialist/Talk",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Diplomat",
            foci_2: "Alert"
        },
        {
            foci_1: "Specialist/Lead",
            foci_2: "Authority"
        },
        {
            foci_1: "Healer",
            foci_2: "Specialist/Talk"
        },
        {
            foci_1: "Specialist/Notice",
            foci_2: "Specialist/Talk"
        }
    ]
    },
    {class: "Expert-Nimble",
    foci: [
        {
            foci_1: "Specialist/Pilot",
            foci_2: "Starfarer"
        },
        {
            foci_1: "Healer",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Tinker",
            foci_2: "Gunslinger"
        },
        {
            foci_1: "Specialist/Sneak",
            foci_2: "Assassin"
        },
        {
            foci_1: "Specialist/Sneak",
            foci_2: "Specialist/Exert"
        },
        {
            foci_1: "Specialist/Entertain",
            foci_2: "Specialist/Sneak"
        }
        
    ]},    
    {class: "Warrior-Melee",
    foci: [
        {
            foci_1: "Savage Fray",
            foci_2: "Shocking Assault"
        },
        {
            foci_1: "Assassin",
            foci_2: "Specialist/Sneak"
        },
        {
            foci_1: "Armsman",
            foci_2: "Close Combatant"
        },
        {
            foci_1: "Close Combatant",
            foci_2: "Savage Fray"
        },
        {
            foci_1: "Ironhide",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Unarmed Combatant",
            foci_2: "Close Combatant"
        }
        
    ]},    
    {class: "Warrior-Ranged",
    foci: [
        {
            foci_1: "Gunslinger",
            foci_2: "Close Combatant"
        },
        {
            foci_1: "Sniper",
            foci_2: "Specialist/Sneak"
        },
        {
            foci_1: "Assassin",
            foci_2: "Specialist/Sneak"
        },
        {
            foci_1: "Ironhide",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Gunslinger",
            foci_2: "Tinker"
        },
        {
            foci_1: "Close Combat",
            foci_2: "Alert"
        }
        
    ]},    
    {class: "Warrior-Leader", 
    foci:[
        {
            foci_1: "Gunslinger",
            foci_2: "Authority"
        },
        {
            foci_1: "Ironhide",
            foci_2: "Connected"
        },
        {
            foci_1: "Armsman",
            foci_2: "Specialist/Lead"
        },
        {
            foci_1: "Gunslinger",
            foci_2: "Specialist/Talk"
        },
        {
            foci_1: "Assassin",
            foci_2: "Die Hard"
        },
        {
            foci_1: "Close Combatant",
            foci_2: "Henchkeeper"
        }
        
    ]},    
    {class: "Psychic-Seer",
    foci: [
        {
            foci_1: "Alert"
        },
        {
            foci_1: "Healer"
        },
        {
            foci_1: "Specialist/Notice"
        },
        {
            foci_1: "Psychic Training"
        },
        {
            foci_1: "Savage Fray"
        },
        {
            foci_1: "Hacker"
        }
        
    ]},    
    {class: "Psychic-Adept",
    foci: [
        {
            foci_1: "Armsman"
        },
        {
            foci_1: "Ironhide"
        },
        {
            foci_1: "Die Hard"
        },
        {
            foci_1: "Psychic Training"
        },
        {
            foci_1: "Healer"
        },
        {
            foci_1: "Unarmed Combatant"
        }
    ]}
]

const skills = {
    none: [],
    spaceMagic: ["knowMagic", "useMagic", "sunblade", "fight"],
    classic: [
        "artist",
        "athletics",
        "bureaucracy",
        "business",
        "combat-energy",
        "combat-gunnery",
        "combat-primitive",
        "combat-projectile",
        "combat-psitech",
        "combat-unarmed",
        "computer",
        "culture-alien",
        "culture-criminal",
        "culture-spacer",
        "culture-traveller",
        "culture",
        "culture",
        "culture",
        "exosuit",
        "gambling",
        "history",
        "instructor",
        "language",
        "leadership",
        "navigation",
        "perception",
        "persuade",
        "profession",
        "religion",
        "science",
        "security",
        "stealth",
        "steward",
        "survival",
        "tactics",
        "tech-astronautic",
        "tech-maltech",
        "tech-medical",
        "tech-postech",
        "tech-pretech",
        "tech-psitech",
        "vehicle-air",
        "vehicle-grav",
        "vehicle-land",
        "vehicle-space",
        "vehicle-water",
    ],
    revised: [
        "administer",
        "connect",
        "exert",
        "fix",
        "heal",
        "know",
        "lead",
        "notice",
        "perform",
        "pilot",
        "program",
        "punch",
        "shoot",
        "sneak",
        "stab",
        "survive",
        "talk",
        "trade",
        "work",
    ],
    psionic: [
        "biopsionics",
        "metapsionics",
        "precognition",
        "telekinesis",
        "telepathy",
        "teleportation",
    ],
};


const packages = {
    barbarian: {
        weapons: [
            {
                name: "Spear",
                type: "Medium primitive weapon"
            },
            {
                name: "Knife",
                type: "Small primitive weapon"
            }
        ],
        armor: [
            "Leather jacks, thick hides, quilted armor",
            "Shield"
        ],
        gear: [
            "Backpack (TL0)",
            "7 days rations",
            "20m rope"
        ],
        credits: 500
    },
    blade: {
        weapons: [
            {
                name: "Monoblade sword",
                type: "Medium advanced weapon"
            },
            {
                name: "Knife",
                type: "Small advanced weapon"
            }
        ],
        armor: [
            "Secure Clothing",
            "Woven Body Armor"
        ],
        gear: [
            "Backpack (TL0)",
            "Compad",
            "Lazarus Patch"
        ],
        credits: 50
    }
}

class randomPc extends FormApplication {
    constructor(actor) {
      super();
      actor;
      this.actor = actor;
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        popOut: true,
        template: `modules/tradelord/randomPc.hbs`,
        id: 'randomize',
        title: 'Randomize?',
      });
    }
  
    getData() {
      
      // Send data to the template
      return {
        tags: this.dataTest
      };
    }
  
   async activateListeners(html) {
      super.activateListeners(html);
      $("#submit").click(()=>{
        console.log(this.actor);
        randomBackground().then(response=>{
            console.log(response);
            var rolledBackground = response;
       randomClass().then(response =>{
        var rolledClass = response;
        console.log(rolledClass);
       randomFoci(rolledClass).then(response => {
            var rolledFoci = response;
            updateActor(rolledClass, rolledFoci, rolledBackground, this.actor)
            if (rolledClass.class.includes("Psychic")) {
                randomPsy(this.actor, rolledClass);
            }
        }) .catch(error => {
            console.error(error);
          })
       })
    })
      })
    }
  
    async _updateObject(event, formData) {
      this.render();
    }
  }

  window.randomPc = randomPc;



function log(actor){
    console.log("Test", actor);
}

async function gearPackage(actor) {
    var content = `
<div class="form-group">
<label for="Package">What package?</label>
<select name="Package">`
for (let b = 0; b < Object.keys(packages).length; b++) {
    const element = Object.keys(packages)[b];
    content += `
    <option value="`+element+`">`+element+`</option>
    `
}
content += `
</select>
</div>
`
new Dialog({
    title: "Gear Package",
    content: content,
    buttons: {
        submit: {
            label: "Select",
            callback: async (html)=>{
                let pack = html.find('[name="Package"]').val();
                var packObj = packages[pack];
                console.log(packObj);
  //weapons
  var meleeCom = game.packs.get("swnr.melee");
  var rangedCom = game.packs.get("swnr.ranged");
  var weps = packObj.weapons;
  var wepArr = [];
 for (let w = 0; w < weps.length; w++) {
    const element = weps[w].type;
    console.log(element);
    if (typeof meleeCom.index.getName(element)._id != 'undefined') {
 var id = meleeCom.index.getName(element)._id;
 var com =  game.packs.get("swnr.melee");
    } else {
 var id = rangedCom.index.getName(element)._id;
 var com =  game.packs.get("swnr.ranged");
    }
  console.log(id);
  var doc = await com.getDocument(id);
  console.log(doc);
  var data = await game.items.fromCompendium(doc);
  data.name = weps[w].name;
wepArr.push(data)
  }
actor.createEmbeddedDocuments('Item', wepArr);
  //armor
var aCom = game.packs.get("swnr.armor");
var armors = packObj.armor;
console.log(armors);
var aArr = [];
for (let a = 0; a < armors.length; a++) {
    const element = armors[a];
    var id = aCom.index.getName(element)._id;
  console.log(id);
  var doc = await aCom.getDocument(id);
  console.log(doc);
  var data = await game.items.fromCompendium(doc);
aArr.push(data)
}
actor.createEmbeddedDocuments('Item', aArr);
  //misc
  var allCom = game.packs.get("swnr.all-items");
  var misc = packObj.gear;
  for (let g = 0; g < misc.length; g++) {
    const element = misc[g];
    console.log(element);
    var miscArr =[];
    if (typeof allCom.index.getName(element) === 'undefined') {
        var newGear = {
            name: element,
            type: "item"
        }
        actor.createEmbeddedDocuments('Item', [newGear]);
    } else {
        var id = allCom.index.getName(element)._id;
        console.log(id);
        var doc = await allCom.getDocument(id);
        console.log(doc);
        var data = await game.items.fromCompendium(doc);
      miscArr.push(data)
    }
  }
  
actor.createEmbeddedDocuments('Item', miscArr);
            }
        }
    }
  }).render(true);
}

async function randomClass(){
    let roll = new Roll("1d8");
    await roll.toMessage({flavor: "Rolling Class:"});
    var result = roll._total - 1;
    var result = quickClass[result];
    return result;
}

async function randomBackground(){
    let roll = new Roll("1d20");
    await roll.toMessage({flavor: "Rolling Background"});
    var result = roll._total - 1;
    var result = quickBackground[result];
    return result;
}

async function randomFoci(rolledClass){
    var className = await rolledClass.class;
    let roll = new Roll("1d6");
    await roll.toMessage({flavor: "Rolling Foci:"});
    var result = roll._total - 1;
    var foci = quickFoci.find(f=>f.class === className);
    var rolledFoci = foci.foci[result];
    return rolledFoci;
}

async function randomPsy(actor, rolledClass){
    var className = await rolledClass.class;
    let roll1 = new Roll("1d6");
    let roll2 = new Roll("1d6");
    await roll1.toMessage({flavor: "Rolling Psy-Skill:"});
    await roll2.toMessage({flavor: "Rolling Psy-Skill:"});
    var res1 = roll1._total - 1;
    var res2 = roll2._total - 1;
    var skillZero = [skills.psionic[res1],skills.psionic[res2]];
    initSkills(actor, 'psionic', skillZero)
}

async function bonusSkill(actor) {
var content = `
<div class="form-group">
<label for="Skill">Who is negotiating?</label>
<select name="Skill">`
for (let b = 0; b < skills.revised.length; b++) {
    const element = skills.revised[b];
    content += `
    <option value="`+element+`">`+element+`</option>
    `
}
content += `
</select>
</div>
`
    new Dialog({
        title: "Bonus Skill",
        content: content,
        buttons: {
            submit: {
                label: "Select",
                callback: (html)=>{
                    let skilllower = html.find('[name="Skill"]').val();
                    var skill = skilllower[0].toUpperCase() + skilllower.slice(1);
                    console.log(skill);
                    var oldSkill = actor.items._source.find(o => o.name === skill);
                    console.log(oldSkill);
                    var newSkill = oldSkill;
                    newSkill.system.rank += 1;
        actor.deleteEmbeddedDocuments('Item', [oldSkill._id]);
        actor.createEmbeddedDocuments("Item", [newSkill]);
                }
            }
        }
      }).render(true);
}

async function initSkills(actor, skillSet, skillsZero) {
    var items = [];
    for (let j = 0; j < skills[skillSet].length; j++) {
        const element = skills[skillSet][j];
        const skillRoot = `swnr.skills.${skillSet}.${element}.`;
        var skillFinal = {
            type: "skill",
            name: game.i18n.localize(skillRoot + "name"),
            data: {
                rank: -1,
                pool: "ask",
                description: game.i18n.localize(skillRoot + "text"),
                source: game.i18n.localize("swnr.skills.labels." + skillSet),
                dice: "2d6",
            }
        };
        for (let z = 0; z < skillsZero.length; z++) {
            const element = skillsZero[z];
            console.log(element);
            if (skillFinal.name === element.name || skillFinal.name.toLowerCase() === element) {
                skillFinal.data.rank += 1;
            }
            
        }
items.push(skillFinal);
    };
    console.log(items);
    actor.createEmbeddedDocuments("Item", items);
}

async function updateActor(rClass, rFoci, rBackground, actor){
    var skills2 = actor._source.items;
    var skills = actor.items._source;
    var stats = actor.system.stats;
    if (skills.length > 0) {
        var dskills = [];
        for (let s = 0; s < skills.length; s++) {
            const element = skills[s]._id;
            dskills.push(element);
        }
        
        actor.deleteEmbeddedDocuments('Item', dskills)
    }
    console.log("bulk log:", rClass, rFoci, rBackground);
    //set hd.ab
    actor.update({"system.hitDie": rClass.hp});
    actor.update({"system.ab": rClass.ab});
    //set stats/class
    stats.cha.base = rClass.attributes[5];
    stats.wis.base = rClass.attributes[4];
    stats.int.base = rClass.attributes[3];
    stats.con.base = rClass.attributes[2];
    stats.dex.base = rClass.attributes[1];
    stats.str.base = rClass.attributes[0];
    actor.update({"system.stats": stats});
    actor.update({"system.class": rClass.class});
    //apply skill/background
var skillsZero = [];
    for (let i = 0; i < rBackground.skills.length; i++) {
        var element = rBackground.skills[i];
        var check = new RegExp("w+ or w+");
        const combat = [
            "Punch",
            "Shoot",
            "Stab"
        ]
        if (element === "Any Combat") {
        //    var picker = Math.floor(Math.random() * 3)
        //    console.log("picker:", picker);
        //    if(picker === 0){
        //     picker = 1;
        //    }
        //    element = combat[picker];
       var pickerButtons ={};
        for (let b = 0; b < combat.length; b++) {
        const e = combat[b];
        console.log(e);
        pickerButtons[e] = {
            label: e,
            callback:(html)=>{
console.log("button logger: ",e);
var todelete = actor.items._source.find(s=> s.name === e);
actor.deleteEmbeddedDocuments('Item', [todelete._id])
element = e.toLowerCase();

const skillRoot = `swnr.skills.revised.${element}.`;
var newSkill = {
    type: "skill",
    name: e,
    data: {
        rank: 0,
        pool: "ask",
        description: game.i18n.localize(skillRoot + "text"),
        source: game.i18n.localize("swnr.skills.labels.revised"),
        dice: "2d6",
    }
};
actor.createEmbeddedDocuments('Item', [newSkill]);
            }
        }
       }
       console.log(pickerButtons);
        new Dialog({
            title: "Any Combat Select",
            content: "Choose a combat skill",
            buttons: pickerButtons
          }).render(true);
    }
        if (element === check) {
            // var picker = Math.floor(Math.random() * 2)
            // console.log("picker:", picker);
            // if (picker === 0){
            // element = "Shoot";
            // } else if (picker === 1){
            //     element = "Trade"
            // }
            
ui.notifications.error(element);
            console.log(element);
         }
//         var skill = skills.find(s=> s.name === element);
//         console.log(skills);
//         var index = skills.indexOf(skill);
// console.log(index);
//         skills[index].system.rank = 0;
//         skills2[index].system.rank = 0;
//         console.log("changed: ", skills[index], skill);
        var newSkill = {
            type: "skill",
            name: element,
            system: {
                dice: "2d6",
                pool: "ask",
                rank: 0,
                source: "Randomizer"
            }
        }
       skillsZero.push(newSkill);
    }
 initSkills(actor, "revised", skillsZero);
 bonusSkill(actor);
gearPackage(actor);
    //await actor.createEmbeddedDocuments('Item', skillsZero);
    // actor.update({"actor.items._source": skills});
    var pack = game.packs.get("swnr.foci");
    // actor.update({"actor._source.items": skills2});
    actor.update({"system.background": rBackground.background});
    //foci
    var foci = Object.values(rFoci);
    console.log(foci);
    for (let f = 0; f < foci.length; f++) {
        var element = foci[f];
        if (element.includes("Specialist")) {
          ui.notifications.info("Adjust Specialist to: ", element);
          var name = element;
            element = "Specialist";
            console.log(element);
            var id = pack.index.getName(element)._id;
            console.log(id);
            var doc = await pack.getDocument(id);
            console.log(doc);
            var data = game.items.fromCompendium(doc);
            data.name = name;
            console.log(data);
            await actor.createEmbeddedDocuments('Item', [data]);
        } else {
        console.log(element);
        var id = pack.index.getName(element)._id;
        console.log(id);
        var doc = await pack.getDocument(id);
        console.log(doc);
        var data = game.items.fromCompendium(doc);
        console.log(data);
        await actor.createEmbeddedDocuments('Item', [data]);
        }
    }
    await ChatMessage.create({content: `
    <div>
    `+actor.name+` has been randomized!
     </div>
    <div>
   Class:  `+rClass.class+`
    </div>
    <div>
    Background:  `+rBackground.background+`
     </div>
     <div>
     Foci:  `+rFoci.foci_1+` and `+rFoci.foci_2+`
      </div>
    `});
    
}

export function randomPC(actor){
   new randomPc(actor).render(true);

}
