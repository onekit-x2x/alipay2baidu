Component({
    options: {
        addGlobalClass: true,
    },
    properties: {         Class:{type:String,value:""},         Style:{type:String,value:""},         Id:{type:String,value:""}, 
        space: {
            type:String,
            value:"",
        },
        selectable: {
            type:Boolean,
            value:false,
        }
    },
   

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
    }
});