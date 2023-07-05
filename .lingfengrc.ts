import { defineConfig } from 'lingfeng';

export default defineConfig({
  platform: 'pc',
  // TODO: 测试演示地址，请根据实际情况更换为真实的开发服务器地址
  baseUrlRuntime: 'http://172.21.72.205:10000/',
  baseUrlEditor: 'http://172.21.72.205:8088/',
});
