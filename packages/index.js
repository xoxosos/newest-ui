import newButton from "./components/button/index.js";
const components = [newButton]
const install = (app) => {
    components.map(component => app.use(component))
};
export default {
    install,
    ...components
};
