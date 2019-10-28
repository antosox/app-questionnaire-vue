<template>
  <div>
    <v-row>
      <v-col :cols="12" lg="6" md="6" offset-lg="3" offset-md="3" sm="4" offset-sm="2">
        <div class="d-flex justify-center mb-3">
          <v-img src="../../video.-julien-lepers-agace-par-une-interrogation-sur-questions-pour-champion-parle-plus-ca.jpg" width="200" height="300"/>
        </div>
        <v-form ref="form" lazy-validation v-model="valid">
          <v-text-field v-model="firstname" :rules="firstnameRules" label="Prénom" rounded filled/>
          <v-text-field v-model="name" :rules="nameRules" label="Nom" rounded filled/>
          <v-text-field v-model="company" :rules="companyRules" label="Entreprise" rounded filled/>
          <v-btn rounded :disabled="valid" color="success" class="mr-4" @click="validate">
            Validate
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Nom requis',
      ],
      firstname: '',
      firstnameRules: [
        v => !!v || 'Prénom requis',
      ],
      company: '',
      companyRules: [
        v => !!v || 'Entreprise requise',
      ],
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.$router.push("/questionnaire")
      }
    },
  },
  updated: function () {
    if(this.name.length > 0 && this.firstname.length > 0 && this.company.length > 0){
      this.valid = false
    }else {
      this.valid = true
    }
  }
  // watch: {
  //   valid: function (val, oldval) {
  //     alert(val, oldval)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
