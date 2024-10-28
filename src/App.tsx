import './App.css'

function App() {

  return (

    <>
      {/* 自我介紹 */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Self Introduction</title>
        <div className="col-25 side">
          <img src="/src/assets/cat.jpg" alt="image" className="head" />
          <h2>聯絡資訊</h2>
          <ul>
            <li>
              <h4>Phone</h4>
              <p>0912345678</p>
            </li>
            <hr />
            <li>
              <h4>Email</h4>
              <p>...</p>
            </li>
            <hr />
            <li>
              <h4>LineID</h4>
              <p>...</p>
            </li>
            <hr />
          </ul>
        </div>
        <div className="col-75">
          <div className="header">
            <h1>賴政宏</h1>
            <h3>CHENG HUNG LAI</h3>
          </div>
          <div className="main">
            <h2>個人簡介</h2>
            <p>
              我來自台東，個性溫和待人友善，最喜歡的動物是貓咪，平常的興趣和活動是跟朋友打羽球，或是晚上出去跑步運動，我也喜歡聽音樂，在空閒時間喜歡看書提升自己，希望有朝一日自己可以變得有實力。
            </p>
          </div>
          <div className="main">
            <h2>學歷</h2>
            <ol>
              <li>淡江大學資管系三年級</li>
              <li>國立台東高級中學</li>
              <li>國立台東新生國中</li>
            </ol>
          </div>
          <div className="main">
            <h2>工作經驗</h2>
            <ul>
              <li>2023台東基督教醫院工務室暑期工讀生</li>
              <li>2024台東基督教醫院資訊室暑期工讀生</li>
              <li>2024淡江大學B310工讀生</li>
              <br />
              <img src="/src/assets/seed.jpg" alt="work image" />
            </ul>
          </div>
          <div className="main">
            <h2>學習經驗、未來規劃</h2>
            <h3>學習經驗</h3>
            <ul>
              <li>⾃學linux基礎command</li>
              <li>自學基礎爬蟲</li>
              <li>在系統分析與設計課程擔任組長，領導並參與製作小型linebot專案</li>
            </ul>
            <hr />
            <h3>未來規劃</h3>
            <p>
              目前規劃考取大學程式能力檢定CPE，以及增強自己的前端技能。期許自己能夠在年底有一個side
              project產出。
            </p>
          </div>
        </div>
      <div className="footer" />
    </>

  )
}

export default App
