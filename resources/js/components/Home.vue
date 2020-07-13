<template>
    <div>
        <navbar></navbar>
        <articles></articles>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Articles from './Articles';

export default {
    components: {
        'navbar': Navbar,
        'articles': Articles
    }, 
    name: 'home'
}
</script>