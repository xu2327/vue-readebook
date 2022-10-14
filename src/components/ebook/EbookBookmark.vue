<template>
  <div class="ebook-bookmark">
    <div class="ebook-bookmark-text-wrapper">
        <div class="ebook-bookmark-down-wrapper">
            <span class="icon-down"></span>
        </div>
        <div class="ebook-bookmark-text">{{text}}</div>
    </div>
    <div class="ebook-bookmark-icon-wrapper"></div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            text: 'abcd'
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";
    .ebook-bookmark {
        position: absolute;
        top: px2rem(-35);
        left: 0;
        z-index: 200;
        width: 100%;
        height: px2rem(35);
    }

</style>
