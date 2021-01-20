// onekit/ui/canvas/canvas.js
Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
  data: {

  },
  properties: {       
  onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
    width: {
     type: String,
     value:'' ,
     },
    height: {
        type: String,
        value:'' ,
      },
    
    disableScroll: {
      type: Boolean,
      value:false
    },

  },
  methods: {

  }
})