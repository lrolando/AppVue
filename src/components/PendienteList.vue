<template>
<div>
        <main>
            
            <h1>Tareas a realizar</h1>
                
            <div>
                <ul>
                    <li v-for="(item, index) in ListP" 
                        :key="index">

                        <item :itemC="item" :indexC="index"></item>             
      
                    </li>
                </ul>
            </div>
            <div>
                            <br>
            </div>

        </main>
    </div>
  </template>

<script>
import Item from './Item.vue';
import axios from "axios";
        export default{

            props: ['ListP'],

            components: { Item }
        };
</script>
