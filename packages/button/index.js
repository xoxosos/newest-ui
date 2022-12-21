
import newButton from "./button.vue";
newButton.install = (app) => {
    app.component(newButton.name, newButton);
};
export default newButton;
