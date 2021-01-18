Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {         onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},         onekitId:{type:String,value:""}, 
        direction: {
            type: String,
            value: 'none'
        },
        inertia: {
            type: Boolean,
            value: false
        },
        outOfBounds: {
            type: Boolean,
            value: false
        },
        x: {
            type: Number,
            value: 0
        },
        y: {
            type: Number,
            value: 0
        },
        damping: {
            type: Number,
            value: 20
        },
        friction: {
            type: Number,
            value: 2
        },
        disabled: {
            type: Boolean,
            value: false
        },
        scale: {
            type: Boolean,
            value: false
        },
        scaleMin: {
            type: Number,
            value: 0.5
        },
        scaleMax: {
            type: Number,
            value: 10
        },
        scaleValue: {
            type: Number,
            value: 1
        },
        animation: {
            type: Boolean,
            value: true
        }
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },

    detached: function () { },

    methods: {
        movable_Change(e) {
            this.triggerEvent('change')
        },
        movable_scale(e) {
            this.triggerEvent('scale')
        }
    }
});