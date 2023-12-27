<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 16:39:29
 * @Description:
 * _(:з」∠)_
-->
<template>
  <n-modal v-model:show="modalVisible" preset="card" title="更改状态" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="状态" path="status">
          <n-select v-model:value="formModel.status" :options="reportStatusOptions" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { ReportStatus, reportStatusOptions } from '@/constants';
import { createRequiredFormRule } from '@/utils';

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 编辑的表格行数据 */
  editData?: BIT101.Report | null;
}

defineOptions({ name: 'TableActionModal' });

const props = withDefaults(defineProps<Props>(), {
  editData: null
});

interface Emits {
  (e: 'update:visible', visible: boolean): void;
  (e: 'update-status', id: string, status: BIT101.ReportStatus): void;
}

const emit = defineEmits<Emits>();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});
const closeModal = () => {
  modalVisible.value = false;
};

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<BIT101.Report, 'status'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
  status: createRequiredFormRule('请选择举报状态')
};

function createDefaultFormModel(): FormModel {
  return {
    status: props.editData?.status ?? ReportStatus.WAITING
  };
}

async function handleSubmit() {
  await formRef.value?.validate();
  emit('update-status', props.editData!.id, formModel.status);
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      formModel.status = props.editData?.status ?? ReportStatus.WAITING;
    }
  }
);
</script>

<style scoped></style>
