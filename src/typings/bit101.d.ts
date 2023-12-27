/*
 * @Author: flwfdd
 * @Date: 2023-10-28 23:44:27
 * @LastEditTime: 2023-12-27 15:59:41
 * @Description:
 * _(:з」∠)_
 */
declare namespace BIT101 {
  // 帖子
  interface Poster {
    anonymous: boolean; // 是否匿名
    claim: {
      id: number; // 声明id
      text: string; // 声明内容
    };
    comment_num: number; // 评论数量
    create_time: string; // 发布时间
    edit_time: string; // 编辑时间
    id: number;
    images: Image[]; // 图片列表
    like: boolean; // 是否赞过
    like_num: number; // 点赞数量
    own: boolean; // 是否可编辑
    plugins: string; // 插件列表
    public: boolean; // 是否公开
    tags: string[]; // 标签列表
    text: string; // 文本内容
    title: string; // 标题
    update_time: string; // 更新时间
    user: User; // 发布用户
  }

  // 声明
  interface Claim {
    id: number;
    text: string;
  }

  // 用户
  interface User {
    avatar: Image; // 头像链接
    create_time: string; // 注册时间
    id: number;
    motto: string; // 格言 简介
    nickname: string; // 昵称
    identity: {
      id: number; // 用户类型id
      color: string; // 标识颜色
      text: string; // 用户类型描述
    };
  }

  // 图片
  interface Image {
    low_url: string; // 低分辨率图片链接
    mid: string; // 图片唯一编码
    url: string; // 原图链接
  }

  // 评论
  interface Comment {
    id: number; // 评论id
    obj: string; // 评论对象
    text: string; // 评论内容
    images: Image[]; // 图片列表
    user: User; // 评论用户
    anonymous: boolean; // 是否匿名
    create_time: string; // 发布时间
    update_time: string; // 更新时间
    like: boolean; // 是否赞过
    like_num: number; // 点赞数量
    comment_num: number; // 评论数量
    own: boolean; // 是否可删除
    rate: number; // 评分
    reply_user: User; // 回复用户
    reply_obj: string; // 回复对象
    sub: Comment[]; // 子评论
  }

  interface ReportType {
    id: number; // 举报类型id
    text: string; // 举报类型描述
  }

  enum ReportStatus {
    WAITING = 0,
    SUCCESS = 1,
    FAIL = 2
  }

  interface Report {
    created_time: string; // 举报时间
    id: string; // 举报id
    obj: string; // 举报对象
    report_type: ReportType; // 举报类型
    status: ReportStatus; // 举报状态
    text: string; // 举报内容
    user: User; // 举报人
  }
}
