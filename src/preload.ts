// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: async (params?: any) => {
    const res = await ipcRenderer.invoke('initPPTR', params);
    console.log(res);
  },
});
