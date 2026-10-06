import { spawn } from 'child_process';
import http from 'http';

// Helper to interact with Chrome via DevTools Protocol WebSocket
async function main() {
  console.log('🚀 Starting Chrome for Navigation & Scrolling Test Suite...');

  const chromeProc = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=1440,900',
  ]);

  // Wait for Chrome remote debugging port to become ready
  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      versionData = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9223/json/version', (res) => {
          let data = '';
          res.on('data', (c) => (data += c));
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  if (!versionData) {
    console.error('Failed to connect to Chrome remote debugging port.');
    chromeProc.kill();
    process.exit(1);
  }

  console.log('Connected to Chrome:', versionData.Browser);

  // Helper for CDP sessions
  const createPage = async (viewport = { width: 1440, height: 900 }) => {
    const target = await new Promise((resolve, reject) => {
      const req = http.request(
        'http://127.0.0.1:9223/json/new?about:blank',
        { method: 'PUT' },
        (res) => {
          let data = '';
          res.on('data', (c) => (data += c));
          res.on('end', () => resolve(JSON.parse(data)));
        }
      );
      req.on('error', reject);
      req.end();
    });

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve) => ws.addEventListener('open', resolve));

    let id = 1;
    const pending = new Map();
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    });

    const send = (method, params = {}) =>
      new Promise((resolve) => {
        const msgId = id++;
        pending.set(msgId, resolve);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 600,
    });

    const evaluate = async (expression) => {
      const res = await send('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      return res.result?.result?.value;
    };

    const navigate = async (url) => {
      await send('Page.navigate', { url });
      // wait for load
      await new Promise((r) => setTimeout(r, 1200));
    };

    const close = async () => {
      ws.close();
      await new Promise((resolve) => {
        const req = http.request(
          `http://127.0.0.1:9223/json/close/${target.id}`,
          { method: 'GET' },
          resolve
        );
        req.end();
      });
    };

    return { send, evaluate, navigate, close };
  };

  const results = [];

  try {
    const page = await createPage({ width: 1440, height: 900 });

    console.log('\n--- Running Navigation Tests (Desktop 1440x900) ---');

    // Load home docs
    await page.navigate('http://127.0.0.1:5173/docs');

    // Test 1: Click "Welcome to Operon"
    console.log('\nTesting Test 1: Click "Welcome to Operon"...');
    await page.evaluate(`(() => {
      const link = Array.from(document.querySelectorAll('aside a')).find(a => a.textContent.includes('Welcome to Operon'));
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 500));
    const title1 = await page.evaluate(`document.querySelector('h1')?.textContent`);
    const path1 = await page.evaluate(`window.location.pathname`);
    const pass1 = path1.includes('/welcome-to-operon') && title1.includes('Welcome to Operon');
    results.push({ test: 'Test 1: Welcome to Operon navigation', pass: pass1, details: `Path: ${path1}, Title: ${title1}` });
    console.log(pass1 ? '✅ PASS' : '❌ FAIL', `Path: ${path1}, Title: ${title1}`);

    // Test 2: Click "Register Your School"
    console.log('\nTesting Test 2: Click "Register Your School"...');
    await page.evaluate(`(() => {
      const link = Array.from(document.querySelectorAll('aside a')).find(a => a.textContent.includes('Register Your School'));
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 500));
    const title2 = await page.evaluate(`document.querySelector('h1')?.textContent`);
    const path2 = await page.evaluate(`window.location.pathname`);
    const pass2 = path2.includes('/register-your-school') && title2.includes('Register Your School');
    results.push({ test: 'Test 2: Register Your School navigation', pass: pass2, details: `Path: ${path2}, Title: ${title2}` });
    console.log(pass2 ? '✅ PASS' : '❌ FAIL', `Path: ${path2}, Title: ${title2}`);

    // Test 3: Click "Verify Your Account"
    console.log('\nTesting Test 3: Click "Verify Your Account"...');
    await page.evaluate(`(() => {
      const link = Array.from(document.querySelectorAll('aside a')).find(a => a.textContent.includes('Verify Your Account'));
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 500));
    const title3 = await page.evaluate(`document.querySelector('h1')?.textContent`);
    const path3 = await page.evaluate(`window.location.pathname`);
    const pass3 = path3.includes('/verify-your-account') && title3.includes('Verify Your Account');
    results.push({ test: 'Test 3: Verify Your Account navigation', pass: pass3, details: `Path: ${path3}, Title: ${title3}` });
    console.log(pass3 ? '✅ PASS' : '❌ FAIL', `Path: ${path3}, Title: ${title3}`);

    // Return to Register Your School for On This Guide anchor tests
    await page.navigate('http://127.0.0.1:5173/docs/registration/register-your-school');

    // Test 4: Anchor "Introduction"
    console.log('\nTesting Test 4: Anchor click #introduction...');
    await page.evaluate(`(() => {
      const link = document.querySelector('a[href="#introduction"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 400));
    const hash4 = await page.evaluate(`window.location.hash`);
    const introTop = await page.evaluate(`document.getElementById('introduction').getBoundingClientRect().top`);
    const pass4 = hash4 === '#introduction' && introTop >= 0 && introTop <= 150;
    results.push({ test: 'Test 4: #introduction anchor scroll', pass: pass4, details: `Hash: ${hash4}, Section Top: ${introTop}px` });
    console.log(pass4 ? '✅ PASS' : '❌ FAIL', `Hash: ${hash4}, Section Top: ${introTop}px`);

    // Test 5: Anchor "Before you start"
    console.log('\nTesting Test 5: Anchor click #before-you-start...');
    await page.evaluate(`(() => {
      const link = document.querySelector('a[href="#before-you-start"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 600));
    const hash5 = await page.evaluate(`window.location.hash`);
    const prereqTop = await page.evaluate(`document.getElementById('before-you-start').getBoundingClientRect().top`);
    const pass5 = hash5 === '#before-you-start' && prereqTop >= 50 && prereqTop <= 160;
    results.push({ test: 'Test 5: #before-you-start anchor scroll', pass: pass5, details: `Hash: ${hash5}, Section Top: ${prereqTop}px` });
    console.log(pass5 ? '✅ PASS' : '❌ FAIL', `Hash: ${hash5}, Section Top: ${prereqTop}px`);

    // Test 6: Anchor "Video walkthrough"
    console.log('\nTesting Test 6: Anchor click #video-walkthrough...');
    await page.evaluate(`(() => {
      const link = document.querySelector('a[href="#video-walkthrough"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 600));
    const hash6 = await page.evaluate(`window.location.hash`);
    const videoTop = await page.evaluate(`document.getElementById('video-walkthrough').getBoundingClientRect().top`);
    const pass6 = hash6 === '#video-walkthrough' && videoTop >= 50 && videoTop <= 160;
    results.push({ test: 'Test 6: #video-walkthrough anchor scroll', pass: pass6, details: `Hash: ${hash6}, Section Top: ${videoTop}px` });
    console.log(pass6 ? '✅ PASS' : '❌ FAIL', `Hash: ${hash6}, Section Top: ${videoTop}px`);

    // Test 7: Anchor "Step-by-step guide"
    console.log('\nTesting Test 7: Anchor click #step-by-step-guide...');
    await page.evaluate(`(() => {
      const link = document.querySelector('a[href="#step-by-step-guide"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 600));
    const hash7 = await page.evaluate(`window.location.hash`);
    const stepsTop = await page.evaluate(`document.getElementById('step-by-step-guide').getBoundingClientRect().top`);
    const pass7 = hash7 === '#step-by-step-guide' && stepsTop >= 50 && stepsTop <= 160;
    results.push({ test: 'Test 7: #step-by-step-guide anchor scroll', pass: pass7, details: `Hash: ${hash7}, Section Top: ${stepsTop}px` });
    console.log(pass7 ? '✅ PASS' : '❌ FAIL', `Hash: ${hash7}, Section Top: ${stepsTop}px`);

    // Test 8: Anchor "Completion & Next guide"
    console.log('\nTesting Test 8: Anchor click #completion...');
    await page.evaluate(`(() => {
      const link = document.querySelector('a[href="#completion"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 600));
    const hash8 = await page.evaluate(`window.location.hash`);
    const completeTop = await page.evaluate(`document.getElementById('completion').getBoundingClientRect().top`);
    const pass8 = hash8 === '#completion' && completeTop >= 50 && completeTop <= 250;
    results.push({ test: 'Test 8: #completion anchor scroll', pass: pass8, details: `Hash: ${hash8}, Section Top: ${completeTop}px` });
    console.log(pass8 ? '✅ PASS' : '❌ FAIL', `Hash: ${hash8}, Section Top: ${completeTop}px`);

    // Test 9: Direct URL with hash
    console.log('\nTesting Test 9: Direct URL load with #video-walkthrough...');
    await page.navigate('http://127.0.0.1:5173/docs/registration/register-your-school#video-walkthrough');
    await new Promise((r) => setTimeout(r, 800));
    const directHash = await page.evaluate(`window.location.hash`);
    const directVideoTop = await page.evaluate(`document.getElementById('video-walkthrough').getBoundingClientRect().top`);
    const pass9 = directHash === '#video-walkthrough' && directVideoTop >= 50 && directVideoTop <= 160;
    results.push({ test: 'Test 9: Direct hash URL loading', pass: pass9, details: `Hash: ${directHash}, Video Top: ${directVideoTop}px` });
    console.log(pass9 ? '✅ PASS' : '❌ FAIL', `Hash: ${directHash}, Video Top: ${directVideoTop}px`);

    // Test 10: Browser Back/Forward navigation with hash
    console.log('\nTesting Test 10: Browser Back navigation...');
    // Click #before-you-start
    await page.evaluate(`document.querySelector('a[href="#before-you-start"]').click()`);
    await new Promise((r) => setTimeout(r, 500));
    // Click #step-by-step-guide
    await page.evaluate(`document.querySelector('a[href="#step-by-step-guide"]').click()`);
    await new Promise((r) => setTimeout(r, 500));
    // Go Back in browser history
    await page.evaluate(`window.history.back()`);
    await new Promise((r) => setTimeout(r, 600));
    const backHash = await page.evaluate(`window.location.hash`);
    const pass10 = backHash === '#before-you-start';
    results.push({ test: 'Test 10: Browser Back hash restoration', pass: pass10, details: `Hash after back: ${backHash}` });
    console.log(pass10 ? '✅ PASS' : '❌ FAIL', `Hash after back: ${backHash}`);

    // Test 11: Scroll spy
    console.log('\nTesting Test 11: Scroll spy automatic TOC highlight...');
    // Scroll to video walkthrough
    await page.evaluate(`document.getElementById('video-walkthrough').scrollIntoView({ behavior: 'instant' })`);
    await new Promise((r) => setTimeout(r, 600));
    const activeTocText = await page.evaluate(`(() => {
      const activeLink = document.querySelector('nav[aria-label="On this guide"] a.font-bold');
      return activeLink ? activeLink.textContent.trim() : null;
    })()`);
    const pass11 = activeTocText === 'Video walkthrough';
    results.push({ test: 'Test 11: Scroll spy active TOC highlight', pass: pass11, details: `Active TOC: ${activeTocText}` });
    console.log(pass11 ? '✅ PASS' : '❌ FAIL', `Active TOC: ${activeTocText}`);

    await page.close();

    // Test 12: Mobile viewports 390x844
    console.log('\n--- Running Mobile Navigation Tests (390x844) ---');
    const mobilePage = await createPage({ width: 390, height: 844 });
    await mobilePage.navigate('http://127.0.0.1:5173/docs/registration/register-your-school');

    // Check sticky header offset on mobile
    await mobilePage.evaluate(`(() => {
      const toggle = document.querySelector('button[aria-controls="mobile-toc"]');
      if (toggle) toggle.click();
    })()`);
    await new Promise((r) => setTimeout(r, 300));
    await mobilePage.evaluate(`(() => {
      const link = document.querySelector('#mobile-toc a[href="#before-you-start"]');
      if (link) link.click();
    })()`);
    await new Promise((r) => setTimeout(r, 600));
    const mobilePrereqTop = await mobilePage.evaluate(`document.getElementById('before-you-start').getBoundingClientRect().top`);
    const pass12 = mobilePrereqTop >= 50 && mobilePrereqTop <= 160;
    results.push({ test: 'Test 12: Mobile anchor scrolling & sticky header clearance', pass: pass12, details: `Mobile Section Top: ${mobilePrereqTop}px` });
    console.log(pass12 ? '✅ PASS' : '❌ FAIL', `Mobile Section Top: ${mobilePrereqTop}px`);

    await mobilePage.close();

    console.log('\n=============================================');
    console.log('TEST SUITE SUMMARY:');
    console.log('=============================================');
    let allPassed = true;
    results.forEach((r, idx) => {
      if (!r.pass) allPassed = false;
      console.log(`${r.pass ? '✅ PASS' : '❌ FAIL'} [${idx + 1}/12] ${r.test} (${r.details})`);
    });
    console.log('=============================================');
    console.log(allPassed ? '🎉 ALL 12 TESTS PASSED PERFECTLY!' : '⚠️ SOME TESTS FAILED');

  } catch (err) {
    console.error('Test execution error:', err);
  } finally {
    chromeProc.kill();
  }
}

main();
