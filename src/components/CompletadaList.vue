<template>
    <div>
        <main>

            <h1>Tareas realizadas</h1>
            
            <div>
                <ul>
                    <li v-for="(item, index) in ListC" 
                        :key="index">

                        <item :itemC="item" :indexC="index"></item>  

                    </li>
                </ul>
            </div>
            <div>
                            <br><br>
            </div>

        </main>
    </div>
  
</template>

<script>
import Item from './Item.vue';
import axios from "axios";

        export default{

            props: ['ListC'],
            
            components: { Item }

            
        };
</script>
