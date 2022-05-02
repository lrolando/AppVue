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
                    v-on:keyup.enter="clearfield(newItem);"
                    />
            </div>
           
        </main>
    </div>
     <!--<div>
                
                <div>
                    <label for="input-with-list">Input with datalist</label>
                    <b-form-input list="input-list" id="input-with-list"></b-form-input>
                    <b-form-datalist id="input-list"></b-form-datalist>
                </div>
                
            </div>-->
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
                    var Item = new Array(newItem, 'true')
                    this.emitter.emit('addToList',Item)

                    this.newItem = "";
                }
            }
        };
</script>