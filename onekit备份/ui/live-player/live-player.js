Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {   
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
        src: {
            type: String, 
            value: "", 
        },
        autoplay: {
            type: Boolean, 
            value: false, 
        },
        muted: { 
            type: Boolean, 
            value: false, 
        },
        orientation: {
            type: String, 
            value: 'vertical', 
        },
        objectFit: {
            type: String, 
            value: 'contain', 
        },
        backgroundMute: {
            type: Boolean, 
            value: false,  
        },
        minCache: {
            type: Number, 
            value:'1', 
        },
        maxCache: {
            type: Number, 
            value:'3', 
        },
    },

    methods: {
        live_player_statechange(e){
        console.log("live_player_statechange", e);
        this.triggerEvent('statechange')
       },
       live_player_netstatus(e){
        console.log("live_player_netstatus", e);
        this.triggerEvent('netstatus')
       },
       live_player_fullscreenchange(e){
        console.log("live_player_fullscreenchange", e);
        this.triggerEvent('fullscreenchange')
       },
    }
});