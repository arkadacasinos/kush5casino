const searchPhrases = [
  'kush casino',
  'kush casino официальный сайт',
  'kush casino официальный',
  'куш казино официальный сайт',
  'куш казино официальный',
  'куш казино',
  'kush casino зеркало',
  'kush casino играть',
  'куш казино зеркало рабочее',
  'куш казино играть',
  'куш казино онлайн',
  'куш казино зеркало',
  'kush казино',
]

export default function Page() {
  return (
    <main className="kush-shell">
      <header className="kush-header">
        <a className="kush-mark" href="#top" aria-label="Kush Casino — на главную">
          <span className="kush-mark-symbol">K</span>
          <span>Kush <b>Casino</b></span>
        </a>
        <nav className="kush-nav" aria-label="Основная навигация">
          <a href="#games">Игры</a>
          <a href="#guide">Гид</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="kush-header-link" href="#start">Войти <span aria-hidden="true">↗</span></a>
      </header>

      <section className="kush-hero" id="top" aria-labelledby="hero-title">
        <div className="kush-hero-copy">
          <p className="kush-eyebrow">ОНЛАЙН-КАЗИНО ДЛЯ МОБИЛЬНОЙ ИГРЫ</p>
          <h1 id="hero-title">Kush Casino — игра начинается с правильного выбора</h1>
          <p className="kush-lead">Быстрый вход, понятная навигация и азартные игры, которые удобно открывать с телефона. Разбираемся, как найти официальный сайт Kush Casino и начать с комфортом.</p>
          <div className="kush-hero-actions" id="start">
            <a className="kush-primary-action" href="#guide">Открыть гид <span aria-hidden="true">→</span></a>
            <a className="kush-text-action" href="#games">Смотреть игры</a>
          </div>
          <div className="kush-trust-line"><span>18+</span><span>Ответственная игра</span><span>Мобильная версия</span></div>
        </div>
        <figure className="kush-hero-art">
          <img src="/kush-casino-lounge.png" alt="Рулетка и карты на зелёном игровом сукне" width="900" height="650" />
          <figcaption>Спокойный интерфейс. Яркие эмоции.</figcaption>
        </figure>
      </section>

      <section className="kush-intro kush-section" id="guide" aria-labelledby="intro-title">
        <div className="kush-section-label">01 / НАВИГАТОР ИГРОКА</div>
        <div className="kush-intro-grid">
          <h2 id="intro-title">Kush Casino официальный сайт: начните без лишних шагов</h2>
          <div className="kush-copy-stack">
            <p>Если вы ищете <strong>kush casino официальный сайт</strong>, прежде всего обращайте внимание на адрес страницы, защищённое соединение и аккуратную структуру. Официальный ресурс Kush Casino должен быстро загружаться, корректно работать на смартфоне и давать понятное объяснение условий игры.</p>
            <p>Запрос <strong>kush casino официальный</strong> часто означает желание найти актуальный вход без случайных копий. Не переходите по сомнительным баннерам, проверяйте адрес и не передавайте пароль третьим лицам. Такой простой подход помогает сохранить контроль над аккаунтом и игровым бюджетом.</p>
          </div>
        </div>
      </section>

      <section className="kush-dark-band" id="games" aria-labelledby="games-title">
        <div className="kush-section kush-games-section">
          <div className="kush-section-label">02 / ВЫБОР ФОРМАТА</div>
          <div className="kush-games-heading"><h2 id="games-title">Куш казино играть удобно там, где всё понятно</h2><p>Один аккаунт — разные игровые сценарии. Выберите ритм, который подходит именно вам.</p></div>
          <div className="kush-feature-grid">
            <article className="kush-feature"><span className="kush-feature-number">A</span><h3>Слоты без суеты</h3><p>Классические автоматы и современные механики помогают быстро разобраться в правилах. Перед стартом посмотрите таблицу выплат и определите сумму, которую готовы потратить.</p></article>
            <article className="kush-feature"><span className="kush-feature-number">B</span><h3>Живой стол</h3><p>Рулетка и карточные игры подойдут тем, кому нравится размеренный темп. Не торопитесь повышать ставку: сначала изучите интерфейс и лимиты выбранного стола.</p></article>
            <article className="kush-feature"><span className="kush-feature-number">C</span><h3>Игра с телефона</h3><p>Запрос <strong>kush casino играть</strong> логично ведёт к мобильной версии: она сохраняет основные функции и не требует перегруженного приложения.</p></article>
          </div>
        </div>
      </section>

      <section className="kush-section kush-mirror" aria-labelledby="mirror-title">
        <div className="kush-mirror-art" aria-hidden="true"><span>↗</span><small>АКТУАЛЬНЫЙ<br />ВХОД</small></div>
        <div className="kush-mirror-copy"><div className="kush-section-label">03 / ДОСТУП</div><h2 id="mirror-title">Куш казино зеркало рабочее — как распознать актуальную страницу</h2><p>Когда основной адрес временно недоступен, игроки ищут <strong>куш казино зеркало рабочее</strong> или <strong>kush casino зеркало</strong>. Важно понимать: зеркало — это альтернативный адрес того же сервиса, а не новый проект. Сверяйте оформление, разделы поддержки и условия, не вводите данные на страницах с подозрительными обещаниями.</p><p>Фраза <strong>куш казино зеркало</strong> не должна означать поиск «секретного» обхода. Безопаснее сохранить проверенный адрес в закладках и пользоваться только актуальными каналами информации. Так вы быстрее вернётесь к игре и не потеряете доступ к профилю.</p></div>
      </section>

      <section className="kush-section kush-facts" aria-labelledby="facts-title">
        <div className="kush-section-label">04 / КОРОТКО О ГЛАВНОМ</div><h2 id="facts-title">Куш казино официальный сайт отвечает на вопросы игрока</h2>
        <div className="kush-facts-grid"><p><b>Что нужно для старта?</b><br />Стабильный интернет, личный аккаунт и знакомство с правилами. Начинайте с демо-режима или минимальной ставки, если формат доступен.</p><p><b>Можно ли играть онлайн?</b><br />Да, запрос <strong>куш казино онлайн</strong> отражает основной сценарий: открыть браузер, войти в профиль и выбрать игру без установки тяжёлых программ.</p><p><b>Как держать бюджет?</b><br />Заранее задайте лимит времени и расходов. Не пытайтесь отыгрываться и делайте паузы. Игра предназначена только для совершеннолетних.</p></div>
      </section>

      <section className="kush-faq kush-section" id="faq" aria-labelledby="faq-title">
        <div className="kush-section-label">05 / FAQ</div><h2 id="faq-title">Частые вопросы о Kush Casino</h2>
        <details open><summary>Чем отличается kush casino зеркало от официального сайта?</summary><p>Зеркало — альтернативный адрес доступа к тому же сервису. Проверяйте домен, HTTPS и совпадение интерфейса перед авторизацией.</p></details>
        <details><summary>Где найти куш казино официальный сайт?</summary><p>Используйте проверенные источники и внимательно сверяйте адрес страницы. Не вводите данные на сайтах с агрессивными обещаниями и подозрительными формами.</p></details>
        <details><summary>Подходит ли куш казино играть на iPhone?</summary><p>Да, мобильная версия рассчитана на современный браузер. Для комфортной игры используйте стабильное соединение и актуальную версию системы.</p></details>
      </section>

      <footer className="kush-footer">
        <div className="kush-footer-top"><a className="kush-mark" href="#top"><span className="kush-mark-symbol">K</span><span>Kush <b>Casino</b></span></a><p>Играйте осознанно. Только для лиц 18+.</p></div>
        <div className="kush-hashtags" aria-label="Поисковые фразы">{searchPhrases.map((phrase) => <a href="#top" key={phrase}>#{phrase.replaceAll(' ', '_')}</a>)}</div>
        <div className="kush-footer-bottom"><span>© 2026 Kush Casino</span><span>Информация для совершеннолетних игроков</span></div>
      </footer>
    </main>
  )
}
