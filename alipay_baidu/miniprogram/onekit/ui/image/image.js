Component({
 options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {   
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
        src: { 
            type: String, 
            value: "", 
        },
        mode: { 
            type: String, 
            value: "scaleToFill", 
        },
        lazyLoad: { 
            type: Boolean, 
            value: false, 
        },
        defaultSource:{
            type: String, 
            value: "",
        }
    },
    methods: {
       image_error(e){
       console.log("image_error", e);
        this.triggerEvent('error',e.details)
       },
       image_load(e){
       console.log("image_load", e);
        this.triggerEvent('load',e.details)
       },
       image_tap(e){
       console.log("image_tap", e);
        this.triggerEvent('tap',e.details)
       },
    }
});