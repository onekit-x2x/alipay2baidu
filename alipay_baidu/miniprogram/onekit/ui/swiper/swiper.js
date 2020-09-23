Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {         onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},         onekitId:{type:String,value:""}, 
        indicatorDots: {
            type: Boolean,
            value: false
        },
        indicatorColor: {
            type: String,
            value: 'rgba(0, 0, 0, .3)'
        },
        indicatorActiveColor: {
            type: String,
            value: '#000'
        },
        autoplay: {
            type: Boolean,
            value: false
        },
        current: {
            type: Number,
            value: 0
        },
        duration: {
            type: Number,
            value: 500
        },
        interval: {
            type: Number,
            value: 5000
        },
        circular: {
            type: Boolean,
            value: false
        },
        vertical: {
            type: Boolean,
            value: false
        },
        previousMargin: {
            type: String,
            value: '0px'
        },
        nextMargin: {
            type: String,
            value: '0px'
        },
        activeClass: {
            type: String,
            value: ''
        },
        changingClass: {
            type: String,
            value: ''
        },
        acceleration: {
            type: Boolean,
            value: false
        },
        disableProgrammaticAnimation: {
            type: Boolean,
            value: false
        },
        disableTouch: {
            type: Boolean,
            value: false
        }
    },
    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },

    detached: function () { },

    methods: {
        swiper_change(e) {
            this.triggerEvent('change')
        },
        swiper_transition(e) {
            this.triggerEvent('Transition')
        },
        swiper_AnimationEnd(e) {
            this.triggerEvent('animationfinish')
        }
    }
});