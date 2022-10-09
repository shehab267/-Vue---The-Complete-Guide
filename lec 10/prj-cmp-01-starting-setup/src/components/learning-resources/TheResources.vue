<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: {
    AddResource,
    StoredResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documintation',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com/',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectTab(cmp) {
      this.selectedTab = cmp;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.shift(newResource);
      // Switch to storedResources tap after adding new resource
      this.selectedTab = 'stored-resources';
    },
  },
  provide() {
    return {
      resources: this.storedResources, // now we provided 'resources' to all lower level components
      addResource: this.addResource, // Point at the method for injecting in another component
    };
  },
};
</script>
