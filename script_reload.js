const main = function () {
  console.log('script started')
  //const visualJSON = JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)));
  //document.querySelector('.param').textContent = visualJSON;

  console.log('Telegram script started...');

  const unsafeData = window?.Telegram?.WebApp?.initDataUnsafe;
  const startParam = unsafeData?.start_param;
  if (startParam) {
    window.location.search = `utm_medium=${startParam}`;

    if (!window.location.href.includes('utm_medium')) {
      window.location.reload() // можно убрать, если работает без него статистика
    }
  }
}
main();