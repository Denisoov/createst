<script>

import IconHome from '@/components/icons/IconHome.vue'
import IconQuestion from '@/components/icons/IconQuestion.vue'
import IconUser from '@/components/icons/IconUser.vue'

export default {
    components: {
        IconHome,
        IconQuestion,
        IconUser
    }
}
</script>

<template>
    <div class="the-header">
        <div class="header-bar">
            <icon-home></icon-home>
            <ul class="menu">
                <li>
                    <icon-home />
                </li>
                <li>
                    <icon-question />
                </li>
                <li>
                    <icon-user />         
                </li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .the-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        z-index: -55;
        font-family: "Montserrat-Medium";
        z-index: -55;
        background: linear-gradient(180deg, #171B94 0%, #242ACE 100%);
        color: #F3F3F3;
    }
    .header-bar {
        width: 100%;
        height: 100px;
        max-width: 1980px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu {
            display: flex;
            align-items: center;
            margin: 0;
            list-style-type: none;
            width: initial;
            height: 34px;
            
            li {
                display: inline-block;
                width: initial;
                margin-right: 30px;
                height: 31px;
            }
        }
    }
</style>