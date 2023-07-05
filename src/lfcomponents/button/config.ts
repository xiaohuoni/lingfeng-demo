import { type Component } from '@wufengteam/core';

const config: Component = {
  icon: 'CCButton',
  label: 'CC按钮',
  type: 'CCButton',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  isContainer: false,
  isInlineBlock: true,
  compLib: 'comm',
  props: {
    name: '按钮',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
  },
};

export default config;
