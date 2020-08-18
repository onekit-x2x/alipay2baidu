Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {  
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    Id:{type:String,value:""},
       devicePosition:{
        type:String,
        value:'back',
       },
       flash:{
       type:String,
       value:'auto',
       },
    },


    methods: {
       camera_stop(e){
        this.triggerEvent('stop',e)
       },
       camera_error(e){
        this.triggerEvent('error',e)
       },
    }
});