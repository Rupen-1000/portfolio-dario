<script setup>
import Profile from './profile/Profile.vue';
import Content from './content/Content.vue';
</script>

<!-- NOTE: discarded component! Remove in next commit -->
<template>
    <div class="layout">
        <div class="profile">
            <Profile/>
        </div>
        <div class="content">
            <Content/>
        </div>
        
    </div>

</template>

<style scoped>

/* We define the space shared by the profile section and content section */

/* In full mode content is responsible for scrolling but in moblie mode layout is. */

.layout {
    border: 2px solid purple;
    box-sizing: border-box;
    display:block;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.profile {
    border: 3px solid blue;
    box-sizing: border-box;
    display: flex;
}

.content {
    border: 3px solid green;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .layout {
        margin-top: 10px;
        width: 90vw;
    }

    .profile {
        margin: 12% 2% 0% 30%;
        height: 20%;
        
    }

    .content {
        margin: 15% 2% 0% 2%;
        height: 100%;
    }
}


</style>