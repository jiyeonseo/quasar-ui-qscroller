<template>
  <div class="q-pa-md row justify-evenly q-gutter-sm">
    <q-scroller
      v-model="value"
      view="time"
      no-footer
      text-color="yellow-7"
      color="blue-8"
      inner-text-color="yellow-7"
      inner-color="blue-8"
      style="max-width: 100px; height: 200px;"
    ></q-scroller>
    <q-scroller
      v-model="value"
      view="time"
      no-footer
      bar-color="orange-8"
      style="max-width: 100px; height: 200px;"
    ></q-scroller>
    <q-scroller
      v-model="value"
      view="time"
      no-footer
      vertical-bar
      bar-color="purple-8"
      style="max-width: 100px; height: 200px;"
    ></q-scroller>
    <q-scroller
      v-model="value"
      view="time"
      no-footer
      border-color="purple-8"
      style="max-width: 100px; height: 200px;"
    ></q-scroller>
    <q-scroller
      v-model="value"
      view="time"
      no-footer
      dense
      text-color="lightgreen"
      inner-text-color="orange"
      bar-color="purple"
      style="max-width: 80px; height: 200px;"
    ></q-scroller>

  </div>
</template>

<script>
export default {
  name: 'TimeColors',

  data () {
    return {
      value: ''
    }
  }
}
</script>
