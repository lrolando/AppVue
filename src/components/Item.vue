
<template>
    <!--this.emitter.emit('moveToComplete',iteml);-->
        <button
            v-on:click="this.$emit('move',itemC);
                        this.$emit('removeItem',indexC);">M
        </button>
                        {{ itemC }}
        <button
            v-on:click="this.$emit('removeItem',indexC);">X
        </button>



</template>

<script>
        export default{

            props: ['itemC','indexC']
            
        };
</script>