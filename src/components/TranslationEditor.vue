<template>
  <div>
    <h2>Edit Translations</h2>

    <div>
      <label for="page">Page:</label>
      <input v-model="pageInput" placeholder="Enter page name" />
      <button @click="loadTranslations">Load Translations</button>
    </div>

    <form v-if="Object.keys(translations).length > 0" @submit.prevent="submitTranslations">
      <div v-for="(translation, key) in translations" :key="key">
        <label>{{ key }} ({{ locale }}):</label>
        <input v-model="translations[key]" />
      </div>
      <button type="submit">Save Translations</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchTranslations, updateTranslations } from '../api/translationsApi';

interface Translations {
  [key: string]: string;
}

export default defineComponent({
  props: {
    locale: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pageInput: '',
      page: '', // Selected page
      translations: {} as Translations
    };
  },
  methods: {
    async loadTranslations() {
      if (!this.pageInput) {
        alert('Please enter a page name.');
        return;
      }
      this.page = this.pageInput;
      const response = await fetchTranslations(this.page, this.locale);
      this.translations = response.data;
    },

    async submitTranslations() {
      const formattedTranslations: Record<string, Record<string, string>> = {};

      Object.keys(this.translations).forEach((key) => {
        formattedTranslations[key] = {
          [this.locale]: this.translations[key]
        };
      });

      await updateTranslations(this.page, formattedTranslations);
      alert('Translations updated successfully!');
    }
  }
});
</script>
