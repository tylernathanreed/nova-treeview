<template>
    <component :is="tag">
        <component :is="toggleTag" :class="toggleClass" @click="toggle">

            <slot name="label"></slot>

            <slot name="label-open" v-if="open">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="treeview-icon">
                    <path fill="var(--sidebar-icon)" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path>
                </svg>
            </slot>

            <slot name="label-closed" v-if="!open">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="treeview-icon">
                    <path fill="var(--sidebar-icon)" d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"></path>
                </svg>
            </slot>

        </component>

        <slot name="menu" v-if="open"></slot>

    </component>
</template>

<script>
    export default {

        props: {

            tag: {
                type: String,
                default: 'div'
            },

            toggleTag: {
                type: String,
                default: 'div'
            },

            toggleClass: {
                type: String,
                default: ''
            }

        },

        data: function() {

            return {
                open: false
            }

        },

        methods: {

            toggle: function() {
                this.open = !this.open;
            }

        }

    }
</script>