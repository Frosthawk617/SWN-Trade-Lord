/**
 * Define your class that extends FormApplication
 */
class TradeSettings extends FormApplication {
    constructor(exampleOption) {
      super();
      this.exampleOption = exampleOption;
      this.dataTest = game.settings.get('tradelord','tradegoodsStore');
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        popOut: true,
        template: `modules/tradelord/settingsGoods.hbs`,
        id: 'trade-goods',
        title: 'Trade Goods',
      });
    }
  
    getData() {
      
      // Send data to the template
      return {
        goods: this.dataTest
      };
    }
  
    activateListeners(html) {
      super.activateListeners(html);
      html.find(".submit").click(()=>{
        var goods= game.settings.get('tradelord','tradegoodsStore');
       var costTemp = html.find("#newCost").val();
       var cost = parseInt(costTemp);
       var name = html.find("#cargo").val();
       var tag = html.find("#tag").val();
       var newGood = {
cargo: name,
baseCost: cost,
tag: tag
       }
       goods.push(newGood);
       game.settings.set('tradelord','tradegoodsStore', goods);
        console.log(newGood);
        this._updateObject();
      })
     $(".delete").click((event)=>{ 
      var target = event.currentTarget.id;
      var goods= game.settings.get('tradelord','tradegoodsStore');
      var goodFile = goods.find(g=> g.cargo === target);
      var index = goods.indexOf(goodFile);
      var x = goods.splice(index, 1);
      game.settings.set('tradelord','tradegoodsStore', goods);
      this._updateObject();
      })
      $("#deleteall").click(()=>{
        game.settings.set('tradelord','tradegoodsStore', []);
      })
    }
  
    async _updateObject(event, formData) {
      this.dataTest = game.settings.get('tradelord','tradegoodsStore');
      this.render();
    }
  }
  
  window.TradeSettings = TradeSettings;

class TagSettings extends FormApplication {
    constructor(exampleOption) {
      super();
      this.exampleOption = exampleOption;
      this.dataTest = game.settings.get('tradelord','tagStore');
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        popOut: true,
        template: `modules/tradelord/tags.hbs`,
        id: 'tags',
        title: 'Tags',
      });
    }
  
    getData() {
      
      // Send data to the template
      return {
        tags: this.dataTest
      };
    }
  
    activateListeners(html) {
      super.activateListeners(html);
      html.find(".submit").click(()=>{
        var tags= game.settings.get('tradelord','tagStore');
       var tag = html.find("#tag").val();
       var newTag = {
tag: tag
       }
       tags.push(newTag);
       game.settings.set('tradelord','tagStore', tags);
        console.log(newTag);
        this._updateObject();
      })
     $(".delete").click((event)=>{ 
      var target = event.currentTarget.id;
      var tags= game.settings.get('tradelord','tagStore');
      var tagFile = tags.find(g=> g.tag === target);
      var index = tags.indexOf(tagFile);
      var x = tags.splice(index, 1);
      game.settings.set('tradelord','tagStore', tags);
      this._updateObject();
      })
      $("#deleteall").click(()=>{
        game.settings.set('tradelord','tagStore', []);
        this._updateObject();
      })
    }
  
    async _updateObject(event, formData) {
      this.dataTest = game.settings.get('tradelord','tagStore');
      this.render();
    }
  }
  
  window.TagSettings = TagSettings;


  class WorldSettings extends FormApplication {
    constructor(exampleOption) {
      super();
      this.exampleOption = exampleOption;
      this.tags = game.settings.get('tradelord','tagStore');
      this.dataTest = game.settings.get('tradelord','worldStore');
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        popOut: true,
        template: `modules/tradelord/worlds.hbs`,
        id: 'worlds',
        title: 'Worlds',
      });
    }
  
    getData() {
      
      // Send data to the template
      return {
        worlds: this.dataTest,
        tags: this.tags
      };
    }
  
    activateListeners(html) {
      super.activateListeners(html);
      html.find(".submit").click(()=>{
        var worlds= game.settings.get('tradelord','worldStore');
       var name = html.find("#name").val();
       var tag1 = html.find("#tag1").val();
       var tag1v = html.find("#tag1v").val();
       var tag2 = html.find("#tag2").val();
       var tag2v = html.find("#tag2v").val();
       var tag3 = html.find("#tag3").val();
       var tag3v = html.find("#tag3v").val();
       var tag4 = html.find("#tag4").val();
       var tag4v = html.find("#tag4v").val();
       var friction = html.find("#friction").val();
       var newWorld = {
name: name,
friction: friction,
tags: [
  {[tag1]: tag1v},
  {[tag2]: tag2v},
  {[tag3]: tag3v},
  {[tag4]: tag4v},
]
       }
       worlds.push(newWorld);
       game.settings.set('tradelord','worldStore', worlds);
        console.log(newWorld);
        this._updateObject();
      })
     $(".delete").click((event)=>{ 
      var target = event.currentTarget.id;
      console.log(target);
      var worlds= game.settings.get('tradelord','worldStore');
      var worldFile = worlds.find(g=> g.name === target);
      var index = worlds.indexOf(worldFile);
      var x = worlds.splice(index, 1);
      game.settings.set('tradelord','worldStore', worlds);
      this._updateObject();
      })
      $("#deleteall").click(()=>{
        game.settings.set('tradelord','worldStore', []);
        this._updateObject();
      })
    }
  
    async _updateObject(event, formData) {
      this.dataTest = game.settings.get('tradelord','worldStore');
      this.render();
    }
  }
  
  window.WorldSettings = WorldSettings;  

export function initializeSettings() {
game.settings.register("tradelord", "tradegoods",{
    name: "Trade Goods",
    scope: "world",
    config: true,
    type: Number,
    range: {
      min:0,
      max:100,
      step:10
    },
    default: 50,
    restricted: true
})

game.settings.registerMenu("tradelord", "tradegoods", {
  name: "Trade Goods",
  hint: "Add System Goods",
  label: "TradeGoods",
  icon: "fas fa-checkmark",
  type: TradeSettings,
  restricted: true
});

game.settings.registerMenu("tradelord", "tags", {
  name: "Tags",
  hint: "Add Trade Tags",
  label: "Tags",
  icon: "fas fa-checkmark",
  type: TagSettings,
  restricted: true
});

game.settings.registerMenu("tradelord", "worlds", {
  name: "Worlds",
  hint: "Add Worlds",
  label: "Worlds",
  icon: "fas fa-checkmark",
  type: WorldSettings,
  restricted: true
});

game.settings.register("tradelord", "tradegoodsStore",{
  name: "Trade Goods",
  scope: "world",
  type: Array,
  config:false,
  default:[],
  onChange:()=>{
    console.log(game.settings.get('tradelord','tradegoodsStore'));
  }
});
game.settings.register("tradelord", "tagStore",{
  name: "Tags",
  scope: "world",
  type: Array,
  config:false,
  default:[],
  onChange:()=>{
    console.log(game.settings.get('tradelord','tagStore'));
  }
});

game.settings.register("tradelord", "worldStore",{
  name: "Worlds",
  scope: "world",
  type: Array,
  config:false,
  default:[],
  onChange:()=>{
    console.log(game.settings.get('tradelord','worldStore'));
  }
});

};