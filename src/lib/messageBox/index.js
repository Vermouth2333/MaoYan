import messageBox from "./index.vue";
import Vue from "vue";

export const MessageBox = (function () {
    let defaultProps = {
        title: "信息",
        message: "城市",
        handleOK: function () { },
        handleCancel: function () { }
    }

    let messageVue = Vue.extend(messageBox);

    return (options) => {
        for (var key in options) {
            if (options[key]) {
                defaultProps[key] = options[key];
            }
        }

        let messageVm = new messageVue({
            el: document.createElement("div"),
            data: {
                title: defaultProps.title,
                message: defaultProps.message
            },
            methods: {
                handleTrue(){
                    defaultProps.handleOK&&defaultProps.handleOK()
                   document.body.removeChild(messageVm.$mount().$el)
                },
                handleFalse(){
                    defaultProps.handleCancel&&defaultProps.handleCancel()
                    document.body.removeChild(messageVm.$mount().$el)
                },
                handleClose(){
                    document.body.removeChild(messageVm.$mount().$el)
                }
            }
        })

        document.body.appendChild(messageVm.$mount().$el);

    }



})()


// MessageBox({
//     title: '提示',
//     message: '确定执行此操作?',
//     showCancelButton: true
// });