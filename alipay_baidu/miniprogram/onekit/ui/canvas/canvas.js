// onekit/ui/canvas/canvas.js
Component({
options: {
        addGlobalClass: true,
    },
  data: {

  },
  properties: {
    Class:{
        type:String,
        value:""
    },
    Style:{
        type:String,
        value:""
    },
    width: {
     type: String,
     value:'' ,
     },
    height: {
        type: String,
        value:'' ,
      },
    
    id: {
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