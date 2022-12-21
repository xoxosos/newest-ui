
/**
 * 按需注册方法(install)
 * @param component 需要注册的组件
 * @returns {返回注册后的组件}
 */
export const useInstall = component=>{
    component.install = (app) => {
        app.component(component.name, component);
    };
}