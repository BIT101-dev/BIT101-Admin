/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 16:35:13
 * @Description:
 * _(:з」∠)_
 */
import { request } from '../request';

/** 获取举报列表 */
export const fetchReportList = async ({ page = 0, uid = '', obj = '', status = -1 }) => {
  return request.get<BIT101.Report[]>('/manage/reports', {
    params: {
      page,
      uid,
      obj,
      status
    }
  });
};

/** 修改举报状态 */
export const updateReportStatus = async ({ id, status }: { id: number; status: BIT101.ReportStatus }) => {
  return request.put(`/manage/reports/${id}`, {
    status: Number(status)
  });
};
