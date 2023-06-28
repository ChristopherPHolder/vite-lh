import {launch, Browser, Page} from 'puppeteer';
import {startFlow} from 'lighthouse'

export async function userFlow(): Promise<string> {
  const browser = await launch()
  const page = await browser.newPage();
  console.log('WOLOLO');
  await browser.close();
  return 'user-flow';
}
