
import newButton from "./newButton.vue";
newButton.install = (app) => {
    app.component(newButton.name, newButton);
};
export default newButton;
