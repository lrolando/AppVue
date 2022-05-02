
<template>
        <button
            v-on:click="//this.$emit('move',itemC);
                        this.emitter.emit('moveItem',itemC)">M
        </button>
                        {{ itemC[1] }}
        <button
            v-on:click="//this.$emit('removeItem',itemC);
                        this.emitter.emit('removeItem',itemC)">X
        </button>



</template>

<script>
        export default{

            props: ['itemC','indexC']
            
        };
</script>