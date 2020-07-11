<template>
    <div class="MainSection">
        <h1>Make short your URL</h1>
        <div class="MainSection__form-container">
            <form @submit="onClickButton">
                <input
                    type="url"
                    v-model="urlValue"
                    placeholder="Paste an URL"
                    required="required"
                />&nbsp;
                <button
                    class="btn-primary"
                    type="submit"
                >Shorten</button>
            </form>
            <span class="MainSecction__message"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class MainSection extends Vue {
    urlValue = '';

    @Emit('callBack')
    onClickButton(event: Event) {
        event.preventDefault();
        return this.urlValue;
    }
}
</script>

<style>
.MainSection {
    height: 30rem;
    width: 80%;
    background: rgb(129, 129, 129);
    margin: auto;
    border-radius: 3rem;
    position: relative;
    margin-bottom: 4rem;
}
.MainSection h1 {
    transform: translate(0, 3rem);
    font-size: 4rem;
    margin-top: 2rem;
}
.MainSection__form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>