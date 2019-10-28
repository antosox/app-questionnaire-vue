<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <template v-for="i in nbrMaxQuestion">
                    <v-stepper-step :key="`${i}-step`" :complete="e1 > i" :step="i" editable>
                        Question {{ i }}
                    </v-stepper-step>

                    <v-divider v-if="i !== steps" :key="i"></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content v-for="n in nbrMaxQuestion" :key="`${n}-content`" :step="n">
                    <v-card class="mb-12" color="grey lighten-1" height="auto">
                        <v-card-title>{{questions[n].question}}</v-card-title>
                        <v-checkbox :key="key" v-for="(reponsePossible, key) in questions[n].reponsesPossibles" class="mx-2" :label="reponsePossible" @change="setResult(n,key, value)"/>
                    </v-card>

                    <v-btn v-if="e1 < nbrMaxQuestion" color="primary" @click="nextStep()">
                        Continuer
                    </v-btn>
                    <v-btn v-if="e1 == nbrMaxQuestion" color="green" @click="endForm()">
                        Valider
                    </v-btn>

                    <v-btn text @click="backStep()">Retour</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
    import MyQuestion from "../assets/questions"

    export default {
        name: "Questionnaire",
        data() {
            return {
                nbrMaxQuestion: 5,
                questions: MyQuestion.questions,
                e1: 1,
            }
        },

        methods: {
            result: [[]],
            nextStep(){
                this.e1++
            },
            backStep(){
                this.e1--
            },
            setResult(idQuestion, idReponse, value){
                alert(this.result)
                this.result[idQuestion][idReponse] = value
            },
        }
    }
</script>

<style scoped>

</style>