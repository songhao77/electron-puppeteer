interface ElectronAPI {
  sendMessage(message: any): void;
  openModal(): void;
}

// 扩展 window 对象
interface Window {
  electronAPI: ElectronAPI;
}
