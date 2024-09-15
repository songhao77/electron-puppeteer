import puppeteer from 'puppeteer';

export async function initPuppeteer({ width, height }: { width: number; height: number }) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=${width},${height}`],
  });

  // 打开第一个页面
  const page1 = await browser.newPage();
  const page2 = await browser.newPage();

  // 获取屏幕的宽度和高度
  const { width: pageWidth, height: pageHeight } = await page1.evaluate(() => ({
    width: window.screen.width,
    height: window.screen.height,
  }));

  // 设置浏览器窗口的大小
  await page1.setViewport({
    width: pageWidth,
    height: pageHeight,
  });

  await page2.setViewport({
    width: pageWidth,
    height: pageHeight,
  });

  await page1.goto('https://baidu.com');

  // 打开第二个页面

  await page2.goto('https://juejin.cn');

  // 获取当前所有打开的页面
  const pages = await browser.pages();

  // 遍历所有页面并打印它们的 URL
  for (const page of pages) {
    console.log(await page.url());
  }

  // 假设你想定位到 Google 的页面，可以通过 URL 查找
  const googlePage = pages.find((p) => p.url().includes('baidu.com'));

  if (googlePage) {
    console.log('定位到了 baidu.com 页面');

    // 在定位到的页面上进行操作
    await googlePage.screenshot({ path: 'baidu.com_screenshot.png' });
  }

  // 关闭浏览器
  // await browser.close();
}
