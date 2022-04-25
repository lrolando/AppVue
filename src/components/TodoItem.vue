<script setup>
import { propsToAttrMap } from "@vue/shared";
</script>

<template>
    <div>
        <main>
            
            <div class="container">
                <input type="text" 
                    placeholder="Agrega una nueva tarea" 
                    v-model="newItem" 
                    v-on:keyup.enter="this.emitter.emit('addli',newItem);
                                      clearfield(newItem);"
                    />
            </div>
            
        </main>
    </div>
</template>

<script>
        export default{
            
            data() {
                return {
                    newItem: ""
                };
            },
            methods: {
                 clearfield: function (newItem) {
                    this.newItem = "";
                }
            }
        };
</script>