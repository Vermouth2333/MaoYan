import Loading from "./index.vue";
import Vue from "vue";
export default () => {


    let LoadingComponent = Vue.extend(Loading);

    let child = new LoadingComponent({
        el: document.createElement("div"),
        methods: {
            handlemount() {
                document.body.appendChild(child.$mount().$el)
            },
            handleDestory() {
                document.body.removeChild(child.$mount().$el)
            }
        }
    })


    return child;

}