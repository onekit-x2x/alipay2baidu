Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {         onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},         onekitId:{type:String,value:""}, 
        percent: {
            type: Number, observer: function (newVal, oldVal, changedPath) {
                var that = this;
                setTimeout(() => {
                    that.triggerEvent("activeend");
                }, 1000);
            }
        },
    showInfo:{
      type:Boolean,
      value:false},
    strokeWidth:{
      type:Number,
      value:2
    },
    activeColor:{
      type:String,
      value:'#09BB07'
    },
    backgroundColor:{
      type:String,
      value:"#EBEBEB"
    },
    active:{
      type:Boolean,
      value:false
    
    }

    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
        var borderRadius = this.properties.borderRadius;
        borderRadius = this._num2str(borderRadius);
        //
        var strokeWidth = this.properties.strokeWidth;
        strokeWidth =this._str2num(strokeWidth);
        //
        var fontSize = this.properties.fontSize;
        fontSize = this._num2str(fontSize);
        //
        this.setData({ borderRadius, strokeWidth, fontSize })

        // console.log(borderRadius)
    },

    detached: function () { },

    methods: {
       _num2str(string) {
            if (!string){
                string=0;
            } 
            if( !isNaN(string)) {
                string += "px";
            }
            return string;
        },
        _str2num(string) {
            if (!isNaN(string)) {
                return string;
            }
            string = string.replace("rpx", "");
            string = string.replace("px", "");
            string = string.trim();
            return string;
        },
    }
});