import Image from 'next/image'
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from 'lucide-react'

const keywordTags = [
  'Kush Casino',
  'Kush Casino официальный сайт',
  'Kush Casino официальный',
  'куш казино официальный сайт',
  'куш казино официальный',
  'куш казино',
  'Kush Casino зеркало',
  'Kush Casino играть',
  'куш казино зеркало рабочее',
  'куш казино играть',
  'куш казино онлайн',
  'куш казино зеркало',
]

const highlights = [
  { title: 'Быстрый вход', text: 'Откройте официальный адрес с телефона без лишних шагов и сложной навигации.' },
  { title: 'Игры онлайн', text: 'Слоты, live-столы и классические форматы собраны в одном понятном пространстве.' },
  { title: 'Ответственный выбор', text: 'Играйте осознанно: заранее задавайте лимит и не воспринимайте игру как способ заработка.' },
]

export default function Page() {
  return (
    <main className="kc-shell">
      <header className="kc-header">
        <a className="kc-brand" href="#top" aria-label="Kush Casino — на главную">
          <span className="kc-brand-mark" aria-hidden="true">K</span>
          <span>Kush <em>Casino</em></span>
        </a>
        <nav className="kc-nav" aria-label="Основная навигация">
          <a href="#about">Обзор</a>
          <a href="#games">Игры</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="kc-header-link" href="#official">Официальный вход <ArrowUpRight size={16} /></a>
      </header>

      <section className="kc-hero" id="top" aria-labelledby="hero-title">
        <div className="kc-hero-copy">
          <p className="kc-kicker"><Sparkles size={15} /> Навигация для игроков</p>
          <h1 id="hero-title">Kush Casino — игра начинается с правильного адреса</h1>
          <p className="kc-lead">Короткий и понятный гид: как найти Kush Casino официальный сайт, чем отличается рабочее зеркало и на что обратить внимание перед игрой онлайн.</p>
          <div className="kc-actions">
            <a className="kc-button" href="#official">Перейти к Kush Casino <ArrowUpRight size={18} /></a>
            <a className="kc-text-link" href="#about">Читать обзор <span>↓</span></a>
          </div>
          <div className="kc-proof"><ShieldCheck size={18} /><span>Проверяйте адрес, возрастные ограничения и правила региона перед входом.</span></div>
        </div>
        <div className="kc-hero-art">
          <Image src="/kush-casino-table.png" alt="Рулеточный стол в изумрудных и золотых тонах" fill priority sizes="(max-width: 768px) 100vw, 48vw" />
          <div className="kc-art-label"><span>01</span><strong>Игра без лишнего шума</strong><small>Ваш темп. Ваш выбор.</small></div>
        </div>
      </section>

      <section className="kc-strip" aria-label="Преимущества Kush Casino">
        {highlights.map((item) => <article key={item.title}><span className="kc-dot" /><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </section>

      <article className="kc-article" id="about">
        <p className="kc-eyebrow">Понятно о главном</p>
        <h2>Kush Casino официальный сайт: с чего начать игроку</h2>
        <p>Если вы ищете <strong>Kush Casino официальный сайт</strong>, начинайте с проверки адреса и внешнего вида страницы. Официальный ресурс обычно открывается стабильно, содержит актуальные правила, контакты поддержки и понятные разделы с играми. Не вводите логин и пароль на первой попавшейся копии: внимательно сверяйте домен, защищённое соединение и единый стиль бренда Kush Casino.</p>
        <p>Запрос <strong>Kush Casino официальный</strong> часто появляется у новых пользователей, которым важно быстро отличить первоисточник от рекламных страниц. Такой подход разумен: сначала изучите условия, затем выберите демо-режим или минимальную ставку и только после этого принимайте решение о продолжении.</p>

        <div className="kc-article-grid" id="official">
          <section>
            <p className="kc-eyebrow">Адрес и доступ</p>
            <h2>Куш казино официальный сайт без путаницы</h2>
            <p>Фраза <strong>куш казино официальный сайт</strong> ведёт к той же задаче — найти безопасную точку входа. Сохраните проверенный адрес в закладках, не переходите по подозрительным баннерам и не передавайте данные третьим лицам. Если страница просит необычные разрешения или обещает гарантированный выигрыш, закройте её и перепроверьте источник.</p>
          </section>
          <section id="games">
            <p className="kc-eyebrow">Форматы</p>
            <h2>Куш казино играть: слоты и столы онлайн</h2>
            <p>Запрос <strong>куш казино играть</strong> подразумевает быстрый доступ к каталогу. Внутри можно выбрать игровые автоматы, live-столы и классические игры. Начните с интерфейса, который легко читается на смартфоне: крупные кнопки, фильтры по жанрам и ясное отображение баланса делают сессию спокойнее. <strong>Куш казино онлайн</strong> удобно использовать тогда, когда вы заранее определили бюджет и продолжительность игры.</p>
          </section>
        </div>

        <section className="kc-mirror" id="mirror">
          <div>
            <p className="kc-eyebrow">Если сайт недоступен</p>
            <h2>Kush Casino зеркало: рабочее решение для входа</h2>
            <p>Когда основной адрес временно не открывается, игроки ищут <strong>Kush Casino зеркало</strong> или <strong>куш казино зеркало рабочее</strong>. Зеркало — это альтернативный адрес с тем же интерфейсом и аккаунтом, а не отдельный новый клуб. Пользуйтесь только ссылкой из официальных каналов, проверяйте соединение и не скачивайте неизвестные приложения для «разблокировки».</p>
          </div>
          <div className="kc-note"><Check size={18} /><span>Одинаковый бренд и правила<br />Никаких обещаний гарантированного выигрыша<br />Поддержка и контакты доступны</span></div>
        </section>

        <section id="faq" className="kc-faq">
          <p className="kc-eyebrow">Короткие ответы</p>
          <h2>Куш казино официальный: частые вопросы</h2>
          <details open><summary>Как найти Kush Casino официальный сайт?</summary><p>Проверьте домен, HTTPS, контакты и актуальные правила. Надёжнее использовать адрес из подтверждённого канала бренда, а не случайную рекламу.</p></details>
          <details><summary>Что делать, если не открывается куш казино?</summary><p>Проверьте интернет, обновите страницу и убедитесь, что адрес введён без ошибок. Если проблема сохраняется, ищите рабочее зеркало только в официальном источнике.</p></details>
          <details><summary>Как начать Kush Casino играть онлайн?</summary><p>Ознакомьтесь с правилами, выберите подходящую игру, определите лимит и не увеличивайте ставку ради попытки отыграться.</p></details>
        </section>
      </article>

      <footer className="kc-footer">
        <div><a className="kc-brand" href="#top"><span className="kc-brand-mark">K</span><span>Kush <em>Casino</em></span></a><p>Информационный обзор для совершеннолетних пользователей.</p></div>
        <div className="kc-hashtags" aria-label="Ключевые фразы"><span>Поиск по темам</span>{keywordTags.map((tag) => <a key={tag} href="#top">#{tag.replaceAll(' ', '_')}</a>)}</div>
        <p className="kc-legal">18+ · Играйте ответственно. Не является гарантией выигрыша.</p>
      </footer>
    </main>
  )
}

