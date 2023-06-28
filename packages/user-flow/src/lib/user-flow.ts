import {launch, Browser, Page} from 'puppeteer';
import {startFlow, UserFlow} from 'lighthouse';

export async function userFlow(): Promise<string> {
  const browser: Browser = await launch({headless: false})
  const page: Page = await browser.newPage();
  const flow: UserFlow = await startFlow(page);
  await flow.navigate('https://push-based.io');
  console.log('WOLOLO');
  await browser.close();
  return 'user-flow';
}
