
import newButton from "./button/index"; // 引入封装好的组件
export { newButton } //实现按需引入*
const components = [newButton];
const install = function(App, options) {
    components.forEach((component) => {
        App.component(component.name,component);
    });
};
export default { install } // 批量的引入*
