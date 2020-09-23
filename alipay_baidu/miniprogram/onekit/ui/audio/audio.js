Component({
options: {     
        virtualHost: true,
        addGlobalClass: true,
    },
    properties: {    
        onekitClass:{type:String,value:""},
        onekitStyle:{type:String,value:""},
        onekitId:{type:String,value:""},
        loop: {
            type: Boolean, 
            value: false,
        },
        controls: {
            type: Boolean, 
            value: false,
        },
        poster: {
            type: String, 
            value: "",
        },
        name: {
            type: String, 
            value: "未知音频",
        },
        author: {
            type: String, 
            value: "未知作者",
        },
    },

    methods: {
       audio_play(e){
        this.triggerEvent('play')
       },
       audio_pause(e){
        this.triggerEvent("pause")
       },
       audio_timeupdate(e){
        this.triggerEvent("timeupdate")
       },
       audio_ended(e){
        this.triggerEvent("ended")
       },
       audio_error(e){
        this.triggerEvent("error")
       },
    }
});