Component({
    options: {     
        virtualHost: true,
        addGlobalClass: true,
    },
    properties: {onekitId:{type:String,value:""}, 
        onekitClass: {
            type: String,
            value: ''
        },
        onekitStyle: { type: String, value: "" },
        hoverClass: {
            type: String,
            value: ""
        },
        hoverStarTime: {
            type: Number,
            value: ""
        },
        hoverStayTime: {
            type: Number,
            value: ""
        },
        hoverStopPropagation: {
            type: Boolean,
            value: false
        },
        disableScroll: {
            type: Boolean,
            value: false
        },
        hidden: {
            type: Boolean,
            value: false
        },
       
    },
    method:{
        view_tap(e){
        this.triggerEvent('tap',{}, { bubbles: true, capturePhase: true })
       },
    },

});