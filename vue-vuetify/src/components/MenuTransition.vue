<template>
    <v-menu transition="slide-x-reverse-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="secondary"
                   class="ma-2"
                   v-on="on">
                Slide X Reverse Transition
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="n in 5"
                         :key="n"
                         link>
                <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>