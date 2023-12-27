<template>
  <div class="overflow-hidden">
    <n-card title="举报管理" :bordered="false" class="h-full rounded-8px shadow-sm">
      <div class="flex-col h-full">
        <n-space class="pb-12px" justify="space-between">
          <n-space>
            <n-button size="small" type="primary" @click="getTableData">
              <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
              刷新表格
            </n-button>
            <column-setting v-model:columns="columns" />
          </n-space>
        </n-space>
        <n-data-table
          :columns="columns"
          :data="tableData"
          :loading="loading"
          :pagination="pagination"
          flex-height
          class="flex-1-hidden"
        />
        <table-action-modal v-model:visible="visible" :edit-data="editData" @update-status="updateTableEdit" />
      </div>
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { ReportStatus } from '@/constants';
import { routeName } from '@/router';
import { fetchReportList, updateReportStatus } from '@/service';
import { useRouterPush } from '@/composables';
import { useBoolean, useLoading } from '@/hooks';
import TableActionModal from './components/table-action-modal.vue';
import ColumnSetting from './components/column-setting.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<BIT101.Report[]>([]);
function setTableData(data: BIT101.Report[]) {
  tableData.value = data;
}

const columns: Ref<DataTableColumns<BIT101.Report>> = ref([
  {
    key: 'id',
    title: 'ID',
    align: 'center'
  },
  {
    key: 'obj',
    title: '举报对象',
    align: 'center',
    render: row => {
      return (
        <n-button size={'small'} onClick={() => openObj(row.obj)}>
          {row.obj}
        </n-button>
      );
    }
  },
  {
    key: 'user',
    title: '举报人',
    align: 'center',
    render: row => {
      return (
        <n-button
          size={'small'}
          onClick={() => openUser(row.user.id)}
        >{`${row.user.nickname} (${row.user.id})`}</n-button>
      );
    }
  },
  {
    key: 'report_type.text',
    title: '举报类型',
    align: 'center'
  },
  {
    key: 'created_time',
    title: '举报时间',
    align: 'center',
    render: row => {
      return new Date(row.created_time).toLocaleString();
    }
  },
  {
    key: 'status',
    title: '状态',
    align: 'center',
    render: row => {
      switch (row.status) {
        case ReportStatus.WAITING:
          return <NTag type="warning">等待</NTag>;
        case ReportStatus.SUCCESS:
          return <NTag type="success">成功</NTag>;
        case ReportStatus.FAIL:
          return <NTag type="error">失败</NTag>;
        default:
          return <NTag type="default">未知</NTag>;
      }
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
          编辑
        </NButton>
      );
    }
  }
]) as Ref<DataTableColumns<BIT101.Report>>;

const { routerPush } = useRouterPush();
function openUser(uid: number) {
  routerPush({ name: routeName('management_preview'), query: { path: `/user/${uid}` } });
}

function openObj(obj: string) {
  if (obj.startsWith('poster')) {
    routerPush({ name: routeName('management_preview'), query: { path: `/gallery/${obj.substring(6)}` } });
  }
}

const editData = ref<BIT101.Report | null>(null);

function findItem(id: string) {
  return tableData.value.find(item => item.id === id);
}

function handleEditTable(rowId: string) {
  const item = findItem(rowId);
  if (item) {
    editData.value = item;
  }
  openModal();
}

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 20, 50, 100],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

async function getTableData() {
  startLoading();
  const { data } = await fetchReportList({
    page: 0,
    uid: '',
    obj: '',
    status: -1
  });
  if (data) {
    setTableData(data);
    endLoading();
  }
}

async function updateTableEdit(id: string, status: BIT101.ReportStatus) {
  startLoading();
  const res = await updateReportStatus({
    id: Number(id),
    status
  });
  if (res.error !== null) {
    findItem(id)!.status = status;
  }
  endLoading();
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
