// onekit/ui/canvas/canvas.js
Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
  data: {

  },
  properties: {       
  Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    width: {
     type: String,
     value:'' ,
     },
    height: {
        type: String,
        value:'' ,
      },
    
    Id: {
      type: String,
      value:'',
    },
    disableScroll: {
      type: Boolean,
      value:false
    },

  },
  methods: {

  }
})