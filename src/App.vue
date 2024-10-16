<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/admin">Admin</router-link>
    </nav>
    <div class="locale-selector">
      <label for="locale">Locale: </label>
      <select v-model="locale" @change="updateLocale">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
    <router-view :key="locale" :locale="locale" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const locale = ref('es');

    onMounted(() => {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale) {
        locale.value = savedLocale;
      }
    });

    const updateLocale = () => {
      localStorage.setItem('locale', locale.value);
    };

    return {
      locale,
      updateLocale
    };
  }
});
</script>
