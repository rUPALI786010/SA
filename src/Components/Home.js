import React from 'react'
import "./Home.css"

function Home() {
  return (
    <section className="main">
        <div className="wrapper">
        <div className="lef-col">
        <div className="post">
        <div className="info">
          <div className="user">
            <div className="profile-pic">
              <img src="https://imgs.search.brave.com/qGtLTjHrYjFb9kQdiVbwH8h6b_Fp5BF1vSYERN2fJlU/rs:fit:888:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/cHV0N3RSSFQ0eGNQ/QzZiT3VqemR3SGFE/OSZwaWQ9QXBp" alt="Hii" />
            </div>
            <p className="username">Company</p>
          </div>
        </div>
        <div id="inner">
          <img src="https://imgs.search.brave.com/qGtLTjHrYjFb9kQdiVbwH8h6b_Fp5BF1vSYERN2fJlU/rs:fit:888:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/cHV0N3RSSFQ0eGNQ/QzZiT3VqemR3SGFE/OSZwaWQ9QXBp" class="post-image" alt="" srcset="" />
        </div>
        <div class="post-content">
          <p class="likes">4.5 star</p>
          <p class="des">
            <span>Company</span>
            Bombay to Virar
            <p class="des">Timing: 8pm</p>
          </p>
          <p class="post-time">2 sec ago</p>
          <div>
          <button class="btn waves-effect waves-light #64b5f6 blue ligthen-2" type="submit" name="action">$20</button>
          </div>
        </div>
      </div>
        </div>
        </div>
    </section>
  )
}

export default Home;
