import newButton from "./components/button/index.js";

const install = (app) => {
    app.use(newButton);
};
const newestUI = {
    install,
};
export {
    newButton
};
export default newestUI;
