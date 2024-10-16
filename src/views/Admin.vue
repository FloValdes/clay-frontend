<template>
  <div>
    <h1>Admin Panel</h1>
    <TranslationEditor :locale="locale" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TranslationEditor from '../components/TranslationEditor.vue';

export default defineComponent({
  props: {
    locale: {
      type: String,
      required: true
    }
  },
  components: {
    TranslationEditor
  }
});
</script>
