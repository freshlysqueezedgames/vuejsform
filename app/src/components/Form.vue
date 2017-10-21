<template>
  <form class="el-form demo-ruleForm">
    <div class="el-form-item is-required">
      <label for="name" class="el-form-item__label" style="width: 120px;">Activity name</label>
      <div class="el-form-item__content" style="margin-left: 120px;">
        <div class="el-input">
          <!---->
          <!---->
          <input autocomplete="off" type="text" rows="2" validateevent="true" class="el-input__inner"></div>
          <!---->
        </div>
      </div>
      <div class="el-form-item is-required">
        <label for="region" class="el-form-item__label" style="width: 120px;">Activity zone</label>
        <div class="el-form-item__content" style="margin-left: 120px;">
          <div class="el-select">
            <!---->
            <div class="el-input">
              <!---->
              <i class="el-input__icon el-icon-caret-top"></i>
              <input autocomplete="off" placeholder="Activity zone" readonly="readonly" icon="caret-top" type="text" rows="2" class="el-input__inner"></div>
              <div class="el-select-dropdown" style="display: none; min-width: 360px;">
                <div class="el-scrollbar" style="">
                  <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                    <ul class="el-scrollbar__view el-select-dropdown__list" style="position: relative;">
                      <li class="el-select-dropdown__item">
                        <span>Zone one</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Zone two</span>
                      </li>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div style="width: 1px; height: 1px;"></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </ul>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                  </div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div style="width: 361px; height: 37px;"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item is-required">
          <label class="el-form-item__label" style="width: 120px;">Activity time</label>
          <div class="el-form-item__content" style="margin-left: 120px;">
            <div class="el-col el-col-11">
              <div class="el-form-item is-required">
                <!---->
                <div class="el-form-item__content">
                  <div class="el-date-editor el-input el-date-editor--date" style="width: 100%;">
                    <!---->
                    <i class="el-input__icon el-icon-date"></i>
                    <input autocomplete="off" placeholder="Pick a date" type="text" rows="2" class="el-input__inner"></div>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="line el-col el-col-2">-</div><div class="el-col el-col-11"><div class="el-form-item is-required"><!----><div class="el-form-item__content"><div class="el-date-editor el-input el-date-editor--time" type="fixed-time" style="width: 100%;"><!----><i class="el-input__icon el-icon-time"></i><input autocomplete="off" placeholder="Pick a time" type="text" rows="2" class="el-input__inner"></div><!----></div></div></div><!----></div></div><div class="el-form-item"><label for="delivery" class="el-form-item__label" style="width: 120px;">Instant delivery</label><div class="el-form-item__content" style="margin-left: 120px;"><label class="el-switch"><div class="el-switch__mask" style="display: none;"></div><input type="checkbox" name="" true-value="true" class="el-switch__input"><span class="el-switch__core" style="width: 46px;"><span class="el-switch__button" style="transform: translate(2px, 2px);"></span></span><div class="el-switch__label el-switch__label--left" style="width: 46px; display: none;"><!----><!----></div><div class="el-switch__label el-switch__label--right" style="width: 46px;"><!----><!----></div></label><!----></div></div><div class="el-form-item is-required"><label for="type" class="el-form-item__label" style="width: 120px;">Activity type</label><div class="el-form-item__content" style="margin-left: 120px;"><div class="el-checkbox-group"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" name="type" class="el-checkbox__original" value="Online activities"></span><span class="el-checkbox__label">Online activities</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" name="type" class="el-checkbox__original" value="Promotion activities"></span><span class="el-checkbox__label">Promotion activities</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" name="type" class="el-checkbox__original" value="Offline activities"></span><span class="el-checkbox__label">Offline activities</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" name="type" class="el-checkbox__original" value="Simple brand exposure"></span><span class="el-checkbox__label">Simple brand exposure</span></label></div><!----></div></div><div class="el-form-item is-required"><label for="resource" class="el-form-item__label" style="width: 120px;">Resources</label><div class="el-form-item__content" style="margin-left: 120px;"><div class="el-radio-group"><label class="el-radio"><span class="el-radio__input"><span class="el-radio__inner"></span><input type="radio" class="el-radio__original" value="Sponsorship"></span><span class="el-radio__label">Sponsorship</span></label><label class="el-radio"><span class="el-radio__input"><span class="el-radio__inner"></span><input type="radio" class="el-radio__original" value="Venue"></span><span class="el-radio__label">Venue</span></label></div><!----></div></div><div class="el-form-item is-required"><label for="desc" class="el-form-item__label" style="width: 120px;">Activity form</label><div class="el-form-item__content" style="margin-left: 120px;"><div class="el-textarea"><textarea type="textarea" rows="2" autocomplete="off" validateevent="true" class="el-textarea__inner"></textarea></div><!----></div></div><div class="el-form-item"><!----><div class="el-form-item__content" style="margin-left: 120px;"><button type="button" class="el-button el-button--primary"><!----><!----><span>Create</span></button><button type="button" class="el-button el-button--default"><!----><!----><span>Reset</span></button><!----></div></div></form>
</template>

<script>

import person from '@/stores/Person'

export default {
  name: 'Form',
  data () {
    return {
      msg: 'This is where the form goes',
      privateState: {},
      sharedState: person.state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
