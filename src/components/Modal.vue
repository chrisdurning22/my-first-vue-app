<template>
  <div id="app">
    <b-modal v-model="showModal">
      <form ref="form" @submit.stop.prevent="onSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required">
          <b-form-input
            id="name-input"
            v-model="name"
            required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Code"
          label-for="code-input"
          invalid-feedback="Name is required">
          <b-form-input
          id="code-input"
          v-model="code"
          required
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox
            id="checkbox-1"
            v-model="active"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Active
          </b-form-checkbox>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        code: '',
        name: '',
        active: false,

      }
    },
    props: {
      showModal: Boolean
    }
  }


</script>

<style>
</style>
