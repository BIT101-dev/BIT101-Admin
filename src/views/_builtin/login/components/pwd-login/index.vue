<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-10-29 01:15:38
 * @Description: 
 * _(:з」∠)_
-->
<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-10-29 00:15:23
 * @Description: 
 * _(:з」∠)_
-->
<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="userName">
      <n-input v-model:value="model.userName" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">{{ $t('page.login.pwdLogin.rememberMe') }}</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >
        {{ $t('page.login.common.confirm') }}
      </n-button>
    </n-space>
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { formRules } from '@/utils';

const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  userName: '',
  password: ''
});

const rules: FormRules = {
  password: formRules.pwd
};

const rememberMe = ref(false);

async function handleSubmit() {
  await formRef.value?.validate();

  const { userName, password } = model;

  login(userName, password);
}
</script>

<style scoped></style>
