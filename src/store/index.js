import { createStore } from "vuex";
import { Module } from "./module.js";

export default createStore({
    modules: {
        comments: Module
    }
});
