Component({
    options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {         Class:{type:String,value:""},         Style:{type:String,value:""},         Id:{type:String,value:""}, 
        Class: {
            type: String,
            value: ''
        },
        Style: { type: String, value: "" },
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
        disableScroll: {
            type: Object,
            value: {}
        }
    },

});