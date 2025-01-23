<script setup lang="ts">
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

</script>
<template>
<Tabs value="0">    
    <TabList>
        <Tab value="0">Showcase</Tab>
        <Tab value="1">AI Shorts</Tab>        
    </TabList>
    <div>
        <slot name="header"></slot>
    </div>
    <TabPanels>
        <TabPanel value="0">
            <slot name="showCase"></slot>
        </TabPanel>
        <TabPanel value="1">
            <slot name="aiShorts"></slot>
        </TabPanel>        
    </TabPanels>
</Tabs>
</template>