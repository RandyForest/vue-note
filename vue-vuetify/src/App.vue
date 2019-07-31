<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text
                   href="https://github.com/vuetifyjs/vuetify/releases/latest"
                   target="_blank">
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <hr>
            <HelloWorld />
            <hr>
            <Alert />
            <hr>
            <MenuTransition />
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Alert from "./components/Alert";
import MenuTransition from "./components/MenuTransition";

export default {
    name: "App",
    components: {
        HelloWorld,
        Alert,
        MenuTransition
    },
    data: () => ({
        //
    })
};
</script>
