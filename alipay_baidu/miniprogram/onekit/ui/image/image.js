Component({
 options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {   
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
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
        this.triggerEvent('error',e)
       },
       image_load(e){
        this.triggerEvent('load',e)
       },
       image_tap(e){
        this.triggerEvent('tap',e)
       },
    }
});