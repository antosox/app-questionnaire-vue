<template>
    <div>

    </div>
</template>

<script>
    import PouchDB from 'pouchdb'
    const db = new PouchDB("questionnaire")

    export default {
        name: "Score",

        mounted(){
            db.get(this.$route.params.id).then(function (doc) {
                alert(doc.id)
            })
        }
    }
</script>

<style scoped>

</style>