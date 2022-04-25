<template>
<div>
        <main>
            
            <h1>Tareas a realizar</h1>
                
            <div>
                <ul>
                    <li v-for="(item, index) in ListPendingItems" 
                        :key="index">

                        <item :itemC="item" :indexC="index" @removeItem="removeItem" @move="moveToComplete"></item>             
      
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
        export default{

            components: { Item },

            data() {
                return {
                    ListPendingItems: [
                        "Integrar Bootstrap",
                        "Cargar horas",
                        "hablar con Alex",
                    ]
                };
            },
            created() {
                this.emitter.on("addli",this.addList);
                this.emitter.on("moveToPending",this.addList);
                this.emitter.on("removePendingItem",this.removeItem);
            },
            methods: {
                addList: function (n) {
                    this.ListPendingItems.push(n);
                },
                moveToComplete(item){
                    this.emitter.emit('moveToCompletet',item);
                },
                removeItem: function (index) {
                    this.ListPendingItems.splice(index,1);
                }
            },
        };
</script>