<template>
    <p>{{greeting}} World!</p>
</templatpe>

<script>
    export default{
        data:function(){
            return{
                greeting:'Hello'
            }
        }
    }
</script>

<style scoped>
p{
    font-size:2em;
    text-align:center;
}
</style>
