<template>
<div>
        <main>
            
            <h1>Tareas a realizar</h1>
                
            <div>
                <ul>
                    <li v-for="(item, index) in ListPendingItems" 
                        :key="index">

                         <button
                            v-on:click="moveToListDoneItems(item, index)">M
                        </button>
                        {{ item }}
                        <button
                            v-on:click="removeItem(ListPendingItems, index)">X
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                            <br>
            </div>

            <h1>Tareas realizadas</h1>
            
            <div>
                <ul>
                    <li v-for="(item, index) in ListDoneItems" 
                        :key="index">

                        <button  
                            v-on:click="moveToListPendingItems(item, index)">M
                        </button>
                        {{ item }}
                        <button
                            v-on:click="removeItem(ListDoneItems, index)">X
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                            <br><br>
            </div>

            <div class="container">
                <input type="text" 
                    placeholder="Agrega una nueva tarea" 
                    v-model="newItem" 
                    v-on:keyup.enter="addList" />
            </div>
        </main>
    </div>
  
    
  </template>

<script>
        export default{
            
            data() {
                return {
                    ListPendingItems: [
                        "Integrar Bootstrap",
                        "Cargar horas",
                        "hablar con Alex",
                    ],
                    ListDoneItems: [
                        "Onboarding",
                        "Instalar Vetur",
                        "Leer doc de Vue",
                    ],
                    newItem: "",
                };
            },
            methods: {
                addList: function () {
                    this.ListPendingItems.push(this.newItem);
                    this.newItem = "";
                },
                moveToListDoneItems: function (item, index) {
                    this.ListDoneItems.push(item);
                    this.ListPendingItems.splice(index, 1);
                },
                moveToListPendingItems: function (item, index) {
                    this.ListPendingItems.push(item);
                    this.ListDoneItems.splice(index, 1);                
                },
                removeItem: function (List, index) {
                    List.splice(index,1);
                }
            },
        };
</script>