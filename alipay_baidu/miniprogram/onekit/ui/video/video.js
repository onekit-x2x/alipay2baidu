Component({
 options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {         onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},         onekitId:{type:String,value:""}, 
        src: { 
            type: String, 
            value: "", 
        },
        initialTime: { 
            type: Number, 
            value: "", 
        },
        
        autoplay:{
            type: Boolean, 
            value: false,
        },
        loop:{
             type: Boolean, 
            value: false,
        },
        mute:{
             type: Boolean, 
            value: false,
        },
        pageGesture:{
             type: Boolean, 
            value: false,
        },
        direction:{
            type: Number, 
            value: "",
        },
        showFullscreenBtn:{
             type: Boolean, 
            value: true,
        },
        showPlayBtn:{
             type: Boolean, 
            value: true,
        },
        showCenterPlayBtn:{
            type: Boolean, 
            value: true,
        },
        showMuteBtn:{
            type: Boolean, 
            value: true,
        },
        enableProgressGesture:{
            type: Boolean, 
            value: true,
        },
        poster:{
            type: String, 
            value: "",
        },
        controls:{
            type: Boolean, 
            value:true,
        }
    },
    methods: {
       video_play(e){
        this.triggerEvent('play',e)
       },
       video_pause(e){
        this.triggerEvent('pause',e)
       },
       video_ended(e){
        this.triggerEvent('ended',e)
       },
        video_timeupdate(e){
        this.triggerEvent('timeupdate',e)
       },
        video_fullscreenchange(e){
        this.triggerEvent('fullscreenchange',e)
       },
       video_error(e){
        this.triggerEvent('error',e)
       },
    }
});