import my from "../../../onekit/my"
Component({
  attached() { 
    // var openType;
    // var scope;
    // switch(this.props.openType){
    //   default:openType=openType;
    // }
    // this.setData({openType,scope});
  },
  detached() { },
  properties: {},
  methods: {   
    button_onTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "contact":
            break;
          case "share":
            break;
          case "launchApp":
            break;
          case "openSetting":
            break;
          case "feedback":
            break;
          default:
          throw new Error(this.props.openType);
        }
      }
      this.props.onTap(e); 
    },
  },
});
