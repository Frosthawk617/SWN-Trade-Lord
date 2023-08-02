export function worldTables() {
    new WorldTable().render(true);
}

// class WorldTables extends FormApplication {
//     constructor() {
//       super();
//       this.worlds = game.settings.get('tradelord','worldStore');
//     }
  
//     static get defaultOptions() {
//       return mergeObject(super.defaultOptions, {
//         classes: ['form'],
//         popOut: true,
//         template: `modules/tradelord/worldTables.hbs`,
//         id: 'worldTables',
//         title: 'World Tables',
//       });
//     }
  
//     getData() {
      
//       // Send data to the template
//       return {
//         worlds: this.worlds
//       };
//     }
  
//     activateListeners(html) {
//       super.activateListeners(html);
     
//     }
  
//     async _updateObject(event, formData) {
//       this.worlds = game.settings.get('tradelord','worldStore');
//       this.render();
//     }
//   }
  
//   window.WorldTables = WorldTables;

//   class WorldTable extends FormApplication {
//     constructor() {
//       super();
//       this.worlds = game.settings.get('tradelord','worldStore');
//     }
  
//     static get defaultOptions() {
//       return mergeObject(super.defaultOptions, {
//         classes: ['form'],
//         popOut: true,
//         template: `modules/tradelord/worldTables.hbs`,
//         id: 'worldTables',
//         title: 'World Tables',
//       });
//     }
  
//     getData() {
      
//       // Send data to the template
//       return {
//         worlds: this.worlds
//       };
//     }
  
//     activateListeners(html) {
//       super.activateListeners(html);
     
//     }
  
//     async _updateObject(event, formData) {
//       this.worlds = game.settings.get('tradelord','worldStore');
//       this.render();
//     }
//   }
  
//   window.WorldTable = WorldTable;

class WorldTable extends DocumentSheet {
constructor() {
    super();
}
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        template: `modules/tradelord/templatetest.html`,
        id: 'worldTable',
        title: 'World Table',
        width: 550,
        height: 640,
        textKeyPath: null,
        resizable: true
      });
    }
}
window.WorldTable = WorldTable;