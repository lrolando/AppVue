<script setup>
import TodoItem from './TodoItem.vue'
import PendienteList from './PendienteList.vue'
import CompletadaList from './CompletadaList.vue';
</script>


<template>
    <div>
        <main>
            
            <PendienteList :ListP="ListPendingItems"></PendienteList>

            <CompletadaList :ListC="ListCompleteItems"></CompletadaList>

            <TodoItem></TodoItem>

        </main>
    </div>
</template>

<script>
import axios from "axios";
        export default{

            components: { PendienteList, CompletadaList },

            data() {
                return {
                    List:[],
                    CL:[]
                };
            },
            
            async created() {
                this.emitter.on("removeItem",this.removeItem);
                this.emitter.on("moveItem",this.moveItem);
                this.emitter.on("addToList",this.addToList);
                const res = await axios.get("https://localhost:44376/api/MainTaskAdmin/GetItems");

                for(let elem of res.data)
                {
                    this.List.push(new Array(elem.id, elem.description, elem.active));
                }
            },
            computed:{
                    ListPendingItems(){
                            return this.List.filter(e=>e[2]==true);
                        },
                    
                    ListCompleteItems(){
                            return this.List.filter(e=>e[2]==false);
                        }
                    
            },
            methods: {
                addToList: async function (Item) {

                    const res = await axios.post("https://localhost:44376/api/MainTaskAdmin/SaveNewItem",
                                  {"description": Item[0]});

                    this.List.push(new Array(res.data.id, res.data.description, res.data.active));
                },
                moveItem(Item){
                    axios.put("https://localhost:44376/api/MainTaskAdmin/UpdateItem",
                                  {"id": Item[0],
                                        "description": Item[1],
                                        "active": Item[2]});
                    if(Item[2]==false)
                    {Item[2]=true}
                    else
                    {Item[2]=false}

                    const index = this.List.findIndex(e=>e[0]==Item[0])
                    this.List[index] = Item;
                    
                },
                removeItem: function (Item) {
                    axios.delete("https://localhost:44376/api/MainTaskAdmin/DeleteItem",
                                 {data : {"id": Item[0],
                                        "description": Item[1],
                                        "active": Item[2]}});
                    const index = this.List.findIndex(e=>e[0]==Item[0])
                    this.List.splice(index,1);
                }
            },
        };
</script>
