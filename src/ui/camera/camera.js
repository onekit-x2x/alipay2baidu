Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {  
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
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
        this.triggerEvent('stop')
       },
       camera_error(e){
        this.triggerEvent('error')
       },
    }
});