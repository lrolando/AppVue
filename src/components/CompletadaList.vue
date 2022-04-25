<template>
    <div>
        <main>

            <h1>Tareas realizadas</h1>
            
            <div>
                <ul>
                    <li v-for="(item, index) in ListDoneItems" 
                        :key="index">

                        <item :itemC="item" :indexC="index" @removeItem="removeItem" @move="moveToPending"></item>  

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

        export default{

            components: { Item },

            data() {
                return {
                    ListDoneItems: [
                        "Onboarding",
                        "Instalar Vetur",
                        "Leer doc de Vue",
                    ]
                };
            },
            created() {
                this.emitter.on("moveToCompletet",this.addList);

            },
            methods: {
                addList: function (n) {
                    this.ListDoneItems.push(n);
                   
                },
                moveToPending: function(item) {
                    this.emitter.emit('moveToPending', item);
                },
                removeItem: function (index) {
                    this.ListDoneItems.splice(index,1);
                }
            }
        };
</script>